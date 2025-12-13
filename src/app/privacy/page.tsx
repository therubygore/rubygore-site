import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - The Ruby Gore',
  description: 'Privacy policy for The Ruby Gore and Black Thorne Tattoo.',
};

export default function PrivacyPage() {
  const tocItems = [
    { href: '#information-we-collect', label: 'Information We Collect' },
    { href: '#how-we-use', label: 'How We Use Your Information' },
    { href: '#information-sharing', label: 'Information Sharing' },
    { href: '#data-security', label: 'Data Security' },
    { href: '#your-rights', label: 'Your Rights' },
    { href: '#cookies', label: 'Cookies and Tracking' },
    { href: '#changes', label: 'Changes to This Policy' },
    { href: '#contact', label: 'Contact Us' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: December 13, 2024</p>
        </div>
      </section>

      <TocLayout tocItems={tocItems}>
        <section id="information-we-collect">
          <h2 className="text-title">Information We Collect</h2>
          <p>We collect information you provide directly to us, such as when you book an appointment, sign up for our newsletter, or contact us for support. This may include:</p>
          <ul>
            <li>Name, email address, and contact information</li>
            <li>Appointment details and preferences</li>
            <li>Payment and billing information</li>
            <li>Photos and design references you share with us</li>
            <li>Communication preferences</li>
          </ul>
        </section>

        <section id="how-we-use">
          <h2 className="text-title">How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Schedule and manage your tattoo appointments</li>
            <li>Process payments and send related information</li>
            <li>Send appointment reminders and aftercare instructions</li>
            <li>Respond to your questions and provide customer support</li>
            <li>Send newsletters and updates (with your consent)</li>
            <li>Maintain our portfolio (only with explicit permission)</li>
          </ul>
        </section>

        <section id="information-sharing">
          <h2 className="text-title">Information Sharing</h2>
          <p>We do not sell, trade, or otherwise transfer your personal information to third parties. We only share your information:</p>
          <ul>
            <li>With your explicit consent</li>
            <li>To comply with legal obligations</li>
            <li>To protect our rights and safety</li>
            <li>With service providers who assist our operations (e.g., payment processors)</li>
          </ul>
        </section>

        <section id="data-security">
          <h2 className="text-title">Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
        </section>

        <section id="your-rights">
          <h2 className="text-title">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for photo usage</li>
          </ul>
        </section>

        <section id="cookies">
          <h2 className="text-title">Cookies and Tracking</h2>
          <p>We use cookies and similar tracking technologies to improve your experience on our website, analyze usage patterns, and deliver personalized content. You can control cookie settings through your browser.</p>
        </section>

        <section id="changes">
          <h2 className="text-title">Changes to This Policy</h2>
          <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>
        </section>

        <section id="contact">
          <h2 className="text-title">Contact Us</h2>
          <p>If you have any questions about this privacy policy, please contact us:</p>
          <p>
            <strong>Black Thorne Tattoo</strong><br />
            419 SE 13th Ave<br />
            Portland, OR 97214<br />
            <a href="mailto:contact@therubygore.com">contact@therubygore.com</a>
          </p>
        </section>
      </TocLayout>
    </>
  );
}

