import React from 'react';

export interface ClientLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

// 1. Bajaj Capital: Yellow/Orange sunburst with red swooshes + bold red text
export const BajajCapitalLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 195 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Sunburst emblem */}
    <g transform="translate(2, 2)">
      <circle cx="20" cy="20" r="18" fill="#FBBF24" />
      <path d="M2 20 C2 10.06 10.06 2 20 2 C29.94 2 38 10.06 38 20 Z" fill="#F59E0B" />
      {/* Dynamic slanted stripes */}
      <path d="M6 10 L28 10 L24 15 L2 15 Z" fill="#DC2626" />
      <path d="M4 18 L26 18 L22 23 L0 23 Z" fill="#DC2626" />
      <path d="M6 26 L24 26 L20 31 L2 31 Z" fill="#DC2626" />
      <circle cx="18" cy="34" r="2.8" fill="#DC2626" />
    </g>
    {/* Bold Red Typography */}
    <text
      x="50"
      y="28"
      fontFamily="'DM Sans', 'Arial Black', sans-serif"
      fontWeight="800"
      fontSize="19"
      fill="#E11D2A"
      letterSpacing="0.03em"
    >
      BAJAJ CAPITAL
    </text>
  </svg>
);

// 2. Organic India: Stacked green canopy pyramid + ORGANIC INDIA®
export const OrganicIndiaLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 120 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Green Tree / Leaves Pyramid */}
    <g transform="translate(44, 2)">
      <path d="M16 2 L21 9 L16 12 L11 9 Z" fill="#16A34A" />
      <path d="M7 10 L15 12 L24 10 L28 17 L16 19 L4 17 Z" fill="#15803D" />
      <path d="M3 18 L16 20 L29 18 L32 25 L16 27 L0 25 Z" fill="#166534" />
      <path d="M-1 26 L16 28 L33 26 L35 32 L16 34 L-3 32 Z" fill="#14532D" />
    </g>
    {/* Organic India Typography */}
    <text
      x="60"
      y="50"
      textAnchor="middle"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="800"
      fontSize="14.5"
      fill="#171717"
      letterSpacing="0.08em"
    >
      ORGANIC
    </text>
    <text
      x="60"
      y="64"
      textAnchor="middle"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="800"
      fontSize="14.5"
      fill="#171717"
      letterSpacing="0.14em"
    >
      INDIA<tspan fontSize="9" dy="-5">®</tspan>
    </text>
  </svg>
);

// 3. Exide Care: Stacked EXIDE + care
export const ExideCareLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 115 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* EXIDE in bold block letters */}
    <text
      x="6"
      y="25"
      fontFamily="'DM Sans', 'Impact', sans-serif"
      fontWeight="900"
      fontSize="27"
      fill="#DC2626"
      letterSpacing="-0.02em"
    >
      EXIDE
    </text>
    <path d="M80 10 L82 8 L84 10 L82 12 Z" fill="#DC2626" />
    {/* care underneath with curved accent flourish */}
    <text
      x="6"
      y="49"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="700"
      fontSize="24"
      fill="#DC2626"
      letterSpacing="0.01em"
    >
      care
    </text>
    <path
      d="M60 46 Q72 35 84 48"
      stroke="#DC2626"
      strokeWidth="3.2"
      fill="none"
      strokeLinecap="round"
    />
  </svg>
);

// 4. MTR: Scalloped red oval with MTR SINCE 1924
export const MTRLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 128 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Scalloped Red Oval */}
    <ellipse cx="64" cy="29" rx="60" ry="26" fill="#E11D2A" />
    <ellipse
      cx="64"
      cy="29"
      rx="55"
      ry="22"
      stroke="#FFFFFF"
      strokeWidth="1.8"
      strokeDasharray="4 2.5"
      fill="none"
    />
    <ellipse cx="64" cy="29" rx="49" ry="17.5" fill="#DC2626" />
    {/* MTR Bold Text */}
    <text
      x="64"
      y="34"
      textAnchor="middle"
      fontFamily="'DM Sans', 'Arial Black', sans-serif"
      fontWeight="900"
      fontSize="24"
      fill="#FFFFFF"
      letterSpacing="0.05em"
    >
      MTR
    </text>
    <text
      x="64"
      y="44"
      textAnchor="middle"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="700"
      fontSize="7.5"
      fill="#FFFFFF"
      letterSpacing="0.16em"
    >
      SINCE 1924
    </text>
  </svg>
);

