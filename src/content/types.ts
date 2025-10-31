export interface Service {
  title: string;
  description: string;
  icon: string;
  color: 'primary' | 'accent';
  order: number;
}

export interface HeroContent {
  tag: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: { value: string; label: string }[];
}

export interface AboutContent {
  tag: string;
  title: string;
  paragraphs: string[];
  profile: {
    name: string;
    title: string;
    bio: string;
  };
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  link: string | null;
}

export interface ContactContent {
    tag: string;
    title: string;
    subtitle: string;
    contactBoxTitle: string;
    info: ContactInfo[];
}

export interface FooterContent {
  description: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  impressumUrl: string;
  datenschutzUrl: string;
}
