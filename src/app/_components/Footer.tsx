'use client';

import Link from 'next/link';

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.querySelector('.newsletter-input') as HTMLInputElement)?.value;
    if (!email) {
      alert('Please enter a valid email address.');
      return;
    }
    console.log('Newsletter subscription submitted:', email);
    alert('Thank you for subscribing!');
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="newsletter" id="newsletter">
        <div className="container">
          <div className="newsletter-content">
            <p className="text-title">
              Stay up to date with<br />Ruby&apos;s industry insights<br />and reports
            </p>

            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <input type="email" className="newsletter-input" placeholder="Your email" required />
              <button type="submit" className="btn newsletter-btn">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          {/* New 3-column studio info container */}
          <div className="footer-studio-info">
            <div className="studio-column">
              <div className="text-title">Studio Hours</div>
              <p>Monday 12-8pm</p>
              <p>Tuesday Closed</p>
              <p>Wednesday Closed</p>
              <p>Thursday 12-8pm</p>
              <p>Friday 12-8pm</p>
              <p>Saturday 12-8pm</p>
              <p>Sunday 12-8pm</p>
              <br />
              <div className="text-title">By Appointment Only</div>
              <p>
                To enquire about an appointment, please{' '}
                <Link href="/apply-now" style={{ textDecoration: 'underline' }}>
                  submit an application
                </Link>
              </p>
            </div>

            <div className="studio-column">
              <div className="text-title">Studio Location</div>
              <p>Black Thorne Tattoo</p>
              <p>419 SE 13th Ave. Portland, OR 97214</p>

              <div className="text-title">Contact Information</div>
              <p>(503) 908-5188</p>
              <p>contact@therubygore.com</p>

              <a
                href="https://maps.google.com/?q=419+SE+13th+Ave+Portland+OR+97214"
                className="btn btn--white"
                target="_blank"
                rel="noopener"
              >
                Get Directions
              </a>
            </div>

            <div className="studio-column">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2795.6504900360997!2d-122.6554!3d45.5152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzU0LjciTiAxMjLCsDM5JzE5LjQiVw!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Black Thorne Tattoo Location"
              ></iframe>
            </div>
          </div>

          <div className="footer-content">
            <div className="footer-section">
              <div className="text-title">Company</div>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/testimonials">Testimonials</Link>
                </li>
                <li>
                  <Link href="/mailing-list">Mailing List</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/pdx">PDX</Link>
                </li>
                <li>
                  <Link href="/philly">Philly</Link>
                </li>
                <li>
                  <Link href="/sandiego">San Diego</Link>
                </li>
                <li>
                  <Link href="/travel">Travel</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms</Link>
                </li>
                <li>
                  <Link href="/disclaimer">Disclaimer</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <div className="text-title">Services</div>
              <ul>
                <li>
                  <Link href="/vegan-tattoos">Vegan Tattoos</Link>
                </li>
                <li>
                  <Link href="/scar-cover-up-tattoos">Scar Cover Up Tattoos</Link>
                </li>
                <li>
                  <Link href="/survivor-tattoo-project">Survivor Tattoo Project</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <div className="text-title">Portfolio</div>
              <ul>
                <li>
                  <Link href="/floral-tattoo">Floral Tattoos</Link>
                </li>
                <li>
                  <Link href="/botanical-tattoo">Botanical Tattoos</Link>
                </li>
                <li>
                  <Link href="/animal-tattoo">Animal Tattoos</Link>
                </li>
                <li>
                  <Link href="/bird-tattoo">Bird Tattoos</Link>
                </li>
                <li>
                  <Link href="/dotwork-tattoo">Dotwork Tattoos</Link>
                </li>
                <li>
                  <Link href="/nature-tattoo">Nature Tattoos</Link>
                </li>
                <li>
                  <Link href="/pet-portrait-tattoo">Pet Portrait Tattoos</Link>
                </li>
                <li>
                  <Link href="/scar-cover-up-tattoo">Scar Cover Up Tattoos</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <div className="text-title">Process</div>
              <ul>
                <li>
                  <Link href="/booking-process">Booking Process</Link>
                </li>
                <li>
                  <Link href="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/booking-policies">Booking Policies</Link>
                </li>
                <li>
                  <Link href="/enhanced-cleaning">Enhanced Cleaning</Link>
                </li>
                <li>
                  <Link href="/apply-now">Apply Now</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <div className="text-title">Resources</div>
              <ul>
                <li>
                  <Link href="/founders-club">Founders Club</Link>
                </li>
                <li>
                  <Link href="/faqs">FAQs</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/photo-guide">Photo Guide</Link>
                </li>
                <li>
                  <Link href="/tattoo-prep">Tattoo Prep</Link>
                </li>
                <li>
                  <Link href="/tattoo-aftercare-guide">Tattoo Aftercare Guide</Link>
                </li>
                <li>
                  <Link href="/tattoo-aftercare-products">Tattoo Aftercare Products</Link>
                </li>
                <li>
                  <Link href="/tattoo-healing-process">Tattoo Healing Process</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-logo">
              <Link href="/" className="footer-logo-link">
                therubygore
              </Link>
            </div>
            <div className="social-links">
              <a
                href="https://www.instagram.com/therubygore/"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://x.com/therubygore"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/therubygore"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.pinterest.com/therubygore/"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="Pinterest"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                </svg>
              </a>
              <a
                href="https://therubygore.tumblr.com/"
                className="social-link"
                target="_blank"
                rel="noopener"
                aria-label="Tumblr"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.23H6.26V6.53S7.112 6.23 7.112 5.23c0-1.1-.9-2-2-2s-2 .9-2 2c0 1 1.012 1.5 1.012 2.5v2.7H.022V9.23h2.969v8.058C3.022 22.65 6.26 24 8.563 24c.732 0 1.158-.268 1.158-.268l-.268-2.411C9.455 21.5 9.022 21.5 8.563 21.5c-1.158 0-2.411-.732-2.411-2.411V9.23h4.563v-2.7h-4.563V5.23c0-1.1.9-2 2-2s2 .9 2 2v1.3h2.969v2.7h-2.969v8.058c0 2.655 1.938 6.411 7.031 6.411.732 0 1.158-.268 1.158-.268l-.268-2.411c-.268 0-.732.268-1.158.268z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

