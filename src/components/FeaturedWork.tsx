import React, { useState, useRef } from 'react';
import {
  BajajCapitalLogo,
  OrganicIndiaLogo,
  ExideCareLogo,
  MTRLogo,
  RelyconLogo,
  AntaraLogo,
  UrjaTechLogo,
  MyPersonalTutorLogo,
  AlmmaaiLogo,
  JaroEducationLogo,
  ProvidentLogo,
  RelianceLogo,
} from './icons/ClientLogos';

interface ClientItem {
  id: string;
  name: string;
  Component: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}

const ALL_CLIENTS: ClientItem[] = [
  { id: 'bajaj-capital', name: 'Bajaj Capital', Component: BajajCapitalLogo },
  { id: 'organic-india', name: 'Organic India', Component: OrganicIndiaLogo },
  { id: 'exide-care', name: 'Exide Care', Component: ExideCareLogo },
  { id: 'mtr', name: 'MTR', Component: MTRLogo },
  { id: 'relycon', name: 'Relycon', Component: RelyconLogo },
  { id: 'antara', name: 'Antara Integrated Wellness', Component: AntaraLogo },
  { id: 'urja-tech', name: 'Urja Tech Industries', Component: UrjaTechLogo },
  { id: 'mypersonaltutor', name: 'MyPersonalTutor.org', Component: MyPersonalTutorLogo },
  { id: 'almmaai', name: 'ALMMAI Mind Mentor', Component: AlmmaaiLogo },
  { id: 'jaro-education', name: 'Jaro Education', Component: JaroEducationLogo },
  { id: 'provident', name: 'Provident', Component: ProvidentLogo },
  { id: 'reliance', name: 'Reliance', Component: RelianceLogo },
];

const DESKTOP_PAGE_SIZE = 12;
const MOBILE_PAGE_SIZE = 6;

// Helper to chunk array for responsive pages
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

export const FeaturedWork: React.FC = () => {
  // Compute chunks dynamically
  const desktopSlides = chunkArray(ALL_CLIENTS, DESKTOP_PAGE_SIZE);
  const mobileSlides = chunkArray(ALL_CLIENTS, MOBILE_PAGE_SIZE);

  // Active page state
  const [desktopSlide, setDesktopSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  // Touch gesture support for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 45;
    const isRightSwipe = distance < -45;

    if (isLeftSwipe && mobileSlide < mobileSlides.length - 1) {
      setMobileSlide((prev) => prev + 1);
    } else if (isRightSwipe && mobileSlide > 0) {
      setMobileSlide((prev) => prev - 1);
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="clients-section" id="work">
      <div className="container clients-container">
        {/* Header Block: Left title narrative + Right stat card */}
        <div className="clients-header">
          {/* Left Title Area */}
          <div className="clients-header-left">
            <div className="clients-eyebrow">
              <span className="clients-eyebrow-text">OUR CLIENTS</span>
              <span className="clients-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="clients-heading">
              Trusted by<br />
              <span className="clients-heading-gold">Growing Brands</span>
            </h2>

            <p className="clients-subheading">
              We work with businesses across industries to build their brand, create with intent and drive real growth.
            </p>
          </div>

          {/* Right Stat Block (Desktop Only) */}
          <div className="clients-stat-block" aria-label="Across 10+ Industries">
            <div className="clients-stat-divider" aria-hidden="true" />
            <div className="clients-stat-content">
              <span className="clients-stat-label">ACROSS</span>
              <div className="clients-stat-number">10+</div>
              <span className="clients-stat-sublabel">INDUSTRIES</span>
              <p className="clients-stat-desc">
                From D2C to B2B, we partner with brands across diverse sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Client Logos Grid/Slider
            If ALL_CLIENTS <= 12: static 6x2 grid (no dots needed).
            If ALL_CLIENTS > 12: auto multi-page horizontal slider + dots. */}
        <div className="clients-desktop-wrapper">
          {desktopSlides.length === 1 ? (
            <div className="clients-grid-desktop" aria-label="Clients Grid">
              {desktopSlides[0].map((client) => {
                const Logo = client.Component;
                return (
                  <div className="client-card" key={client.id} title={client.name}>
                    <Logo className="client-logo-svg" />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="clients-desktop-slider" aria-label="Clients Multi-Page Slider">
              <div
                className="clients-desktop-track"
                style={{ transform: `translateX(-${desktopSlide * 100}%)` }}
              >
                {desktopSlides.map((slideClients, pageIdx) => (
                  <div className="clients-desktop-slide" key={pageIdx}>
                    <div className="clients-grid-desktop">
                      {slideClients.map((client) => {
                        const Logo = client.Component;
                        return (
                          <div className="client-card" key={client.id} title={client.name}>
                            <Logo className="client-logo-svg" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Desktop Pagination Dots: only shown when more than 1 page (>12 logos) */}
          {desktopSlides.length > 1 && (
            <div className="clients-pagination clients-pagination-desktop" aria-label="Desktop pagination">
              {desktopSlides.map((_, dotIndex) => (
                <button
                  key={dotIndex}
                  type="button"
                  className={`clients-dot ${desktopSlide === dotIndex ? 'active' : ''}`}
                  onClick={() => setDesktopSlide(dotIndex)}
                  aria-label={`View slide ${dotIndex + 1}`}
                  aria-current={desktopSlide === dotIndex ? 'true' : 'false'}
                />
              ))}
            </div>
          )}
        </div>

        {/* Mobile Client Logos Slider (6 cards per slide in 3x2 grid) */}
        <div
          className="clients-slider-mobile"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          aria-label="Mobile Clients Grid"
        >
          <div
            className="clients-slider-track"
            style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
          >
            {mobileSlides.map((slideClients, slideIdx) => (
              <div className="clients-mobile-slide" key={slideIdx}>
                <div className="clients-grid-mobile">
                  {slideClients.map((client) => {
                    const Logo = client.Component;
                    return (
                      <div className="client-card" key={client.id} title={client.name}>
                        <Logo className="client-logo-svg" />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Pagination Dots (exactly 2 dots for 12 items) */}
        {mobileSlides.length > 1 && (
          <div className="clients-pagination clients-pagination-mobile" aria-label="Mobile pagination">
            {mobileSlides.map((_, dotIndex) => (
              <button
                key={dotIndex}
                type="button"
                className={`clients-dot ${mobileSlide === dotIndex ? 'active' : ''}`}
                onClick={() => setMobileSlide(dotIndex)}
                aria-label={`View mobile slide ${dotIndex + 1}`}
                aria-current={mobileSlide === dotIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
