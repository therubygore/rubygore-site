'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import clientsData from '../../../data/clients.json';

type Client = (typeof clientsData.clients)[number];

type StoredReference = {
  id: string;
  name: string;
  size: number;
  type: string;
  addedAt: string;
};

type PortalData = {
  folderLink: string;
  references: StoredReference[];
};

type Tab = 'waitlist' | 'references' | 'booking';

const STORAGE_KEY_SESSION = 'rg_client_session';
const storageKeyForClient = (email: string) => `rg_client_data_${email.toLowerCase()}`;

function loadClientData(email: string): PortalData {
  if (typeof window === 'undefined') {
    return { folderLink: '', references: [] };
  }
  try {
    const raw = window.localStorage.getItem(storageKeyForClient(email));
    if (!raw) return { folderLink: '', references: [] };
    const parsed = JSON.parse(raw) as PortalData;
    return {
      folderLink: parsed.folderLink ?? '',
      references: Array.isArray(parsed.references) ? parsed.references : [],
    };
  } catch {
    return { folderLink: '', references: [] };
  }
}

function saveClientData(email: string, data: PortalData) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(storageKeyForClient(email), JSON.stringify(data));
  } catch {
    // quota or blocked — silently ignore
  }
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type PortalSession =
  | { status: 'loading' }
  | { status: 'ready'; client: Client; portalData: PortalData };