// 5. Relycon: Black circle R logo + RELYCON®
export const RelyconLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 162 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Stylized R Emblem */}
    <circle cx="21" cy="21" r="18" fill="#111111" />
    <path
      d="M14 11 H23 C27 11 29 13.2 29 16.5 C29 19.5 27 21.5 23 21.5 H17.5 V31 H14 Z"
      fill="#FFFFFF"
    />
    <circle cx="21" cy="16.5" r="2.8" fill="#111111" />
    <path d="M22 21.5 L29 31 H24 L18.5 21.5 Z" fill="#FFFFFF" />
    {/* RELYCON Text */}
    <text
      x="48"
      y="28"
      fontFamily="'DM Sans', 'Arial Black', sans-serif"
      fontWeight="800"
      fontSize="19.5"
      fill="#111111"
      letterSpacing="0.06em"
    >
      RELYCON<tspan fontSize="10.5" dy="-7">®</tspan>
    </text>
  </svg>
);

// Kan Infratech: Bold geometric architectural emblem + KAN INFRATECH
export const KanInfratechLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 138 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform="translate(4, 4)">
      <path
        d="M3 28 V4 L16 17 L29 4 V28"
        stroke="#0F2A4A"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polygon points="16,0 25,9 16,9" fill="#D97706" />
    </g>
    <text
      x="40"
      y="20"
      fontFamily="'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif"
      fontWeight="900"
      fontSize="21"
      fill="#0F2A4A"
      letterSpacing="0.06em"
    >
      KAN
    </text>
    <text
      x="40"
      y="33"
      fontFamily="'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif"
      fontWeight="800"
      fontSize="10"
      fill="#D97706"
      letterSpacing="0.22em"
    >
      INFRATECH
    </text>
  </svg>
);

// 6. Antara: Centered Lotus flower + antara INTEGRATED WELLNESS
export const AntaraLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 134 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Multi-petal Lotus Motif Centered on top */}
    <g transform="translate(67, 16)">
      <path d="M0 -12 C-5 -6 -5 0 0 5 C5 0 5 -6 0 -12 Z" fill="#166534" />
      <path d="M-10 -6 C-15 -2 -12 4 -6 5 C-4 1 -5 -4 -10 -6 Z" fill="#047857" />
      <path d="M10 -6 C15 -2 12 4 6 5 C4 1 5 -4 10 -6 Z" fill="#047857" />
      <path d="M-12 3 C-17 8 -13 14 -7 11 C-6 7 -8 4 -12 3 Z" fill="#854D0E" />
      <path d="M12 3 C17 8 13 14 7 11 C6 7 8 4 12 3 Z" fill="#854D0E" />
    </g>
    {/* Antara Text Centered below */}
    <text
      x="67"
      y="48"
      textAnchor="middle"
      fontFamily="'DM Sans', Georgia, serif"
      fontWeight="600"
      fontSize="23"
      fill="#0B3C3C"
      letterSpacing="0.03em"
    >
      antara
    </text>
    <text
      x="67"
      y="60"
      textAnchor="middle"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="600"
      fontSize="7.5"
      fill="#0B3C3C"
      letterSpacing="0.2em"
    >
      INTEGRATED WELLNESS
    </text>
  </svg>
);

// 7. Urja Tech: Green leaf + URJA TECH INDUSTRIES
export const UrjaTechLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 172 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Green Curved Leaf */}
    <g transform="translate(6, 4)">
      <path d="M5 32 C2 18 14 4 28 2 C28 18 18 30 5 32 Z" fill="#15803D" />
      <path d="M5 32 C14 27 18 18 28 2" stroke="#FFFFFF" strokeWidth="1.4" fill="none" />
    </g>
    {/* URJA TECH */}
    <text
      x="46"
      y="22"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="800"
      fontSize="16"
      fill="#1F2937"
      letterSpacing="0.08em"
    >
      URJA TECH
    </text>
    <text
      x="46"
      y="35"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="700"
      fontSize="10"
      fill="#374151"
      letterSpacing="0.22em"
    >
      INDUSTRIES
    </text>
  </svg>
);

