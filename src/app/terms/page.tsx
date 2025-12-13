import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';

export const metadata: Metadata = {
  title: 'Terms of Service - The Ruby Gore',
  description: 'Terms of service for booking and receiving tattoo services at Black Thorne Tattoo.',
};

export default function TermsPage() {
  const tocItems = [
    { href: '#acceptance', label: 'Acceptance of Terms' },
    { href: '#services', label: 'Description of Services' },
    { href: '#booking', label: 'Booking and Payment' },
    { href: '#client-responsibilities', label: 'Client Responsibilities' },
    { href: '#cancellation', label: 'Cancellation and Rescheduling' },
    { href: '#intellectual-property', label: 'Intellectual Property' },
    { href: '#liability', label: 'Limitation of Liability' },
    { href: '#contact', label: 'Contact Information' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last updated: December 13, 2024</p>
        </div>
      </section>

      <TocLayout tocItems={tocItems}>
        <section id="acceptance">
          <h2 className="text-title">Acceptance of Terms</h2>
          <p>By booking an appointment or receiving services from The Ruby Gore / Black Thorne Tattoo, you accept and agree to be bound by these terms and conditions. If you do not agree to these terms, please do not book our services.</p>
        </section>

        <section id="services">
          <h2 className="text-title">Description of Services</h2>
          <p>We provide professional tattoo services including:</p>
          <ul>
            <li>Custom tattoo design and consultation</li>
            <li>Scar cover-up tattoos</li>
            <li>Vegan and cruelty-free tattooing</li>
            <li>Trauma-informed tattooing practices</li>
            <li>Aftercare guidance and support</li>
          </ul>
        </section>

        <section id="booking">
          <h2 className="text-title">Booking and Payment</h2>
          <p>All appointments require a non-refundable booking fee to secure your spot on the waitlist. This fee will be applied to the final cost of your tattoo. Full payment is due at the completion of your final session.</p>
          <p>For detailed information about our booking policies, please review our <a href="/booking-policies" style={{ color: '#333', textDecoration: 'underline' }}>Booking Policies</a> page.</p>
        </section>

        <section id="client-responsibilities">
          <h2 className="text-title">Client Responsibilities</h2>
          <p>Clients are responsible for:</p>
          <ul>
            <li>Providing accurate health information and disclosing any medical conditions</li>
            <li>Following pre-appointment preparation instructions</li>
            <li>Arriving on time and sober to appointments</li>
            <li>Following all aftercare instructions provided</li>
            <li>Being at least 18 years of age with valid ID</li>
          </ul>
        </section>

        <section id="cancellation">
          <h2 className="text-title">Cancellation and Rescheduling</h2>
          <p>We require at least 72 hours notice for cancellations or rescheduling. Cancellations within 72 hours may result in forfeiture of your booking fee. No-shows will forfeit their booking fee and must place a new deposit to rebook.</p>
        </section>

        <section id="intellectual-property">
          <h2 className="text-title">Intellectual Property</h2>
          <p>All custom tattoo designs created by Ruby Gore remain the intellectual property of the artist. We may use photos of completed tattoos for portfolio and marketing purposes only with your explicit written consent.</p>
        </section>

        <section id="liability">
          <h2 className="text-title">Limitation of Liability</h2>
          <p>While we maintain the highest standards of safety and sanitation, clients acknowledge that tattooing carries inherent risks. We are not liable for complications arising from failure to follow aftercare instructions or pre-existing medical conditions not disclosed prior to tattooing.</p>
        </section>

        <section id="contact">
          <h2 className="text-title">Contact Information</h2>
          <p>If you have any questions about these terms, please contact us:</p>
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

