// Navigation items
export const NAV_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/#about' },
  { name: 'Projects', path: '/#projects' },
  { name: 'Skills', path: '/#skills' },
  { name: 'Contact', path: '/#contact' },
];

// Social media links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/Rianpedia-dev' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/jemiarian' },
  { name: 'Twitter', url: 'https://x.com/Rianpedia_dev' },
  { name: 'Instagram', url: 'https://www.instagram.com/rianpediaaa?igsh=MTN2emhjMjBuZG0wdQ==' },
  { name: 'Whatsapp', url: 'https://wa.me/message/RBPZUX72S3VTI1' },
];

// Portfolio metadata
export const PORTFOLIO_METADATA = {
  title: 'Your Portfolio',
  description: 'Professional portfolio showcasing projects and skills',
  author: 'Jemi Arian',
  siteUrl: 'https://rianpedia.com',
};

// Animation variants for Framer Motion
export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  }
};