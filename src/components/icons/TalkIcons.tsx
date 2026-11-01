import React from 'react';

export interface IconProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export const LightbulbIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Bulb top rays */}
    <line x1="12" y1="1.5" x2="12" y2="3.5" />
    <line x1="4.5" y1="4.5" x2="6" y2="6" />
    <line x1="19.5" y1="4.5" x2="18" y2="6" />
    {/* Bulb body */}
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 4a6.5 6.5 0 0 0-6.5 6.5c0 2.2 1.2 4.1 3 5.3v1.2c0 .5.5 1 1 1h5c.5 0 1-.5 1-1v-1.2c1.8-1.2 3-3.1 3-5.3A6.5 6.5 0 0 0 12 4z" />
    {/* Filament details */}
    <path d="M10 11.5l2-2.5 2 2.5" />
  </svg>
);

export const PencilIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L7.5 19.5 3 21l1.5-4.5L18.375 2.625z" />
    <path d="M15 6l3 3" />
    <path d="M6 18l3-1" />
    <path d="M10.5 10.5l3 3" />
  </svg>
);

export const GrowthChartIcon: React.FC<IconProps> = ({ className = '', size = 24, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Base line */}
    <line x1="3" y1="21" x2="21" y2="21" />
    {/* Vertical bars */}
    <rect x="4.5" y="14" width="3" height="7" rx="0.5" />
    <rect x="9.5" y="10" width="3" height="11" rx="0.5" />
    <rect x="14.5" y="6" width="3" height="15" rx="0.5" />
    {/* Trend arrow */}
    <path d="M4 11l5-4 5 3 6-6" />
    <polyline points="16 4 20 4 20 8" />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className = '', size = 18, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

export const MailIcon: React.FC<IconProps> = ({ className = '', size = 18, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ className = '', size = 18, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    <path d="M9.5 9c0 2.5 3 5.5 5.5 5.5l1.2-1.2c.2-.2.6-.3.9-.1l2 .9c.3.1.5.5.4.9-.3 1.2-1.4 2-2.7 2-3.9 0-7.3-3.4-7.3-7.3 0-1.3.8-2.4 2-2.7.4-.1.8.1.9.4l.9 2c.2.3.1.7-.1.9L9.5 9z" fill={color} stroke="none" />
  </svg>
);

export const BuildingIcon: React.FC<IconProps> = ({ className = '', size = 18, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {/* Main taller tower */}
    <rect x="4" y="3" width="9" height="18" rx="1" />
    {/* Right lower tower */}
    <rect x="13" y="8" width="7" height="13" rx="1" />
    {/* Windows left tower */}
    <line x1="7" y1="6" x2="8.5" y2="6" />
    <line x1="7" y1="10" x2="8.5" y2="10" />
    <line x1="7" y1="14" x2="8.5" y2="14" />
    {/* Windows right tower */}
    <line x1="16" y1="11" x2="17.5" y2="11" />
    <line x1="16" y1="15" x2="17.5" y2="15" />
    {/* Entrance door */}
    <path d="M7 21v-3h3v3" />
  </svg>
);

export const GridSquareIcon: React.FC<IconProps> = ({ className = '', size = 18, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3.5" y="3.5" width="6.5" height="6.5" rx="1.5" />
    <rect x="14" y="3.5" width="6.5" height="6.5" rx="1.5" />
    <rect x="3.5" y="14" width="6.5" height="6.5" rx="1.5" />
    <rect x="14" y="14" width="6.5" height="6.5" rx="1.5" />
  </svg>
);

export const ListCheckIcon: React.FC<IconProps> = ({ className = '', size = 18, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <line x1="9" y1="6" x2="21" y2="6" />
    <line x1="9" y1="12" x2="21" y2="12" />
    <line x1="9" y1="18" x2="21" y2="18" />
    <circle cx="4.5" cy="6" r="1.5" fill={color} stroke="none" />
    <circle cx="4.5" cy="12" r="1.5" fill={color} stroke="none" />
    <circle cx="4.5" cy="18" r="1.5" fill={color} stroke="none" />
  </svg>
);

export const ChatDotsIcon: React.FC<IconProps> = ({ className = '', size = 18, color = '#B58748' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 14a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v9z" />
    <circle cx="8" cy="9.5" r="1" fill={color} stroke="none" />
    <circle cx="12" cy="9.5" r="1" fill={color} stroke="none" />
    <circle cx="16" cy="9.5" r="1" fill={color} stroke="none" />
    <circle cx="10" cy="12.5" r="0.9" fill={color} stroke="none" />
    <circle cx="14" cy="12.5" r="0.9" fill={color} stroke="none" />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ className = '', size = 16, color = '#7A756C' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const LockIcon: React.FC<IconProps> = ({ className = '', size = 13, color = '#A27C4E' }) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="4" y="11" width="16" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
