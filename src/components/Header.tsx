import React, { useState, useEffect, useRef } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Continuous frame-rate-independent scroll interpolation for butter-smooth header transition
  useEffect(() => {
    const headerEl = headerRef.current;
    if (!headerEl) return;

    let current = Math.min(Math.max(window.scrollY / 110, 0), 1);
    let target = current;
    let rafId: number | null = null;
    let lastTime = performance.now();

    const applyProgress = (value: number) => {
      headerEl.style.setProperty('--scroll-p', value.toFixed(4));
      setIsScrolled((prev) => {
        const next = value > 0.35;
        return prev === next ? prev : next;
      });
    };

    applyProgress(current);

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const factor = 1 - Math.exp(-11 * dt);
      current += (target - current) * factor;

      if (Math.abs(target - current) < 0.001) {
        current = target;
        applyProgress(current);
        rafId = null;
        return;
      }

      applyProgress(current);
      rafId = window.requestAnimationFrame(tick);
    };

    const handleScroll = () => {
      const raw = Math.min(Math.max(window.scrollY / 110, 0), 1);
      // Smoothstep easing on raw scroll position
      target = raw * raw * (3 - 2 * raw);

      if (rafId === null) {
        lastTime = performance.now();
        rafId = window.requestAnimationFrame(tick);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Sync mobile browser status/address bar theme-color with header surface
  useEffect(() => {
    const themeColorMeta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!themeColorMeta) return;
    themeColorMeta.content = isScrolled || isMenuOpen ? '#0D0C0B' : '#FAF8F4';
  }, [isScrolled, isMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) {
      closeMenu();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const wasOpen = isMenuOpen;
    if (wasOpen) {
      closeMenu();
    }

    const scrollToTarget = () => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `#${targetId}`);
      } else {
        window.location.hash = targetId;
      }
    };

    if (wasOpen) {
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
  };

  return (
    <>
      <header ref={headerRef} className={`site-header${isMenuOpen ? ' menu-open' : ''}${isScrolled ? ' is-scrolled' : ''}`}>
        <div className="site-header-inner">
          <a href="/" className="logo" aria-label="Adunnati — Build · Market · Grow" onClick={handleLogoClick}>
            <span className="logo-mark-stack">
              <img
                src="/assets/adunnati-mark.png"
                alt="Adunnati Mark"
                className="logo-mark logo-mark--default"
              />
              <img
                src="/assets/adunnati-mark-white.png"
                alt=""
                aria-hidden="true"
                className="logo-mark logo-mark--scrolled"
              />
            </span>
            <div className="logo-text-group">
              <span className="logo-brand-name">ADUNNATI</span>
              <span className="logo-tagline">BUILD · MARKET · GROW</span>
            </div>
          </a>

          {/* Desktop Navigation (Visible on Desktop only) */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Expertise</a>
            <a href="#why-adunnati" onClick={(e) => handleNavClick(e, 'why-adunnati')}>Approach</a>
            <a href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')}>About</a>
            <a href="#partners" onClick={(e) => handleNavClick(e, 'partners')}>Partners</a>
            <a href="#lets-talk" onClick={(e) => handleNavClick(e, 'lets-talk')}>Connect</a>
          </nav>

          {/* Mobile Menu Toggle (Three Lines at top right corner on mobile only) */}
          <button
            className={`mobile-menu-toggle${isMenuOpen ? ' open' : ''}`}
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            type="button"
          >
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
            <span className="hamburger-bar"></span>
          </button>
        </div>
      </header>

      {/* Mobile Dark Theme Backdrop */}
      <div
        className={`mobile-drawer-backdrop${isMenuOpen ? ' active' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Fullscreen Dark Theme Drawer */}
      <aside
        className={`mobile-drawer-sidebar${isMenuOpen ? ' open' : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!isMenuOpen}
      >
        <div className="drawer-header">
          <div className="drawer-brand">
            <img
              src="/assets/adunnati-mark-white.png"
              alt="Adunnati Mark"
              className="drawer-logo-mark"
            />
            <div className="drawer-logo-text-group">
              <span className="drawer-brand-name">ADUNNATI</span>
              <span className="drawer-tagline">BUILD · MARKET · GROW</span>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close navigation"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="drawer-nav-container">
          <nav className="drawer-nav-list">
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="drawer-nav-link">
              Expertise
            </a>
            <a href="#why-adunnati" onClick={(e) => handleNavClick(e, 'why-adunnati')} className="drawer-nav-link">
              Approach
            </a>
            <a href="#about-us" onClick={(e) => handleNavClick(e, 'about-us')} className="drawer-nav-link">
              About
            </a>
            <a href="#partners" onClick={(e) => handleNavClick(e, 'partners')} className="drawer-nav-link">
              Partners
            </a>
            <a href="#lets-talk" onClick={(e) => handleNavClick(e, 'lets-talk')} className="drawer-nav-link ">
              Connect
            </a>
          </nav>

          {/* Thin Divider Line matching reference image */}
          <div className="drawer-divider" aria-hidden="true" />

          {/* 5 Circular Social Media Buttons in separate window */}
          <div className="drawer-social-row" aria-label="Social media links">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/adunnati"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-social-btn"
              aria-label="Adunnati on LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/adunnati/"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-social-btn"
              aria-label="Adunnati on Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
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
              className="drawer-social-btn"
              aria-label="Adunnati on Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@adunnati"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-social-btn"
              aria-label="Adunnati on YouTube"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#000000" />
              </svg>
            </a>

            {/* X */}
            <a
              href="https://x.com/adunnati"
              target="_blank"
              rel="noopener noreferrer"
              className="drawer-social-btn"
              aria-label="Adunnati on X"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
