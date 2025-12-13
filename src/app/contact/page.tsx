'use client';

import Link from 'next/link';
import PageHero from '../_components/PageHero';
import CtaSection from '../_components/CtaSection';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log('Contact form submitted:', Object.fromEntries(formData));
    alert('Thank you for your message! We\'ll get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        title="Get in touch"
        subtitle="Ready to start your tattoo journey? Let's discuss your vision and create something beautiful together."
        tight
      />

      <section className="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let&apos;s start a conversation</h2>
              <p>
                Tell us about your tattoo vision and we&apos;ll help you bring it to life with a
                trauma-informed, personalized approach.
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div className="method-content">
                    <h3>Email us</h3>
                    <p>hello@therubygore.com</p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-content">
                    <h3>Visit us</h3>
                    <p>
                      Black Thorne Tattoo<br />
                      Portland, Oregon
                    </p>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📋</div>
                  <div className="method-content">
                    <h3>Apply now</h3>
                    <p>
                      <Link href="/apply-now">New client intake form</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form">
              <form className="demo-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" />
                </div>

                <div className="form-group">
                  <label htmlFor="inquiry-type">Type of Inquiry *</label>
                  <select id="inquiry-type" name="inquiry-type" required>
                    <option value="">Select inquiry type</option>
                    <option value="new-client">New Client - First Tattoo</option>
                    <option value="returning-client">Returning Client</option>
                    <option value="scar-cover-up">Scar Cover-up Consultation</option>
                    <option value="collaboration">Interview/Collaboration</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferred-location">Preferred Location</label>
                  <select id="preferred-location" name="preferred-location">
                    <option value="">Select location</option>
                    <option value="portland">Portland, Oregon</option>
                    <option value="travel">Travel (I can travel)</option>
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Tell us about your tattoo vision *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your tattoo idea, placement, size, and any special considerations..."
                  />
                </div>

                <div className="form-group full-width">
                  <label className="checkbox-label">
                    <input type="checkbox" name="newsletter" value="yes" />
                    <span className="checkmark"></span>
                    I&apos;d like to receive updates about Ruby&apos;s work and tattoo tips
                  </label>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

