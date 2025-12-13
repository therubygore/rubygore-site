'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [mobileMenuOpen]);

  const toggleSubmenu = (menu: string) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <>
      <header className={isHomepage ? 'dark-theme' : 'light-theme'}>
        <nav className="container">
          <div className="nav-left">
            <Link href="/" className="logo">
              therubygore
            </Link>
            <ul className="nav-links">
              <li className="nav-item-wrapper">
                <span className="nav-link">About</span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <Link href="/about">About</Link>
                    <Link href="/testimonials">Testimonials</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item-wrapper">
                <span className="nav-link">Services</span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <Link href="/vegan-tattoos">Vegan Tattoos</Link>
                    <Link href="/scar-cover-up-tattoos">Scar Cover Up Tattoos</Link>
                    <Link href="/survivor-tattoo-project">Survivor Tattoo Project</Link>
                  </div>
                </div>
              </li>
              <li className="nav-item-wrapper">
                <span className="nav-link">Portfolio</span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="portfolio-grid">
                      <div className="portfolio-column">
                        <Link href="/floral-tattoo">Floral Tattoos</Link>
                        <Link href="/botanical-tattoo">Botanical Tattoos</Link>
                        <Link href="/animal-tattoo">Animal Tattoos</Link>
                        <Link href="/bird-tattoo">Bird Tattoos</Link>
                      </div>
                      <div className="portfolio-column">
                        <Link href="/dotwork-tattoo">Dotwork Tattoos</Link>
                        <Link href="/nature-tattoo">Nature Tattoos</Link>
                        <Link href="/pet-portrait-tattoo">Pet Portrait Tattoos</Link>
                        <Link href="/scar-cover-up-tattoo">Scar Cover Up Tattoos</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item-wrapper">
                <span className="nav-link">Process</span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="process-grid">
                      <div className="process-column">
                        <Link href="/booking-process">Booking Process</Link>
                        <Link href="/pricing">Pricing</Link>
                        <Link href="/booking-policies">Booking Policies</Link>
                      </div>
                      <div className="process-column">
                        <Link href="/enhanced-cleaning">Enhanced Cleaning</Link>
                        <Link href="/apply-now">Apply Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item-wrapper">
                <span className="nav-link">Resources</span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="resources-grid">
                      <div className="resources-column">
                        <span className="section-header">Tattoo Prep</span>
                        <Link href="/photo-guide">Photo Guide</Link>
                        <Link href="/tattoo-prep">Tattoo Prep</Link>
                      </div>
                      <div className="resources-column">
                        <span className="section-header">Aftercare</span>
                        <Link href="/tattoo-aftercare-guide">Tattoo Aftercare Guide</Link>
                        <Link href="/tattoo-aftercare-products">Tattoo Aftercare Products</Link>
                        <Link href="/tattoo-healing-process">Tattoo Healing Process</Link>
                      </div>
                      <div className="resources-column">
                        <span className="section-header section-header-spacer">Spacer</span>
                        <Link href="/faqs">FAQs</Link>
                        <Link href="/blog">Blog</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item-wrapper">
                <span className="nav-link">Contact</span>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    <div className="contact-grid">
                      <div className="contact-column">
                        <span className="section-header">Locations</span>
                        <Link href="/pdx">PDX</Link>
                        <Link href="/philly">Philly</Link>
                        <Link href="/sandiego">San Diego</Link>
                      </div>
                      <div className="contact-column">
                        <Link href="/contact">Contact Us</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="header-actions">
            <Link href="/apply-now" className="btn btn--red">
              → Book Now
            </Link>
            <div className="hamburger" onClick={() => setMobileMenuOpen(true)}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay dark-theme ${mobileMenuOpen ? 'active' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            closeMobileMenu();
          }
        }}
      >
        <div className="mobile-menu-header">
          <Link href="/" className="logo" onClick={closeMobileMenu}>
            therubygore
          </Link>
          <div className="mobile-menu-actions">
            <Link href="/apply-now" className="btn btn--red" onClick={closeMobileMenu}>
              → Book Now
            </Link>
            <button className="mobile-menu-close" onClick={closeMobileMenu}>
              ×
            </button>
          </div>
        </div>
        <div className="mobile-menu-content">
          <div className="mobile-menu-item">
            <button
              className={`mobile-menu-header-item ${activeSubmenu === 'about' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('about')}
            >
              About
              <span className="chevron">›</span>
            </button>
            <div className={`mobile-submenu ${activeSubmenu === 'about' ? 'active' : ''}`}>
              <Link href="/about" onClick={closeMobileMenu}>About</Link>
              <Link href="/testimonials" onClick={closeMobileMenu}>Testimonials</Link>
            </div>
          </div>

          <div className="mobile-menu-item">
            <button
              className={`mobile-menu-header-item ${activeSubmenu === 'services' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('services')}
            >
              Services
              <span className="chevron">›</span>
            </button>
            <div className={`mobile-submenu ${activeSubmenu === 'services' ? 'active' : ''}`}>
              <Link href="/vegan-tattoos" onClick={closeMobileMenu}>Vegan Tattoos</Link>
              <Link href="/scar-cover-up-tattoos" onClick={closeMobileMenu}>Scar Cover Up Tattoos</Link>
              <Link href="/survivor-tattoo-project" onClick={closeMobileMenu}>Survivor Tattoo Project</Link>
            </div>
          </div>

          <div className="mobile-menu-item">
            <button
              className={`mobile-menu-header-item ${activeSubmenu === 'portfolio' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('portfolio')}
            >
              Portfolio
              <span className="chevron">›</span>
            </button>
            <div className={`mobile-submenu ${activeSubmenu === 'portfolio' ? 'active' : ''}`}>
              <Link href="/floral-tattoo" onClick={closeMobileMenu}>Floral Tattoos</Link>
              <Link href="/botanical-tattoo" onClick={closeMobileMenu}>Botanical Tattoos</Link>
              <Link href="/animal-tattoo" onClick={closeMobileMenu}>Animal Tattoos</Link>
              <Link href="/bird-tattoo" onClick={closeMobileMenu}>Bird Tattoos</Link>
              <Link href="/dotwork-tattoo" onClick={closeMobileMenu}>Dotwork Tattoos</Link>
              <Link href="/nature-tattoo" onClick={closeMobileMenu}>Nature Tattoos</Link>
              <Link href="/pet-portrait-tattoo" onClick={closeMobileMenu}>Pet Portrait Tattoos</Link>
              <Link href="/scar-cover-up-tattoo" onClick={closeMobileMenu}>Scar Cover Up Tattoos</Link>
            </div>
          </div>

          <div className="mobile-menu-item">
            <button
              className={`mobile-menu-header-item ${activeSubmenu === 'process' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('process')}
            >
              Process
              <span className="chevron">›</span>
            </button>
            <div className={`mobile-submenu ${activeSubmenu === 'process' ? 'active' : ''}`}>
              <Link href="/booking-process" onClick={closeMobileMenu}>Booking Process</Link>
              <Link href="/pricing" onClick={closeMobileMenu}>Pricing</Link>
              <Link href="/booking-policies" onClick={closeMobileMenu}>Booking Policies</Link>
              <Link href="/enhanced-cleaning" onClick={closeMobileMenu}>Enhanced Cleaning</Link>
              <Link href="/apply-now" onClick={closeMobileMenu}>Apply Now</Link>
            </div>
          </div>

          <div className="mobile-menu-item">
            <button
              className={`mobile-menu-header-item ${activeSubmenu === 'resources' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('resources')}
            >
              Resources
              <span className="chevron">›</span>
            </button>
            <div className={`mobile-submenu ${activeSubmenu === 'resources' ? 'active' : ''}`}>
              <span className="mobile-section-header">Tattoo Prep</span>
              <Link href="/photo-guide" onClick={closeMobileMenu}>Photo Guide</Link>
              <Link href="/tattoo-prep" onClick={closeMobileMenu}>Tattoo Prep</Link>
              <span className="mobile-section-header">Aftercare</span>
              <Link href="/tattoo-aftercare-guide" onClick={closeMobileMenu}>Tattoo Aftercare Guide</Link>
              <Link href="/tattoo-aftercare-products" onClick={closeMobileMenu}>Tattoo Aftercare Products</Link>
              <Link href="/tattoo-healing-process" onClick={closeMobileMenu}>Tattoo Healing Process</Link>
              <span className="mobile-section-header">Other</span>
              <Link href="/faqs" onClick={closeMobileMenu}>FAQs</Link>
              <Link href="/blog" onClick={closeMobileMenu}>Blog</Link>
            </div>
          </div>

          <div className="mobile-menu-item">
            <button
              className={`mobile-menu-header-item ${activeSubmenu === 'contact' ? 'active' : ''}`}
              onClick={() => toggleSubmenu('contact')}
            >
              Contact
              <span className="chevron">›</span>
            </button>
            <div className={`mobile-submenu ${activeSubmenu === 'contact' ? 'active' : ''}`}>
              <Link href="/contact" onClick={closeMobileMenu}>Contact Us</Link>
              <span className="mobile-section-header">Locations</span>
              <Link href="/pdx" onClick={closeMobileMenu}>PDX</Link>
              <Link href="/philly" onClick={closeMobileMenu}>Philly</Link>
              <Link href="/sandiego" onClick={closeMobileMenu}>San Diego</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="mobile-social-links">
            <a href="https://www.instagram.com/therubygore/" className="social-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://x.com/therubygore" className="social-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/therubygore" className="social-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.pinterest.com/therubygore/" className="social-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
            <a href="https://therubygore.tumblr.com/" className="social-link" target="_blank" rel="noopener">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.23H6.26V6.53S7.112 6.23 7.112 5.23c0-1.1-.9-2-2-2s-2 .9-2 2c0 1 1.012 1.5 1.012 2.5v2.7H.022V9.23h2.969v8.058C3.022 22.65 6.26 24 8.563 24c.732 0 1.158-.268 1.158-.268l-.268-2.411C9.455 21.5 9.022 21.5 8.563 21.5c-1.158 0-2.411-.732-2.411-2.411V9.23h4.563v-2.7h-4.563V5.23c0-1.1.9-2 2-2s2 .9 2 2v1.3h2.969v2.7h-2.969v8.058c0 2.655 1.938 6.411 7.031 6.411.732 0 1.158-.268 1.158-.268l-.268-2.411c-.268 0-.732.268-1.158.268z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

