'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import clientsData from '../../../data/clients.json';

type Client = (typeof clientsData.clients)[number];

export default function ClientLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const match: Client | undefined = clientsData.clients.find(
      (c) =>
        c.email.toLowerCase() === email.trim().toLowerCase() &&
        c.accessCode === accessCode.trim(),
    );

    if (!match) {
      setError('We couldn’t find a match. Check your email and access code, or reach out to Ruby.');
      setSubmitting(false);
      return;
    }

    try {
      window.localStorage.setItem('rg_client_session', match.email);
    } catch {
      // storage blocked — session just won't persist
    }
    router.push('/client-portal');
  };

  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="container">
          <h1>Client Login</h1>
          <p>
            Sign in to view your waitlist status, share reference images, and book your next session.
          </p>
        </div>
      </section>

      <section className="client-login-section">
        <div className="container">
          <div className="client-login-card">
            <form className="demo-form client-login-form" onSubmit={handleSubmit}>
              <div className="form-group full-width">
                <label htmlFor="login-email">Email Address</label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="login-code">Access Code</label>
                <input
                  id="login-code"
                  name="accessCode"
                  type="password"
                  autoComplete="current-password"
                  value={accessCode}
                  onChange={(e) => setAccessCode(e.target.value)}
                  required
                />
                <small className="form-hint">
                  Your access code was emailed to you when Ruby accepted your application.
                </small>
              </div>

              {error && <div className="form-error full-width">{error}</div>}

              <button type="submit" className="submit-btn" disabled={submitting}>
                {submitting ? 'Signing in…' : 'Sign In'}
              </button>
            </form>

            <div className="client-login-help">
              <p>
                Don&apos;t have an access code yet?{' '}
                <Link href="/apply-now">Apply to join the waitlist</Link>.
              </p>
              <p>
                Lost your code?{' '}
                <a href="mailto:contact@therubygore.com">Email Ruby</a> and she&apos;ll resend it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
