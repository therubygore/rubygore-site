import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import TocLayout from '../_components/TocLayout';

export const metadata: Metadata = {
  title: 'Disclaimer - The Ruby Gore',
  description: 'Important disclaimer information for The Ruby Gore and Black Thorne Tattoo services.',
};

export default function DisclaimerPage() {
  const tocItems = [
    { href: '#general', label: 'General Disclaimer' },
    { href: '#health', label: 'Health and Medical Information' },
    { href: '#results', label: 'Results May Vary' },
    { href: '#external-links', label: 'External Links' },
    { href: '#limitation', label: 'Limitation of Liability' },
    { href: '#contact', label: 'Contact Information' },
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Disclaimer</h1>
          <p>Last updated: December 13, 2024</p>
        </div>
      </section>

      <TocLayout tocItems={tocItems}>
        <section id="general">
          <h2 className="text-title">General Disclaimer</h2>
          <p>The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information provided.</p>
        </section>

        <section id="health">
          <h2 className="text-title">Health and Medical Information</h2>
          <p>Any health-related information on this website is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or tattoo healing.</p>
          <p>If you have any concerns about getting a tattoo, including scar cover-ups, please consult with your doctor before booking an appointment.</p>
        </section>

        <section id="results">
          <h2 className="text-title">Results May Vary</h2>
          <p>Portfolio images and testimonials represent individual results and experiences. Your tattoo results may vary based on factors including skin type, healing process, lifestyle, and adherence to aftercare instructions. We cannot guarantee specific outcomes.</p>
        </section>

        <section id="external-links">
          <h2 className="text-title">External Links</h2>
          <p>This website may contain links to external websites that are not under our control. We have no control over the content of those sites and are not responsible for their content or availability. The inclusion of any links does not necessarily imply a recommendation or endorsement.</p>
        </section>

        <section id="limitation">
          <h2 className="text-title">Limitation of Liability</h2>
          <p>In no event shall The Ruby Gore or Black Thorne Tattoo be liable for any special, direct, indirect, consequential, or incidental damages arising out of or in connection with the use of this website or the information contained herein.</p>
        </section>

        <section id="contact">
          <h2 className="text-title">Contact Information</h2>
          <p>If you have any questions about this disclaimer, please contact us:</p>
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

