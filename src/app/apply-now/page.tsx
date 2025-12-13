import type { Metadata } from 'next';
import PageHero from '../_components/PageHero';
import CtaSection from '../_components/CtaSection';

export const metadata: Metadata = {
  title: 'Apply Now - The Ruby Gore | Book Your Tattoo Appointment',
  description: 'Ready to start your tattoo journey? Contact Black Thorne Tattoo to schedule your consultation with Ruby Gore.',
};

export default function ApplyNowPage() {
  return (
    <>
      <section className="page-hero page-hero--tight">
        <div className="container">
          <h1>Apply Now</h1>
          <p>Ready to start your tattoo journey? Let&apos;s create something beautiful together.</p>
        </div>
      </section>

      <div className="apply-section">
        <div className="container">
          <div className="apply-content">
            <div className="apply-info">
              <div className="info-card">
                <div className="text-title">STUDIO LOCATION</div>
                <p><strong>Black Thorne Tattoo</strong><br />
                419 SE 13th Ave, Portland, OR 97214</p>
              </div>
              
              <div className="info-card">
                <div className="text-title">CONTACT INFORMATION</div>
                <p><a href="mailto:contact@therubygore.com">contact@therubygore.com</a><br />
                <a href="tel:5039085188">(503) 908-5188</a></p>
              </div>
              
              <div className="info-card">
                <div className="text-title">STUDIO HOURS</div>
                <p><em>By Appointment Only</em></p>
                <ul className="hours-list">
                  <li><strong>Monday:</strong> 12–8 PM</li>
                  <li><strong>Tuesday:</strong> Closed</li>
                  <li><strong>Wednesday:</strong> Closed</li>
                  <li><strong>Thursday:</strong> 12–8 PM</li>
                  <li><strong>Friday:</strong> 12–8 PM</li>
                  <li><strong>Saturday:</strong> 12–8 PM</li>
                  <li><strong>Sunday:</strong> 12–8 PM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CtaSection
        title="Ready to Get Started?"
        description="To enquire about an appointment, please submit an application below."
        buttonText="SUBMIT APPLICATION"
        buttonLink="/project-proposal-form"
      />
    </>
  );
}

