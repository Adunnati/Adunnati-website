import React from 'react';
// import { ArrowUpRight } from './icons/ArrowUpRight';

// Vector icons matching the reference badges
const BarChartIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <rect x="2.5" y="11" width="3.5" height="6.5" rx="1" stroke="#BD8545" strokeWidth="1.6" />
    <rect x="8.25" y="6.5" width="3.5" height="11" rx="1" stroke="#BD8545" strokeWidth="1.6" />
    <rect x="14" y="2.5" width="3.5" height="15" rx="1" stroke="#BD8545" strokeWidth="1.6" />
  </svg>
);

const PencilIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M14.1 2.9a2 2 0 0 1 2.8 2.8L6.2 16.4l-3.7.9.9-3.7L14.1 2.9z"
      stroke="#BD8545"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TargetIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="7.5" stroke="#BD8545" strokeWidth="1.6" />
    <circle cx="10" cy="10" r="4.2" stroke="#BD8545" strokeWidth="1.6" />
    <circle cx="10" cy="10" r="1.3" fill="#BD8545" />
  </svg>
);

const TrendIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path
      d="M3 14.5l5-5 3.5 3.5L17 5.5"
      stroke="#BD8545"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.5 5.5H17V10"
      stroke="#BD8545"
      strokeWidth="1.7"
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
    badge: <BarChartIcon />,
    titleLine1: 'Grow Your',
    titleLine2: 'Digital Presence',
    descBefore: 'Build a strong online presence that gets you noticed and brings the ',
    descUnderline: 'right customers',
    descAfter: '.',
    bullets: [
      { name: 'Websites', link: '#contact' },
      { name: 'Landing Pages', link: '#contact' },
      { name: 'Shopify Stores', link: '#contact' },
      { name: 'Social Media Management', link: '#contact' },
      { name: 'Branding', link: '#contact' },
    ],
    sceneImg: '/assets/service-3d-1.webp',
    sceneAlt: 'Laptop displaying growth bar chart on travertine stone with monstera plant',
  },
  {
    number: '02',
    badge: <PencilIcon />,
    titleLine1: 'Create',
    titleLine2: 'Impactful Content',
    descBefore: 'Engaging visuals and messaging that connect with your audience and create ',
    descUnderline: 'demand',
    descAfter: '.',
    bullets: [
      { name: 'Static Ads', link: '#contact' },
      { name: 'Video Ads', link: '#contact' },
      { name: 'Reels & Short Videos', link: '#contact' },
      { name: 'E-commerce Photoshoots', link: '#contact' },
      { name: 'Product Photography', link: '#contact' },
    ],
    sceneImg: '/assets/service-3d-2.webp',
    sceneAlt: 'Minimalist editorial frames and visual assets on textured stone slab',
  },
  {
    number: '03',
    badge: <TargetIcon />,
    titleLine1: 'Bring in Right',
    titleLine2: 'Customers',
    descBefore: 'Performance marketing to reach the right people and turn interest into ',
    descUnderline: 'enquiries',
    descAfter: ' and sales.',
    bullets: [
      { name: 'Meta Ads', link: '#contact' },
      { name: 'Google Ads', link: '#contact' },
      { name: 'Lead Generation', link: '#contact' },
      { name: 'E-commerce Sales', link: '#contact' },
      { name: 'Influencer Ads', link: '#contact' },
    ],
    sceneImg: '/assets/service-3d-3.webp',
    sceneAlt: 'Smartphone with performance marketing chart and floating 3D social icons on stone block',
  },
  {
    number: '04',
    badge: <TrendIcon />,
    titleLine1: 'Improve',
    titleLine2: 'What Works',
    descBefore: 'Data-driven insights and continuous optimisation to help you get better results ',
    descUnderline: 'over time',
    descAfter: '.',
    bullets: [
      { name: 'Ad Account Audits', link: '#contact' },
      { name: 'Conversion Optimisation', link: '#contact' },
      { name: 'ROAS Improvement', link: '#contact' },
      { name: 'Digital Expansion', link: '#contact' },
      { name: 'Strategy & Consultation', link: '#contact' },
    ],
    sceneImg: '/assets/service-3d-4.webp',
    sceneAlt: 'Rising golden growth curve with architectural bar pillars on travertine plinth',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="services-section" id="services">
      <div className="container services-container">
        {/* Section Header */}
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

            <p className="services-subheading">
              Strategy, creative and performance, brought together to help you attract the right audience and turn opportunities into lasting growth.
            </p>
          </div>

          <div className="services-intro-right">
            {/* Decorative editorial curve in background */}
            {/* <svg
              className="services-deco-arc"
              viewBox="0 0 220 120"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 120 C70 60 140 25 210 10"
                stroke="url(#servicesArcGrad)"
                strokeWidth="1.5"
                strokeOpacity="0.45"
              />
              <circle cx="152" cy="36" r="4.5" fill="#B58245" />
              <defs>
                <linearGradient id="servicesArcGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#DFC8A0" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#B58245" stopOpacity="0.8" />
                </linearGradient>
              </defs>
            </svg> */}

            {/* <a href="#contact" className="services-view-all-btn">
              <span>View All Services</span>
              <ArrowUpRight size={13} strokeWidth={2.4} className="services-arrow-icon" />
            </a> */}
          </div>
        </div>

        {/* 2x2 Services Cards Grid (Razor-sharp native HTML text + individual clickable service links) */}
        <div className="service-grid">
          {servicesData.map((item) => (
            <article
              key={item.number}
              className={`service-card service-card-${item.number}`}
            >
              {/* Left Column: Razor-sharp Typography & Clickable Services List */}
              <div className="service-card-left">
                {/* Number & horizontal line */}
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
                    <br />
                    {item.titleLine2}
                  </h3>
                </div>

                {/* Description paragraph with underlined keyword */}
                <p className="service-card-desc">
                  {item.descBefore}
                  <u>{item.descUnderline}</u>
                  {item.descAfter}
                </p>

                {/* Clickable service bullet list */}
                <ul className="service-bullets-list">
                  {item.bullets.map((bullet) => (
                    <li key={bullet.name}>
                      <a
                        href={bullet.link}
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

              {/* Right Column: High-Res 3D Scene Seamlessly Integrated */}
              <div className="service-card-right">
                <img
                  src={item.sceneImg}
                  alt={item.sceneAlt}
                  className="service-card-scene"
                  loading="lazy"
                  width="500"
                  height="458"
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