// 8. MyPersonalTutor.org: Blue grad cap + text
export const MyPersonalTutorLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 190 46"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Graduation Cap with Tassel */}
    <g transform="translate(4, 7)">
      <path d="M16 2 L30 9 L16 16 L2 9 Z" fill="#1E40AF" />
      <path d="M7 11.5 V18 C7 21.5 11 23.5 16 23.5 C21 23.5 25 21.5 25 18 V11.5" fill="#1E3A8A" />
      <path d="M4 10 L3 22" stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="3" cy="23.5" r="1.8" fill="#F59E0B" />
    </g>
    {/* Text */}
    <text
      x="40"
      y="22"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="700"
      fontSize="16"
      fill="#1E40AF"
    >
      MyPersonal<tspan fill="#0284C7">Tutor</tspan><tspan fontSize="12" fill="#4B5563">.org</tspan>
    </text>
    <text
      x="40"
      y="35"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="500"
      fontSize="9.5"
      fill="#4B5563"
      letterSpacing="0.08em"
    >
      Learn · Grow · Succeed
    </text>
  </svg>
);

// 9. ALMMAI: Geometric chevron A + ALMMAI MIND MENTOR
export const AlmmaaiLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 165 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Geometric Arrow Chevron Emblem */}
    <g transform="translate(6, 4)">
      <path d="M16 0 L30 30 L22 30 L16 16 L10 30 L2 30 Z" fill="#111111" />
      <polygon points="16,11 19.5,21 12.5,21" fill="#FFFFFF" />
    </g>
    {/* ALMMAI Text */}
    <text
      x="46"
      y="22"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="800"
      fontSize="17.5"
      fill="#111111"
      letterSpacing="0.12em"
    >
      ALMMAI
    </text>
    <text
      x="46"
      y="34"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="600"
      fontSize="9"
      fill="#333333"
      letterSpacing="0.22em"
    >
      MIND MENTOR
    </text>
  </svg>
);

// 10. Jaro Education: jaro Education with red dot
export const JaroEducationLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 165 42"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="4"
      y="29"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="700"
      fontSize="24"
      fill="#1E3A8A"
    >
      jaro<tspan dx="6" fontWeight="400" fill="#1E3A8A" fontSize="21">Education</tspan>
    </text>
    <circle cx="11" cy="11" r="3" fill="#DC2626" />
  </svg>
);

// 11. Provident: Arch P + Provident®
export const ProvidentLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 162 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Blue Arch P Shape */}
    <g transform="translate(6, 6)">
      <rect x="0" y="0" width="18" height="28" rx="9" fill="#1E40AF" />
      <circle cx="9" cy="9.5" r="5" fill="#FFFFFF" />
      <rect x="4.5" y="19" width="13.5" height="11" fill="#0284C7" rx="3.5" />
    </g>
    {/* Provident text */}
    <text
      x="38"
      y="29"
      fontFamily="'DM Sans', sans-serif"
      fontWeight="800"
      fontSize="21"
      fill="#1E3A8A"
      letterSpacing="0.01em"
    >
      Provident<tspan fontSize="10.5" dy="-8">®</tspan>
    </text>
  </svg>
);

// 12. Reliance: Bold blue corporate text
export const RelianceLogo: React.FC<ClientLogoProps> = ({ className = '', style }) => (
  <svg
    className={className}
    style={style}
    viewBox="0 0 156 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <text
      x="4"
      y="28"
      fontFamily="'DM Sans', 'Impact', sans-serif"
      fontWeight="800"
      fontSize="26"
      fill="#0C4A9E"
      letterSpacing="0.05em"
    >
      RELIANCE
    </text>
  </svg>
);
