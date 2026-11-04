import React from 'react';

export const About: React.FC = () => {
  return (
    <section className="about-section" id="about-us">
      <div className="container about-container">
        {/* Left Column: Narrative Content */}
        <div className="about-content">
          <div className="about-eyebrow">
            <span className="about-eyebrow-text">A LITTLE ABOUT US</span>
            <span className="about-eyebrow-line" aria-hidden="true" />
          </div>

          <h2 className="about-heading">
            Good Businesses Deserve<br />
            <span className="about-heading-gold">Good Digital Thinking</span>
          </h2>

          <div className="about-narrative">
            <p className="about-subheading">
              Adunnati is a digital growth partner working across strategy,
              digital experiences and performance marketing.
            </p>
            <p className="about-subheading">
              We bring together the elements that shape how a business shows
              up online, attracts customers and turns attention into action.
            </p>
            <p className="about-subheading">
              Our approach is straightforward: understand the business,
              find the right opportunities and do the work with care.
            </p>
          </div>

          {/* <div className="about-actions">
            <a href="#contact" className="about-cta-btn">
              <span>Get To Know Us</span>
              <span className="about-cta-arrow" aria-hidden="true">
                <ArrowUpRight size={13} strokeWidth={2.4} />
              </span>
            </a>
          </div> */}
        </div>

        {/* Right Architectural 3D Scene - Immersive & Seamless */}
        <div className="about-stage-scene" aria-hidden="true">
          <picture>
            <source media="(max-width: 980px)" srcSet="/assets/about-stage-mobile.webp" />
            <img
              src="/assets/about-stage-desktop.webp"
              alt="Adunnati — Good Businesses Deserve Good Digital Thinking"
              className="about-stage-img"
              loading="lazy"
              width="1024"
              height="973"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default About;
