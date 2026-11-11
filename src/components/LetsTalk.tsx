import React, { useState } from 'react';
import {
  LightbulbIcon,
  PencilIcon,
  GrowthChartIcon,
  UserIcon,
  MailIcon,
  WhatsAppIcon,
  BuildingIcon,
  ChatDotsIcon,
  LockIcon,
} from './icons/TalkIcons';
import { ArrowUpRight } from './icons/ArrowUpRight';

interface TalkFormData {
  fullName: string;
  workEmail: string;
  whatsappNumber: string;
  companyName: string;
  message: string;
}

const INITIAL_FORM_DATA: TalkFormData = {
  fullName: '',
  workEmail: '',
  whatsappNumber: '',
  companyName: '',
  message: '',
};

const TALK_INPUT_FIELDS: Array<{
  name: Exclude<keyof TalkFormData, 'message'>;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  autoComplete: string;
  required: boolean;
  renderIcon: () => React.ReactNode;
}> = [
  {
    name: 'fullName',
    type: 'text',
    placeholder: 'Full Name *',
    autoComplete: 'name',
    required: true,
    renderIcon: () => <UserIcon size={19} color="#B58748" />,
  },
  {
    name: 'workEmail',
    type: 'email',
    placeholder: 'Work Email *',
    autoComplete: 'email',
    required: true,
    renderIcon: () => <MailIcon size={19} color="#B58748" />,
  },
  {
    name: 'whatsappNumber',
    type: 'tel',
    placeholder: 'Whatsapp Number *',
    autoComplete: 'tel',
    required: true,
    renderIcon: () => <WhatsAppIcon size={19} color="#B58748" />,
  },
  {
    name: 'companyName',
    type: 'text',
    placeholder: 'Company / Brand Name',
    autoComplete: 'organization',
    required: false,
    renderIcon: () => <BuildingIcon size={19} color="#B58748" />,
  },
];

export const LetsTalk: React.FC = () => {
  const [formData, setFormData] = useState<TalkFormData>(INITIAL_FORM_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
                      setFormData(INITIAL_FORM_DATA);
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

                  {TALK_INPUT_FIELDS.map((field) => (
                    <div className="talk-form-row" key={field.name}>
                      <div className="talk-input-field">
                        <span className="talk-field-icon" aria-hidden="true">
                          {field.renderIcon()}
                        </span>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleInputChange}
                          placeholder={field.placeholder}
                          className="talk-input"
                          autoComplete={field.autoComplete}
                          required={field.required}
                        />
                      </div>
                    </div>
                  ))}

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
                  <div className="talk-form-row talk-submit-row">
                    <button type="submit" className="talk-submit-btn" id="talk-send-enquiry-btn">
                      <span>Send Enquiry</span>
                      <ArrowUpRight size={15} strokeWidth={2.4} className="talk-submit-arrow" />
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
