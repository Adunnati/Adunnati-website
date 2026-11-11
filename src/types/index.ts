export interface NavItem {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

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


export interface WhyCardItem {
  id: string;
  num: string;
  title: [string, string];
  subtext: string;
  desktopArtImg: string;
  mobileArtImg: string;
}


