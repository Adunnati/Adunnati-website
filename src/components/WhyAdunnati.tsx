import React from 'react';

interface WhyCardItem {
  id: string;
  num: string;
  title: [string, string];
  subtext: string;
  desktopCardImg: string;
  mobileCardImg: string;
}

const WHY_CARDS: WhyCardItem[] = [
  {
    id: 'understand',
    num: '01',
    title: ['WE UNDERSTAND', 'BEFORE WE PLAN'],
    subtext: 'Every business has a different starting point. We take the time to understand yours.',
    desktopCardImg: '/assets/why-card-desktop-1.webp',
    mobileCardImg: '/assets/why-card-mobile-1.webp',
  },
  {
    id: 'focus',
    num: '02',
    title: ['WE FOCUS ON', 'WHAT MATTERS MOST'],
    subtext: "The right work is not about doing more. It's about doing what serves the business best.",
    desktopCardImg: '/assets/why-card-desktop-2.webp',
    mobileCardImg: '/assets/why-card-mobile-2.webp',
  },
  {
    id: 'looking-better',
    num: '03',
    title: ['WE KEEP LOOKING', 'FOR BETTER'],
    subtext: 'We use performance, customer response and practical learning to shape the next step.',
    desktopCardImg: '/assets/why-card-desktop-3.webp',
    mobileCardImg: '/assets/why-card-mobile-3.webp',
  },
];

export const WhyAdunnati: React.FC = () => {
  return (
    <section className="why-section" id="why-adunnati">
      <div className="container why-container">
        {/* Header Block: Eyebrow + Headline + Narrative */}
        <div className="why-header">
          <div className="why-eyebrow">
            <span className="why-eyebrow-text">WHY ADUNNATI</span>
            <span className="why-eyebrow-line" aria-hidden="true" />
          </div>

          <h2 className="why-heading">
            Thoughtful Strategy<br />
            <span className="why-heading-gold">Work That Means Business</span>
          </h2>

          <div className="why-subheading-wrap">
            <p className="why-subheading">
              We believe good marketing starts with understanding the business behind it.
            </p>
            <p className="why-subheading">
              The goals, the customer, the offer and the numbers all matter. We bring these pieces together to build a clear direction, execute with intent and keep improving based on what the work tells us.
            </p>
          </div>
        </div>

        {/* 3 Pillar Cards: seamless luxury composition matching reference design */}
        <div className="why-grid">
          {WHY_CARDS.map((card) => (
            <article className="why-card" key={card.id}>
              {/* Responsive picture: loads seamless desktop card (3 cols) or seamless horizontal mobile card */}
              <picture className="why-card-picture">
                <source media="(max-width: 768px)" srcSet={card.mobileCardImg} />
                <img
                  src={card.desktopCardImg}
                  alt={`${card.num} ${card.title.join(' ')}: ${card.subtext}`}
                  className="why-seamless-card-img"
                  loading="lazy"
                  width="608"
                  height="211"
                />
              </picture>

              {/* Accessible DOM text for SEO and screen readers */}
              <div className="sr-only">
                <h3>{card.num} {card.title.join(' ')}</h3>
                <p>{card.subtext}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAdunnati;