export default function ClientPortalPage() {
  const router = useRouter();
  const [session, setSession] = useState<PortalSession>({ status: 'loading' });
  const [tab, setTab] = useState<Tab>('waitlist');
  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  useEffect(() => {
    const email =
      typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY_SESSION) : null;
    if (!email) {
      router.replace('/client-login');
      return;
    }
    const match = clientsData.clients.find((c) => c.email.toLowerCase() === email.toLowerCase());
    if (!match) {
      window.localStorage.removeItem(STORAGE_KEY_SESSION);
      router.replace('/client-login');
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- client-only hydration from localStorage
    setSession({ status: 'ready', client: match, portalData: loadClientData(match.email) });
  }, [router]);

  const client = session.status === 'ready' ? session.client : null;
  const portalData = session.status === 'ready' ? session.portalData : { folderLink: '', references: [] };

  const setPortalData = (next: PortalData) => {
    setSession((prev) => (prev.status === 'ready' ? { ...prev, portalData: next } : prev));
  };

  const waitlistProgress = useMemo(() => {
    if (!client) return 0;
    const { position, totalInQueue } = client.waitlist;
    if (!totalInQueue) return 0;
    const aheadOfYou = Math.max(0, totalInQueue - position);
    return Math.min(100, Math.round((aheadOfYou / totalInQueue) * 100));
  }, [client]);

  const handleLogout = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY_SESSION);
    } catch {
      // ignore
    }
    router.push('/client-login');
  };

  const handleFolderLinkSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!client) return;
    saveClientData(client.email, portalData);
    setSavedNotice('Folder link saved. Ruby will review it before your consult.');
    window.setTimeout(() => setSavedNotice(null), 3500);
  };

  const handleFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!client) return;
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const nowIso = new Date().toISOString();
    const additions: StoredReference[] = Array.from(files).map((file, idx) => ({
      id: `${Date.now()}-${idx}-${file.name}`,
      name: file.name,
      size: file.size,
      type: file.type,
      addedAt: nowIso,
    }));

    const next: PortalData = {
      ...portalData,
      references: [...portalData.references, ...additions],
    };
    setPortalData(next);
    saveClientData(client.email, next);
    setSavedNotice(`${additions.length} reference${additions.length === 1 ? '' : 's'} added. Ruby will see them before your session.`);
    window.setTimeout(() => setSavedNotice(null), 3500);
    e.target.value = '';
  };

  const handleRemoveReference = (id: string) => {
    if (!client) return;
    const next: PortalData = {
      ...portalData,
      references: portalData.references.filter((r) => r.id !== id),
    };
    setPortalData(next);
    saveClientData(client.email, next);
  };

  if (session.status !== 'ready' || !client) {
    return (
      <section className="page-hero page-hero--tight">
        <div className="container">
          <h1>Loading…</h1>
        </div>
      </section>
    );
  }

  const { waitlist, booking } = client;

  return (
    <>
      <section className="page-hero page-hero--tight portal-hero">
        <div className="container portal-hero-inner">
          <div>
            <h1>Welcome, {client.name}</h1>
            <p>Your client hub — track your spot, share references, and book your next session.</p>
          </div>
          <button type="button" className="btn btn--outline portal-logout" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </section>

      <section className="client-portal-section">
        <div className="container">
          <div className="portal-tabs" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'waitlist'}
              className={`portal-tab ${tab === 'waitlist' ? 'is-active' : ''}`}
              onClick={() => setTab('waitlist')}
            >
              Waitlist
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'references'}
              className={`portal-tab ${tab === 'references' ? 'is-active' : ''}`}
              onClick={() => setTab('references')}
            >
              References
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'booking'}
              className={`portal-tab ${tab === 'booking' ? 'is-active' : ''}`}
              onClick={() => setTab('booking')}
            >
              Booking
            </button>
          </div>

          {savedNotice && <div className="portal-notice">{savedNotice}</div>}

          {tab === 'waitlist' && (
            <div className="portal-card" role="tabpanel">
              <div className="portal-card-header">
                <div className="text-title">Waitlist status</div>
                <span className="portal-pill">Joined {waitlist.joinedAt}</span>
              </div>

              <div className="portal-stat-grid">
                <div className="portal-stat">
                  <span className="portal-stat-label">Your position</span>
                  <span className="portal-stat-value">#{waitlist.position}</span>
                  <span className="portal-stat-sub">of {waitlist.totalInQueue} in queue</span>
                </div>
                <div className="portal-stat">
                  <span className="portal-stat-label">Estimated consult</span>
                  <span className="portal-stat-value portal-stat-value--text">
                    {waitlist.estimatedConsultWindow}
                  </span>
                  <span className="portal-stat-sub">Ruby will email to confirm</span>
                </div>
              </div>

              <div className="portal-progress" aria-label="Waitlist progress">
                <div
                  className="portal-progress-bar"
                  style={{ width: `${waitlistProgress}%` }}
                />
              </div>
              <p className="portal-progress-caption">
                You&apos;ve moved past roughly {waitlistProgress}% of the queue since joining.
              </p>

              <div className="portal-update">
                <div className="text-ui">Latest note from Ruby</div>
                <p>{waitlist.lastUpdate}</p>
              </div>
            </div>
          )}

          {tab === 'references' && (
            <div className="portal-card" role="tabpanel">
              <div className="portal-card-header">
                <div className="text-title">Reference images</div>
              </div>
              <p>
                Share the images and inspiration that will shape your piece. You can either drop
                files here or link a shared folder (Google Drive, Dropbox, Pinterest, etc.).
              </p>

              <div className="portal-upload">
                <label htmlFor="reference-upload" className="portal-upload-dropzone">
                  <span className="portal-upload-title">Click to upload reference images</span>
                  <span className="portal-upload-sub">PNG, JPG, HEIC, or PDF — up to 10 at a time</span>
                  <input
                    id="reference-upload"
                    type="file"
                    multiple
                    accept="image/*,.pdf,.heic"
                    onChange={handleFilesSelected}
                    className="portal-upload-input"
                  />
                </label>

                {portalData.references.length > 0 && (
                  <ul className="portal-reference-list">
                    {portalData.references.map((ref) => (
                      <li key={ref.id} className="portal-reference-item">
                        <div className="portal-reference-info">
                          <span className="portal-reference-name">{ref.name}</span>
                          <span className="portal-reference-meta">
                            {formatBytes(ref.size)} · added {new Date(ref.addedAt).toLocaleDateString()}
                          </span>
                        </div>
                        <button
                          type="button"
                          className="portal-reference-remove"
                          onClick={() => handleRemoveReference(ref.id)}
                          aria-label={`Remove ${ref.name}`}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <form className="portal-folder-form" onSubmit={handleFolderLinkSave}>
                <div className="form-group full-width">
                  <label htmlFor="folder-link">Reference folder link</label>
                  <input
                    id="folder-link"
                    name="folderLink"
                    type="url"
                    placeholder="https://drive.google.com/…"
                    value={portalData.folderLink}
                    onChange={(e) =>
                      setPortalData({ ...portalData, folderLink: e.target.value })
                    }
                  />
                  <small className="form-hint">
                    Make sure the folder is set to “Anyone with the link can view.”
                  </small>
                </div>
                <button type="submit" className="submit-btn">
                  Save folder link
                </button>
              </form>
            </div>
          )}

          {tab === 'booking' && (
            <div className="portal-card" role="tabpanel">
              <div className="portal-card-header">
                <div className="text-title">Booking calendar</div>
              </div>
              <p>
                Once Ruby clears your consult, you can book your session directly here. If your
                booking window isn&apos;t open yet, the calendar will show no availability — check
                back after your consult email.
              </p>

              {booking.nextAppointment && (
                <div className="portal-update">
                  <div className="text-ui">Your next appointment</div>
                  <p>{booking.nextAppointment}</p>
                </div>
              )}

              <div className="portal-calendar-cta">
                <a
                  href={booking.calendarUrl}
                  className="btn btn--red"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open booking calendar
                </a>
                <Link href="/booking-policies" className="portal-secondary-link">
                  Review booking policies →
                </Link>
              </div>

              <div className="portal-calendar-embed">
                <iframe
                  src={booking.calendarUrl}
                  title="Booking calendar"
                  loading="lazy"
                />
                <p className="portal-calendar-fallback">
                  Calendar not loading?{' '}
                  <a href={booking.calendarUrl} target="_blank" rel="noopener noreferrer">
                    Open it in a new tab
                  </a>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
