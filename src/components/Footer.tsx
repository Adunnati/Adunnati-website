import React, { useState } from 'react';

interface FooterLinkItem {
  label: string;
  href?: string;
}

const CURRENT_YEAR = new Date().getFullYear();

const OUR_SERVICE_LINKS: FooterLinkItem[] = [
  { label: 'Websites' },
  { label: 'Landing Pages' },
  { label: 'Shopify Stores' },
  { label: 'Social Media Management' },
  { label: 'Branding' },
  { label: 'Static Creatives' },
  { label: 'Video Creatives' },
  { label: 'Reels & Short Videos' },
  { label: 'E-commerce Photoshoots' },
  { label: 'Product Photography' },
];

const GROWTH_SERVICE_LINKS: FooterLinkItem[] = [
  { label: 'Meta Ads' },
  { label: 'Google Ads' },
  { label: 'Lead Generation' },
  { label: 'E-commerce Sales' },
  { label: 'Influencer Ads' },
  { label: 'Ad Account Audits' },
  { label: 'Conversion Optimisation' },
  { label: 'ROAS Improvement' },
  { label: 'Strategy & Consultation' },
  { label: 'Digital Expansion' },
];

const renderFooterLinkList = (items: FooterLinkItem[]) => (
  <ul className="footer-links-list">
    {items.map((item) => (
      <li key={item.label}>
        <a
          href={item.href || undefined}
          onClick={item.href ? undefined : (e) => e.preventDefault()}
        >
          {item.label}
        </a>
      </li>
    ))}
  </ul>
);

export const Footer: React.FC = () => {
  // Mobile accordion state for collapsible sections
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    company: false,
    ourServices: false,
    growthServices: false,
  });

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="site-footer" id="contact" aria-label="Adunnati Site Footer">
      {/* Background Volumetric Atmosphere & Golden Wave Reflection */}
      <div className="footer-backdrop-layer" aria-hidden="true">
        <img
          src="/assets/footer-backdrop@2x.webp"
          alt=""
          className="footer-backdrop-img"
          loading="lazy"
          width="2048"
          height="1152"
        />
        <div className="footer-ambient-vignette" />
      </div>

      <div className="container footer-container">
        {/* Main 4-Column Layout (Desktop) / Stacked Layout (Mobile) */}
        <div className="footer-main-grid">
          {/* Column 1: Brand Info, Narrative & Socials */}
          <div className="footer-col footer-col-brand">
            {/* Logo */}
            <a href="#home" className="footer-logo" aria-label="Adunnati — Build · Market · Grow">
              <img
                src="/assets/adunnati-mark-white.png"
                alt="Adunnati Mark"
                className="footer-logo-mark"
                width="42"
                height="42"
              />
              <div className="footer-logo-text-group">
                <span className="footer-brand-name">ADUNNATI</span>
                <span className="footer-tagline">BUILD · MARKET · GROW</span>
              </div>
            </a>

            {/* Narrative Paragraph */}
            <p className="footer-brand-desc">
              A digital growth company helping businesses build their brand, create
              with intent and drive real growth.
            </p>

            {/* 5 Circular Social Icons */}
            <div className="footer-social-row" aria-label="Social links">
              {/* LinkedIn */}
              <a
                href=" https://www.linkedin.com/company/adunnati"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Adunnati on LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/adunnati/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Adunnati on Instagram"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" width="15" height="15">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/adunnatidigital"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Adunnati on Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@adunnati"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Adunnati on YouTube"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0F0E0D" />
                </svg>
              </a>

              {/* X */}
              <a
                href="https://x.com/adunnati"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="Adunnati on X"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className={`footer-col footer-col-links ${openSections.company ? 'is-expanded' : ''}`}>
            {/* Title with Golden Underline on Desktop / Accordion Toggle on Mobile */}
            <div className="footer-col-header" onClick={() => toggleSection('company')} role="button" tabIndex={0}>
              <h4 className="footer-col-title">Company</h4>
              <span className="footer-col-underline" aria-hidden="true" />
              <span className="footer-accordion-icon" aria-hidden="true">
                {openSections.company ? '−' : '+'}
              </span>
            </div>

            <ul className="footer-links-list">
              <li><a href="#services">Expertise</a></li>
              <li><a href="#why-adunnati">Approach</a></li>
              <li><a href="#about-us">About</a></li>
              <li><a href="#partners">Partners</a></li>
              <li><a href="#lets-talk">Connect</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className={`footer-col footer-col-links ${openSections.ourServices ? 'is-expanded' : ''}`}>
            <div className="footer-col-header" onClick={() => toggleSection('ourServices')} role="button" tabIndex={0}>
              <h4 className="footer-col-title">Our Services</h4>
              <span className="footer-col-underline" aria-hidden="true" />
              <span className="footer-accordion-icon" aria-hidden="true">
                {openSections.ourServices ? '−' : '+'}
              </span>
            </div>

            {renderFooterLinkList(OUR_SERVICE_LINKS)}
          </div>

          {/* Column 4: Growth Services */}
          <div className={`footer-col footer-col-links ${openSections.growthServices ? 'is-expanded' : ''}`}>
            <div className="footer-col-header" onClick={() => toggleSection('growthServices')} role="button" tabIndex={0}>
              <h4 className="footer-col-title">Growth Services</h4>
              <span className="footer-col-underline" aria-hidden="true" />
              <span className="footer-accordion-icon" aria-hidden="true">
                {openSections.growthServices ? '−' : '+'}
              </span>
            </div>

            {renderFooterLinkList(GROWTH_SERVICE_LINKS)}
          </div>
        </div>

        {/* Horizontal Divider Line Above Bottom Bar */}
        <div className="footer-bottom-rule" aria-hidden="true" />

        {/* Bottom Bar: Copyright, Legal Links, Privacy/Security Note & Back to Top */}
        <div className="footer-bottom-bar">
          <div className="footer-meta-row">
            <p className="footer-copyright">
              © {CURRENT_YEAR} Adunnati. All rights reserved.
            </p>

            {/* Mobile-Only Vertical Divider and Legal Links (Side-by-side with copyright) */}

          </div>

          {/* Desktop Security Info & Back to Top */}
          <div className="footer-bottom-right">
            <div className="footer-security-note">
              <span className="footer-lock-icon" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="11" width="16" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <span>Your information is safe with us.</span>
            </div>

            <span className="footer-meta-pipe" aria-hidden="true">|</span>

            <button type="button" className="footer-back-to-top-desktop" onClick={scrollToTop} aria-label="Scroll back to top">
              <span>Back to top</span>
              <span className="footer-back-to-top-circle" aria-hidden="true">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Back To Top Full-Width Pill Button */}
          <button type="button" className="footer-back-to-top-mobile" onClick={scrollToTop} aria-label="Scroll back to top">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
