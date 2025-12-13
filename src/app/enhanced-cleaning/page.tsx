import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';

export const metadata: Metadata = {
  title: 'Enhanced Cleaning & Safety Measures - The Ruby Gore',
  description: 'The highest standards of health and safety protocols at Black Thorne Tattoo in Portland, Oregon.',
};

export default function EnhancedCleaningPage() {
  const tocItems = [
    { href: '#commitment', label: 'Our Commitment to Safety' },
    { href: '#protocols', label: 'Studio Safety Protocols' },
    { href: '#protective-measures', label: 'Required Protective Measures' },
    { href: '#cleaning', label: 'Enhanced Cleaning & Disinfection' },
    { href: '#additional-info', label: 'Additional Information' },
  ];

  return (
    <>
      <PageHero
        title="Enhanced Cleaning & Safety Measures"
        subtitle="The Highest Standards — Before, During + Long After The Pandemic"
      />

      <TocLayout tocItems={tocItems}>
        <section id="commitment">
          <h2 className="text-title">Our Commitment to Safety</h2>
          <p>To help reduce the spread of COVID-19, we have been committed to the highest standards of protective measures and cleaning to help keep everyone safe during these unprecedented times and long before them too.</p>
        </section>

        <section id="protocols">
          <h2 className="text-title">Studio Safety Protocols</h2>
          <ul>
            <li>The studio is limited to only one client per artist, no guests allowed</li>
            <li>Hand sanitizer and hand washing stations are easily accessible throughout the studio</li>
            <li>Studio maintains attendance records of all staff and clients to support public health contact tracing efforts</li>
            <li>Staff has been trained on the proper use of face masks, hand washing, proper respiratory etiquette and use of other personal protective equipment</li>
            <li>COVID-19 health screening is required daily, for all clients and staff prior to each appointment</li>
            <li>We offer cashless checkout to help stop the spread of COVID-19</li>
          </ul>
        </section>

        <section id="protective-measures">
          <h2 className="text-title">Required Protective Measures</h2>
          <p>Please join us by adhering to the following required protective measures in the studio:</p>
          <ul>
            <li>Stay home when you are sick</li>
            <li>Wear a face mask or covering when you are in the studio, even if you are fully vaccinated</li>
            <li>Wash hands immediately upon arrival and frequently with liquid soap and warm water for at least 20 seconds and avoid touching your face with unwashed hands</li>
            <li>Keep a two meter/six feet distance when possible</li>
            <li>Cover cough or sneeze with the elbow or a tissue. Immediately throw the tissue in the garbage and wash hands</li>
          </ul>
        </section>

        <section id="cleaning">
          <h2 className="text-title">Enhanced Cleaning &amp; Disinfection</h2>
          <ul>
            <li>All areas are cleaned and sanitized twice a day, before and after each client</li>
            <li>High-touch surfaces are disinfected regularly throughout the day</li>
            <li>All equipment is sterilized using hospital-grade autoclaves</li>
            <li>Single-use, disposable items are used whenever possible</li>
            <li>HEPA air filtration systems run continuously</li>
          </ul>
        </section>

        <section id="additional-info">
          <h2 className="text-title">Additional Information</h2>
          <p>Your health and safety are our top priorities. If you have any questions about our safety protocols, please don&apos;t hesitate to <a href="/contact" style={{ color: '#333', textDecoration: 'underline' }}>contact us</a>.</p>
        </section>
      </TocLayout>
    </>
  );
}

