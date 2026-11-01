import React, { useState, useRef, useEffect } from 'react';
import {
  LightbulbIcon,
  PencilIcon,
  GrowthChartIcon,
  UserIcon,
  MailIcon,
  WhatsAppIcon,
  BuildingIcon,
  GridSquareIcon,
  ListCheckIcon,
  ChatDotsIcon,
  ChevronDownIcon,
  LockIcon,
} from './icons/TalkIcons';
import { ArrowUpRight } from './icons/ArrowUpRight';

const HELP_OPTIONS = [
  'Digital Marketing & Performance',
  'Brand Strategy & Identity',
  'Website Design & Development',
  'Content & Creative Direction',
  'Full-Funnel Growth Partnership',
  'Other / Exploration',
];

const REQUIREMENT_OPTIONS = [
  'Scale Customer Inquiries & Sales',
  'Build / Redesign Brand Website',
  'Brand Refresh & Visual Messaging',
  'Improve Paid Ad ROAS & Funnel',
  'Ongoing Marketing Retainer',
  'Consultation & Strategic Audit',
];

export const LetsTalk: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    whatsappNumber: '',
    companyName: '',
    helpWith: '',
    mainRequirement: '',
    message: '',
  });

  const [activeDropdown, setActiveDropdown] = useState<'help' | 'requirement' | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const helpDropdownRef = useRef<HTMLDivElement>(null);
  const reqDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        helpDropdownRef.current &&
        !helpDropdownRef.current.contains(target) &&
        reqDropdownRef.current &&
        !reqDropdownRef.current.contains(target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSelectOption = (field: 'helpWith' | 'mainRequirement', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setActiveDropdown(null);
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.workEmail.trim() || !formData.workEmail.includes('@')) {
      setErrorMessage('Please enter a valid work email.');
      return;
    }
    if (!formData.whatsappNumber.trim()) {
      setErrorMessage('Please enter your WhatsApp number.');
      return;
    }
    if (!formData.helpWith) {
      setErrorMessage('Please select what you need help with.');
      return;
    }
    if (!formData.mainRequirement) {
      setErrorMessage('Please select your main requirement.');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
  };

  return (
    <section className="talk-section" id="lets-talk" aria-label="Let's Talk — Tell Us Where You Want To Go">
      {/* Background Ambience: Organic Curved Silky Waves & Warm Accents */}
      <div className="talk-bg-decorations" aria-hidden="true">
        {/* Subtle decorative dot grid at top right */}
        <div className="talk-dot-grid" />
        
        {/* Elegant organic wave curves */}
        <svg className="talk-wave-svg" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none">
          <path
            d="M-100 200 C300 450, 600 50, 1000 350 C1250 520, 1400 400, 1600 500"
            stroke="url(#talkWaveGrad1)"
            strokeWidth="80"
            strokeOpacity="0.07"
            fill="none"
          />
          <path
            d="M-50 450 C350 700, 750 250, 1150 600 C1350 780, 1500 700, 1650 750"
            stroke="url(#talkWaveGrad2)"
            strokeWidth="120"
            strokeOpacity="0.05"
            fill="none"
          />
          <defs>
            <linearGradient id="talkWaveGrad1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#C8A265" />
              <stop offset="100%" stopColor="#DFC8A0" />
            </linearGradient>
            <linearGradient id="talkWaveGrad2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#B88A44" />
              <stop offset="100%" stopColor="#EAD8BE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container talk-container">
        <div className="talk-layout-grid">
          {/* Left Column: Narrative & Value Propositions */}
          <div className="talk-intro-column">
            {/* Eyebrow */}
            <div className="talk-eyebrow">
              <span className="talk-eyebrow-text">LET'S TALK</span>
              <span className="talk-eyebrow-line" aria-hidden="true" />
            </div>

            {/* Headline */}
            <h2 className="talk-heading">
              Tell Us Where<br />
              <span className="talk-heading-accent">You Want To Go</span>
            </h2>

            {/* Description */}
            <p className="talk-narrative talk-subheading">
              Whether you're building your digital presence, looking to bring in more
              customers or trying to get more from your marketing, let's start with a
              conversation about your business.
            </p>

            {/* 3 Value Propositions */}
            <div className="talk-badges-container">
              {/* Badge 1 */}
              <div className="talk-badge-item">
                <div className="talk-badge-icon-box">
                  <LightbulbIcon size={26} color="#B58748" />
                </div>
                <div className="talk-badge-text">
                  <span>Beyond Just</span>
                  <span>Marketing</span>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="talk-badge-item">
                <div className="talk-badge-icon-box">
                  <PencilIcon size={24} color="#B58748" />
                </div>
                <div className="talk-badge-text">
                  <span>Create</span>
                  <span>With Intent</span>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="talk-badge-item">
                <div className="talk-badge-icon-box">
                  <GrowthChartIcon size={24} color="#B58748" />
                </div>
                <div className="talk-badge-text">
                  <span>Deliver</span>
                  <span>Real Growth</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Details Form Card */}
          <div className="talk-card-column">
            <div className="talk-form-card">
              <div className="talk-form-header">
                <h3 className="talk-form-title">Share a few details.</h3>
                <p className="talk-form-subtitle">
                  Our team will get in touch to understand your requirements.
                </p>
              </div>

              {isSubmitted ? (
                <div className="talk-success-box" role="alert">
                  <div className="talk-success-icon-wrap">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#B58748" strokeWidth="2.2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h4 className="talk-success-heading">Thank You!</h4>
                  <p className="talk-success-desc">
                    Your enquiry has been received. Our team will review your requirements and get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    className="talk-reset-btn"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        whatsappNumber: '',
                        companyName: '',
                        helpWith: '',
                        mainRequirement: '',
                        message: '',
                      });
                    }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form className="talk-form" onSubmit={handleSubmit} noValidate>
                  {errorMessage && (
                    <div className="talk-error-alert" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  {/* Row 1: Full Name & Work Email */}
                  <div className="talk-form-row talk-form-row-2col">
                    <div className="talk-input-field">
                      <span className="talk-field-icon" aria-hidden="true">
                        <UserIcon size={19} color="#B58748" />
                      </span>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name *"
                        className="talk-input"
                        autoComplete="name"
                        required
                      />
                    </div>

                    <div className="talk-input-field">
                      <span className="talk-field-icon" aria-hidden="true">
                        <MailIcon size={19} color="#B58748" />
                      </span>
                      <input
                        type="email"
                        name="workEmail"
                        value={formData.workEmail}
                        onChange={handleInputChange}
                        placeholder="Work Email *"
                        className="talk-input"
                        autoComplete="email"
                        required
                      />
                    </div>
                  </div>

                  {/* Row 2: WhatsApp Number & Company Name */}
                  <div className="talk-form-row talk-form-row-2col">
                    <div className="talk-input-field">
                      <span className="talk-field-icon" aria-hidden="true">
                        <WhatsAppIcon size={19} color="#B58748" />
                      </span>
                      <input
                        type="tel"
                        name="whatsappNumber"
                        value={formData.whatsappNumber}
                        onChange={handleInputChange}
                        placeholder="Whatsapp Number *"
                        className="talk-input"
                        autoComplete="tel"
                        required
                      />
                    </div>

                    <div className="talk-input-field talk-input-field-company">
                      <span className="talk-field-icon" aria-hidden="true">
                        <BuildingIcon size={19} color="#B58748" />
                      </span>
                      <input
                        type="text"
                        name="companyName"
                        id="talk-company-name-input"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder=""
                        className="talk-input"
                        autoComplete="organization"
                      />
                      {!formData.companyName && (
                        <label htmlFor="talk-company-name-input" className="talk-stacked-placeholder" aria-hidden="true">
                          <span className="talk-stacked-part">Company /</span>
                          <span className="talk-stacked-part">Brand Name</span>
                        </label>
                      )}
                    </div>
                  </div>

                  {/* Row 3: What do you need help with? */}
                  <div className="talk-form-row" ref={helpDropdownRef}>
                    <div
                      className={`talk-select-field ${activeDropdown === 'help' ? 'is-active' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === 'help' ? null : 'help')}
                      role="button"
                      tabIndex={0}
                      aria-haspopup="listbox"
                      aria-expanded={activeDropdown === 'help'}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === 'help' ? null : 'help');
                        }
                      }}
                    >
                      <span className="talk-field-icon" aria-hidden="true">
                        <GridSquareIcon size={19} color="#B58748" />
                      </span>
                      <div className="talk-select-content">
                        <span className="talk-select-label">What do you need help with? *</span>
                        <span className={`talk-select-value ${formData.helpWith ? 'has-value' : 'is-placeholder'}`}>
                          {formData.helpWith || 'Select an option'}
                        </span>
                      </div>
                      <span className={`talk-chevron-icon ${activeDropdown === 'help' ? 'rotated' : ''}`} aria-hidden="true">
                        <ChevronDownIcon size={18} color="#B58748" />
                      </span>
                    </div>

                    {/* Dropdown Menu */}
                    {activeDropdown === 'help' && (
                      <ul className="talk-dropdown-menu" role="listbox">
                        {HELP_OPTIONS.map((opt) => (
                          <li
                            key={opt}
                            className={`talk-dropdown-item ${formData.helpWith === opt ? 'selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectOption('helpWith', opt);
                            }}
                            role="option"
                            aria-selected={formData.helpWith === opt}
                          >
                            <span>{opt}</span>
                            {formData.helpWith === opt && (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B58748" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Row 4: What is your main requirement? */}
                  <div className="talk-form-row" ref={reqDropdownRef}>
                    <div
                      className={`talk-select-field ${activeDropdown === 'requirement' ? 'is-active' : ''}`}
                      onClick={() => setActiveDropdown(activeDropdown === 'requirement' ? null : 'requirement')}
                      role="button"
                      tabIndex={0}
                      aria-haspopup="listbox"
                      aria-expanded={activeDropdown === 'requirement'}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === 'requirement' ? null : 'requirement');
                        }
                      }}
                    >
                      <span className="talk-field-icon" aria-hidden="true">
                        <ListCheckIcon size={19} color="#B58748" />
                      </span>
                      <div className="talk-select-content">
                        <span className="talk-select-label">What is your main requirement? *</span>
                        <span className={`talk-select-value ${formData.mainRequirement ? 'has-value' : 'is-placeholder'}`}>
                          {formData.mainRequirement || 'Select an option'}
                        </span>
                      </div>
                      <span className={`talk-chevron-icon ${activeDropdown === 'requirement' ? 'rotated' : ''}`} aria-hidden="true">
                        <ChevronDownIcon size={18} color="#B58748" />
                      </span>
                    </div>

                    {/* Dropdown Menu */}
                    {activeDropdown === 'requirement' && (
                      <ul className="talk-dropdown-menu" role="listbox">
                        {REQUIREMENT_OPTIONS.map((opt) => (
                          <li
                            key={opt}
                            className={`talk-dropdown-item ${formData.mainRequirement === opt ? 'selected' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleSelectOption('mainRequirement', opt);
                            }}
                            role="option"
                            aria-selected={formData.mainRequirement === opt}
                          >
                            <span>{opt}</span>
                            {formData.mainRequirement === opt && (
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#B58748" strokeWidth="2.5">
                                <polyline points="20 6 9 17 4 12" />
                              </svg>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Row 5: Textarea */}
                  <div className="talk-form-row">
                    <div className="talk-textarea-field">
                      <span className="talk-field-icon talk-textarea-icon" aria-hidden="true">
                        <ChatDotsIcon size={19} color="#B58748" />
                      </span>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell us briefly about your requirements"
                        className="talk-textarea"
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Row 6: Submit Button */}
                  <div className="talk-form-row">
                    <button type="submit" className="talk-submit-btn" id="talk-send-enquiry-btn">
                      <span>Send Enquiry</span>
                      <ArrowUpRight size={17} strokeWidth={2.4} className="talk-submit-arrow" />
                    </button>
                  </div>

                  {/* Row 7: Disclaimer & Privacy Note */}
                  <div className="talk-privacy-note">
                    <span className="talk-privacy-lock" aria-hidden="true">
                      <LockIcon size={13} color="#9E7644" />
                    </span>
                    <span className="talk-privacy-text">
                      By submitting, you agree to be contacted regarding your enquiry.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
