import type { NavItem, WhyCardItem } from '../types';

export const NAV_LINKS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const WHY_CARDS: WhyCardItem[] = [
  {
    id: 'understand',
    num: '01',
    title: ['WE UNDERSTAND', 'BEFORE WE PLAN'],
    subtext: 'Every business has a different starting point. We take the time to understand yours.',
    desktopArtImg: '/assets/why-card-art-hd-1.webp',
    mobileArtImg: '/assets/why-card-art-mobile-hd-1.webp',
  },
  {
    id: 'focus',
    num: '02',
    title: ['WE FOCUS ON', 'WHAT MATTERS MOST'],
    subtext: "The right work is not about doing more. It's about doing what serves the business best.",
    desktopArtImg: '/assets/why-card-art-hd-2.webp',
    mobileArtImg: '/assets/why-card-art-mobile-hd-2.webp',
  },
  {
    id: 'looking-better',
    num: '03',
    title: ['WE KEEP LOOKING', 'FOR BETTER'],
    subtext: 'We use performance, customer response and practical learning to shape the next step.',
    desktopArtImg: '/assets/why-card-art-hd-3.webp',
    mobileArtImg: '/assets/why-card-art-mobile-hd-3.webp',
  },
];
