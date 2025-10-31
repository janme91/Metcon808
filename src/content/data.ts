import { HeroContent, Service, AboutContent, ContactContent, FooterContent } from './types';

export const heroContent: HeroContent = {
  tag: 'Strategische Einkaufsberatung',
  title: 'Optimieren Sie Ihren Einkaufsprozess',
  subtitle: 'Mit MettCon an Ihrer Seite verwandeln Sie Ihren Einkauf von einem reinen Kostenfaktor in einen strategischen Werttreiber. Ich unterstütze Sie bei Investitionsgütern und technischen Projekten.',
  ctaPrimary: 'Beratung anfragen',
  ctaSecondary: 'Leistungen ansehen',
  stats: [
    { value: '15+', label: 'Jahre Erfahrung' },
    { value: '200+', label: 'Projekte' },
    { value: '98%', label: 'Kundenzufriedenheit' },
  ],
};

export const services: Service[] = [
  {
    order: 1,
    title: 'Strategische Einkaufsberatung',
    description: 'Beratung für Investitionsgüter und technische Projekte zur Optimierung Ihrer Beschaffungsstrategie.',
    icon: 'Target',
    color: 'primary',
  },
  {
    order: 2,
    title: 'Ausschreibungsmanagement',
    description: 'Professionelle Durchführung von RFI/RFQ/RFP-Prozessen zur Auswahl der besten Lieferanten.',
    icon: 'FileText',
    color: 'accent',
  },
  {
    order: 3,
    title: 'Vertrags- & Preisverhandlungen',
    description: 'Führung von Verhandlungen mit nationalen und internationalen Lieferanten zur Sicherung optimaler Konditionen.',
    icon: 'Handshake',
    color: 'primary',
  },
  {
    order: 4,
    title: 'Lieferantenanalyse & -entwicklung',
    description: 'Analyse und Entwicklung von Lieferantenbeziehungen zur Steigerung von Qualität und Effizienz.',
    icon: 'Users',
    color: 'accent',
  },
  {
    order: 5,
    title: 'Projektbegleitung',
    description: 'Begleitung bei Investitionsvorhaben wie Greenfield- und Modernisierungsprojekten.',
    icon: 'Briefcase',
    color: 'primary',
  },
  {
    order: 6,
    title: 'TCO- & Make-or-Buy-Analysen',
    description: 'Durchführung von Total-Cost-of-Ownership-Analysen und Make-or-Buy-Bewertungen.',
    icon: 'TrendingUp',
    color: 'accent',
  },
];

export const aboutContent: AboutContent = {
    tag: 'Über MettCon',
    title: 'Expertise und Partnerschaft für Ihren strategischen Erfolg',
    paragraphs: [
        'Mein Name ist <strong>Jan Mettang</strong>, und ich bin das Gesicht hinter MettCon. Mit über 15 Jahren Erfahrung im strategischen Einkauf habe ich mich darauf spezialisiert, Unternehmen dabei zu unterstützen, ihre Beschaffungsprozesse zu optimieren und nachhaltige Wettbewerbsvorteile zu erzielen.',
        'Mein Ansatz ist partnerschaftlich und auf Ihre individuellen Bedürfnisse zugeschnitten. Ich kombiniere tiefgehendes Fachwissen mit einer praxisorientierten Vorgehensweise, um messbare Ergebnisse zu liefern.'
    ],
    profile: {
        name: 'Jan Mettang',
        title: 'Gründer & Inhaber von MettCon',
        bio: 'Diplom-Wirtschaftsingenieur mit Leidenschaft für strategischen Einkauf und technische Projekte. Ich stehe für transparente Kommunikation und nachhaltige Lösungen.'
    }
};

export const contactContent: ContactContent = {
    tag: 'Kontakt',
    title: 'Lassen Sie uns zusammenarbeiten',
    subtitle: 'Ich freue mich darauf, von Ihnen zu hören und gemeinsam herauszufinden, wie ich Ihr Unternehmen unterstützen kann.',
    contactBoxTitle: 'Direkter Kontakt',
    info: [
        {
            icon: 'Mail',
            title: 'E-Mail',
            value: 'jan.mettang@example.com',
            link: 'mailto:jan.mettang@example.com',
        },
        {
            icon: 'Phone',
            title: 'Telefon',
            value: '+49 123 456789',
            link: 'tel:+49123456789',
        },
        {
            icon: 'MapPin',
            title: 'Standort',
            value: 'Deutschlandweit tätig',
            link: null,
        }
    ]
};

export const footerContent: FooterContent = {
  description: 'Strategische Einkaufsberatung für nachhaltigen Erfolg.',
  email: 'jan.mettang@example.com',
  phone: '+49 123 456789',
  linkedinUrl: 'https://www.linkedin.com/',
  impressumUrl: '/impressum',
  datenschutzUrl: '/datenschutz'
};
