import React, { useState, useRef, useEffect } from 'react';
interface ClientItem {
  id: string;
  name: string;
  Component?: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  imgSrc?: string;
  scale?: number;
}

const ALL_CLIENTS: ClientItem[] = [
  { id: 'bajaj-capital', name: 'Bajaj Capital', imgSrc: '/assets/bajaj_capital_limited_logo.jfif' },
  { id: 'organic-india', name: 'Organic India', imgSrc: '/assets/organic_india_logo.png' },
  { id: 'maharishi-ayurveda', name: 'Maharishi Ayurveda', imgSrc: '/assets/maharishi_ayurveda_logo.jfif', scale: 1.15 },
  { id: 'exide-care', name: 'Exide Care', imgSrc: '/assets/Excide_care_logo.jpg' },
  { id: 'unext', name: 'Unext', imgSrc: '/assets/Unext_logo_2.jpg', scale: 1.13 },
  { id: 'uttranchal-university', name: 'Uttranchal University', imgSrc: '/assets/uttranchal_university_logo.jfif', scale: 1.2 },
  { id: 'aditya-birla-capital', name: 'Aditya Birla Capital', imgSrc: '/assets/aditya_birla_capital_logo.webp' },
  { id: 'Omax', name: 'Omax', imgSrc: '/assets/omax_logo.jfif', scale: 1.15 },
  { id: 'bajaj-finserv', name: 'Bajaj Finserv', imgSrc: '/assets/bajaj_finserv_logo.jfif', scale: 1.2 },
  { id: 'drinkprime', name: 'Drinkprime', imgSrc: '/assets/drinkprime_logo.png' },
  { id: 'mtr', name: 'MTR', imgSrc: '/assets/MTR _logo_2.png' },
  { id: 'matrimony-com', name: 'Matrimony.com', imgSrc: '/assets/Matrimmony.com_logo.png' },
  { id: 'astrotalk', name: 'Astrotalk', imgSrc: '/assets/Astrotalk_logo.png', scale: 1.2 },
  { id: 'kapiva', name: 'Kapiva', imgSrc: '/assets/kapiva_logo.png' },
  { id: 'jaro-education', name: 'Jaro Education',imgSrc: '/assets/Jaro_eductaion_logo.png' },
  { id: 'pokerbaazi', name: 'Pokerbaazi', imgSrc: '/assets/pokerbazi_logo.jfif' },
  { id: 'credit-mantri', name: 'Credit Mantri', imgSrc: '/assets/credit_mantri_logo.png', scale: 1.22 },
  { id: 'dezy', name: 'Dezy', imgSrc: '/assets/dezy.jpg' },
  { id: 'probo-media', name: 'Probo Media', imgSrc: '/assets/probo_media_logo.png', scale: 1.2 },
  { id: 'club-oxygen', name: 'Club Oxygen', imgSrc: '/assets/club_oxygen_logo.jfif', scale: 1.16 },
  { id: 'sunstone', name: 'Sunstone', imgSrc: '/assets/sunstone_logo.jfif', scale: 1.25 },
  { id: 'relevel', name: 'Relevel', imgSrc: '/assets/Relevel_logo_3.jfif', scale: 1.18 },
  { id: 'jiva-ayurveda', name: 'JIVA Ayurveda', imgSrc: '/assets/jiva_ayuerveda_logo.png' },
  { id: 'early-salary', name: 'Early Salary', imgSrc: '/assets/early_salary_logo.jfif' },
];

const ClientLogoCard: React.FC<{ client: ClientItem }> = ({ client }) => {
  const Logo = client.Component;
  const logoStyle = client.scale
    ? ({ '--logo-scale': client.scale } as React.CSSProperties)
    : undefined;

  return (
    <div className="client-card" title={client.name}>
      {Logo ? (
        <Logo className="client-logo-svg" style={logoStyle} />
      ) : (
        <img
          src={client.imgSrc}
          alt={client.name}
          className="client-logo-svg client-logo-img"
          style={logoStyle}
          loading="lazy"
        />
      )}
    </div>
  );
};

const DESKTOP_PAGE_SIZE = 6;
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
  const [isDesktopHovered, setIsDesktopHovered] = useState(false);

  // Automatic continuous horizontal scrolling for desktop
  useEffect(() => {
    if (isDesktopHovered || desktopSlides.length <= 1) return;

    const timer = setInterval(() => {
      setDesktopSlide((prev) => (prev + 1) % desktopSlides.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isDesktopHovered, desktopSlides.length]);

  // Automatic continuous horizontal scrolling for mobile
  const [isMobileTouching, setIsMobileTouching] = useState(false);
  const touchResumeTimeout = useRef<number | null>(null);

  useEffect(() => {
    if (isMobileTouching || mobileSlides.length <= 1) return;

    const timer = setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % mobileSlides.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isMobileTouching, mobileSlides.length]);

  // Touch gesture support for mobile swiping
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsMobileTouching(true);
    if (touchResumeTimeout.current) {
      clearTimeout(touchResumeTimeout.current);
    }
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      const isLeftSwipe = distance > 45;
      const isRightSwipe = distance < -45;

      if (isLeftSwipe) {
        setMobileSlide((prev) => (prev + 1) % mobileSlides.length);
      } else if (isRightSwipe) {
        setMobileSlide((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;

    // Resume continuous auto-scrolling 2.5s after user finishes touching
    touchResumeTimeout.current = window.setTimeout(() => {
      setIsMobileTouching(false);
    }, 2500);
  };

  return (
    <section className="clients-section" id="partners" style={{ position: 'relative' }}>
      <span id="work" style={{ position: 'absolute', top: 0 }} aria-hidden="true" />
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
              {desktopSlides[0].map((client) => (
                <ClientLogoCard key={client.id} client={client} />
              ))}
            </div>
          ) : (
            <div
              className="clients-desktop-slider"
              aria-label="Clients Multi-Page Slider"
              onMouseEnter={() => setIsDesktopHovered(true)}
              onMouseLeave={() => setIsDesktopHovered(false)}
            >
              <div
                className="clients-desktop-track"
                style={{ transform: `translateX(-${desktopSlide * 100}%)` }}
              >
                {desktopSlides.map((slideClients, pageIdx) => (
                  <div className="clients-desktop-slide" key={pageIdx}>
                    <div className="clients-grid-desktop">
                      {slideClients.map((client) => (
                        <ClientLogoCard key={client.id} client={client} />
                      ))}
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
                  {slideClients.map((client) => (
                    <ClientLogoCard key={client.id} client={client} />
                  ))}
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
