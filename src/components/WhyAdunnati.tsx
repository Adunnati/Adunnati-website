import React, { useRef, useState } from 'react';
import { WHY_CARDS } from '../data/content';

export const WhyAdunnati: React.FC = () => {
  const gridRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleGridScroll = () => {
    const grid = gridRef.current;
    if (!grid) return;

    const maxScroll = grid.scrollWidth - grid.clientWidth;
    if (maxScroll > 0 && grid.scrollLeft >= maxScroll - 8) {
      setActiveIndex((prev) => (prev === WHY_CARDS.length - 1 ? prev : WHY_CARDS.length - 1));
      return;
    }

    const leftPad = parseFloat(getComputedStyle(grid).paddingLeft) || 0;
    const cards = Array.from(grid.children) as HTMLElement[];
    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - leftPad - grid.scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex((prev) => (prev === closestIndex ? prev : closestIndex));
  };

  const scrollToCard = (index: number) => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children) as HTMLElement[];
    const target = cards[index];
    if (!target) return;

    const leftPad = parseFloat(getComputedStyle(grid).paddingLeft) || 0;
    const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
    const targetLeft =
      index === WHY_CARDS.length - 1
        ? maxScroll
        : Math.min(maxScroll, Math.max(0, target.offsetLeft - leftPad));

    grid.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  return (
    <section className="why-section" id="why-adunnati">
      <div className="container why-container">
        {/* Header Block: Eyebrow + Headline + Divider + Narrative */}
        <div className="why-header">
          <div className="why-header-left">
            <div className="why-eyebrow">
              <span className="why-eyebrow-text">WHY ADUNNATI</span>
              <span className="why-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="why-heading">
              Thoughtful Strategy Work <br />
              <span className="why-heading-gold">That Means Business</span>
            </h2>
          </div>

          <div className="why-header-right">
            <div className="why-header-divider" aria-hidden="true" />

            <div className="why-subheading-wrap">
              <p className="why-subheading">
                The goals, the customer, the offer and the numbers all matter. We bring them together, execute with
                intent and keep improving based on results.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Pillar Cards: Clean HTML Typography + HD Artwork Visual */}
        <div className="why-grid" ref={gridRef} onScroll={handleGridScroll}>
          {WHY_CARDS.map((card) => (
            <article className="why-card" key={card.id}>
              <div className="why-card-content">
                <div className="why-card-meta">
                  <span className="why-card-num">{card.num}</span>
                  <span className="why-card-line" aria-hidden="true" />
                </div>
                <h3 className="why-card-title">
                  {card.title[0]} <br/> {card.title[1]}
                </h3>
                <p className="why-card-desc">
                  {card.subtext}
                </p>
              </div>

              <div className="why-card-visual">
                <picture className="why-card-picture">
                  <source media="(max-width: 768px)" srcSet={card.mobileArtImg} />
                  <img
                    src={card.desktopArtImg}
                    alt={`${card.num} ${card.title.join(' ')}`}
                    className="why-card-art-img"
                    loading="lazy"
                    width="600"
                    height="434"
                  />
                </picture>
              </div>
            </article>
          ))}
        </div>

        <div className="why-dots" aria-label="Why Adunnati cards pagination">
          {WHY_CARDS.map((card, index) => (
            <button
              key={card.id}
              type="button"
              aria-pressed={activeIndex === index}
              aria-label={`Show card ${card.num}: ${card.title.join(' ')}`}
              className={`why-dot${activeIndex === index ? ' is-active' : ''}`}
              onClick={() => scrollToCard(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdunnati;
