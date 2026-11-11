import React from 'react';
// import { ArrowUpRight } from './icons/ArrowUpRight';

// Vector icons matching the reference badges
// Vector icons matching the reference badges
const LaptopIcon: React.FC = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3.5" y="4.5" width="17" height="11" rx="1.8" stroke="#BD8545" strokeWidth="1.8" />
    <path
      d="M1.5 19h21a0.8 0.8 0 0 0 .8-.8v-.2a0.8 0.8 0 0 0-.8-.8H1.5a0.8 0.8 0 0 0-.8.8v.2a0.8 0.8 0 0 0 .8.8z"
      stroke="#BD8545"
      strokeWidth="1.6"
    />
    <line x1="10" y1="16.5" x2="14" y2="16.5" stroke="#BD8545" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const PencilIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M14.1 2.9a2 2 0 0 1 2.8 2.8L6.2 16.4l-3.7.9.9-3.7L14.1 2.9z"
      stroke="#BD8545"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TargetIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="7.5" stroke="#BD8545" strokeWidth="1.7" />
    <circle cx="10" cy="10" r="4.2" stroke="#BD8545" strokeWidth="1.7" />
    <circle cx="10" cy="10" r="1.3" fill="#BD8545" />
  </svg>
);

const TrendIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M3 14.5l5-5 3.5 3.5L17 5.5"
      stroke="#BD8545"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 5.5H17V10"
      stroke="#BD8545"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export interface ServiceBullet {
  name: string;
  link: string; // Ready for future router navigation (e.g. '/services/websites')
}

export interface ServiceCardItem { 
  number: string;
  badge: React.ReactNode;
  titleLine1: string;
  titleLine2: string;
  descBefore: string;
  descUnderline: string;
  descAfter?: string;
  bullets: ServiceBullet[];
  sceneImg: string;
  sceneAlt: string;
}

const servicesData: ServiceCardItem[] = [
  {
    number: '01',
    badge: <LaptopIcon />,
    titleLine1: 'Build Your Digital Presence',
    titleLine2: '',
    descBefore: 'Build a strong online presence that gets you noticed and brings the ',
    descUnderline: 'right customers',
    descAfter: '.',
    bullets: [
      { name: 'Websites', link: '' },
      { name: 'Landing Pages', link: '' },
      { name: 'Shopify Stores', link: '' },
      { name: 'Social Media Management', link: '' },
      { name: 'Branding', link: '' },
    ],
    sceneImg: '/assets/service-card-scene-1.webp',
    sceneAlt: 'Laptop with your brand online on travertine stone with stacked website blocks and plant',
  },
  {
    number: '02',
    badge: <PencilIcon />,
    titleLine1: 'Create Impactful Content',
    titleLine2: '',
    descBefore: 'Engaging visuals and messaging that connect with audience and create ',
    descUnderline: 'demand',
    descAfter: '.',
    bullets: [
      { name: 'Static Creatives', link: '' },
      { name: 'Video Creatives', link: '' },
      { name: 'Reels & Short Videos', link: '' },
      { name: 'E-commerce Photoshoots', link: '' },
      { name: 'Product Photography', link: '' },
    ],
    sceneImg: '/assets/service-card-scene-2.webp',
    sceneAlt: 'Laptop with video editing suite, camera, clapperboard and floating media icons',
  },
  {
    number: '03',
    badge: <TargetIcon />,
    titleLine1: 'Bring in Right Customers',
    titleLine2: '',
    descBefore: 'Performance marketing to reach the right people and turn interest into ',
    descUnderline: 'enquiries',
    descAfter: ' and sales.',
    bullets: [
      { name: 'Meta Ads', link: '' },
      { name: 'Google Ads', link: '' },
      { name: 'Lead Generation', link: '' },
      { name: 'E-commerce Sales', link: '' },
      { name: 'Influencer Ads', link: '' },
    ],
    sceneImg: '/assets/service-card-scene-3.webp',
    sceneAlt: 'Target marketing laptop with floating Meta, Google and audience campaign icons',
  },
  {
    number: '04',
    badge: <TrendIcon />,
    titleLine1: 'Improve Your Digital Growth',
    titleLine2: '',
    descBefore: 'Data-driven insights and continuous optimisation to help you get better results ',
    descUnderline: 'over time',
    descAfter: '.',
    bullets: [
      { name: 'Ad Account Audits', link: '' },
      { name: 'Conversion Optimisation', link: '' },
      { name: 'ROAS Improvement', link: '' },
      { name: 'Strategy & Consultation', link: '' },
      { name: 'Digital Expansion', link: '' },
    ],
    sceneImg: '/assets/service-card-scene-4.webp',
    sceneAlt: 'Analytics dashboard with glowing 3D rising growth bar chart and strategy target',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        {/* Section Header (Desktop: Horizontal with vertical divider | Mobile: Clean stacked) */}
        <div className="services-intro">
          <div className="services-intro-left">
            <div className="services-eyebrow">
              <span className="services-eyebrow-text">OUR SERVICES</span>
              <span className="services-eyebrow-line" aria-hidden="true" />
            </div>

            <h2 className="services-title">
              Four Ways We Move<br />
              <span className="services-title-gold">Your Business Forward</span>
            </h2>
          </div>

          <div className="services-intro-right">
            <div className="services-header-divider" aria-hidden="true" />
            <p className="services-subheading">
              Strategy, creative and performance, brought together to help you attract the right audience and turn opportunities into lasting growth.
            </p>
          </div>
        </div>

        {/* 2x2 Services Cards Grid (Image 1 Luxury Reference Design) */}
        <div className="service-grid">
          {servicesData.map((item) => (
            <article
              key={item.number}
              className={`service-card service-card-${item.number}`}
            >
              {/* Left / Top Text Content Layer */}
              <div className="service-card-content">
                {/* Number & horizontal gold line */}
                <div className="service-card-num-row">
                  <span className="service-card-num">{item.number}</span>
                  <span className="service-card-num-line" aria-hidden="true" />
                </div>

                {/* Badge + Card Heading */}
                <div className="service-card-title-row">
                  <div className="service-card-badge" aria-hidden="true">
                    {item.badge}
                  </div>
                  <h3 className="service-card-title">
                    {item.titleLine1}
                    {item.titleLine2 ? <> {item.titleLine2}</> : null}
                  </h3>
                </div>

                {/* Description paragraph */}
                <p className="service-card-desc">
                  {item.descBefore}
                  {item.descUnderline}
                  {item.descAfter}
                </p>

                {/* Clickable service bullet list */}
                <ul className="service-bullets-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.name}>
                      <a
                        href={bullet.link || undefined}
                        onClick={bullet.link ? undefined : (e) => e.preventDefault()}
                        className="service-bullet-link"
                        title={`View ${bullet.name} service`}
                      >
                        <span className="service-bullet-arrow" aria-hidden="true">
                          ↗
                        </span>
                        <span className="service-bullet-label">{bullet.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom-right 3D Scene Visual */}
              <div className="service-card-visual" aria-hidden="true">
                <img
                  src={item.sceneImg}
                  alt={item.sceneAlt}
                  className="service-card-visual-img"
                  loading="lazy"
                  width="900"
                  height="600"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

