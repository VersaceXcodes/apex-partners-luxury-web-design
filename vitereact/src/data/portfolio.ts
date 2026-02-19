export interface PortfolioProject {
  id: string;
  slug: string;
  name: string;
  category: 'restaurant' | 'barber' | 'business' | 'ecommerce' | 'platform';
  categoryLabel: string;
  shortDescription: string;
  thumbnail: string;
  overview: string;
  goals: string[];
  deliverables: string[];
  result: string;
  screenshots: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'noir-bistro',
    name: 'Noir Bistro',
    category: 'restaurant',
    categoryLabel: 'Restaurant Website',
    shortDescription: 'Premium redesign + mobile speed improvements.',
    thumbnail: '/images/portfolio/noir-bistro-thumb.jpg',
    overview: 'Noir Bistro, a high-end French restaurant in Dublin, needed a website that matched their premium dining experience. The previous site was outdated and slow on mobile devices.',
    goals: [
      'Create a luxury aesthetic that reflects the restaurant\'s premium positioning',
      'Improve mobile loading speed by 60%',
      'Showcase menu and ambience through high-quality imagery',
      'Increase online reservations by 40%'
    ],
    deliverables: [
      'Full responsive website redesign',
      'Interactive menu with PDF download',
      'Gallery showcasing restaurant ambience',
      'Integrated reservation system',
      'Speed optimization and SEO improvements'
    ],
    result: 'The new website achieved a 70% improvement in mobile load times and saw a 52% increase in online reservations within the first month. The premium aesthetic successfully elevated the brand\'s digital presence.',
    screenshots: [
      '/images/portfolio/noir-bistro-1.jpg',
      '/images/portfolio/noir-bistro-2.jpg',
      '/images/portfolio/noir-bistro-3.jpg'
    ]
  },
  {
    id: '2',
    slug: 'crown-cut-studio',
    name: 'Crown Cut Studio',
    category: 'barber',
    categoryLabel: 'Barber Website',
    shortDescription: 'Modern brand presence with booking integration.',
    thumbnail: '/images/portfolio/crown-cut-thumb.jpg',
    overview: 'Crown Cut Studio, a modern barbershop in Dublin, needed a sharp online presence to match their quality service. They required booking integration and a gallery to showcase their work.',
    goals: [
      'Build trust through professional web presence',
      'Integrate with existing booking platform',
      'Showcase portfolio of cuts and styles',
      'Improve local search visibility'
    ],
    deliverables: [
      'Modern responsive website',
      'Services and pricing pages',
      'Portfolio gallery',
      'Booking system integration',
      'Local SEO optimization'
    ],
    result: 'Crown Cut Studio saw a 45% increase in online bookings and significantly improved their local search rankings. The portfolio gallery became a key conversion driver.',
    screenshots: [
      '/images/portfolio/crown-cut-1.jpg',
      '/images/portfolio/crown-cut-2.jpg',
      '/images/portfolio/crown-cut-3.jpg'
    ]
  },
  {
    id: '3',
    slug: 'silverline-studio',
    name: 'Silverline Studio',
    category: 'business',
    categoryLabel: 'Premium Brand Website',
    shortDescription: 'Complete brand website with premium positioning.',
    thumbnail: '/images/portfolio/silverline-thumb.jpg',
    overview: 'Silverline Studio, a creative agency, needed a website that demonstrated their design capabilities while effectively communicating their service offerings.',
    goals: [
      'Establish premium brand positioning',
      'Showcase portfolio and capabilities',
      'Generate qualified leads',
      'Create scalable content structure'
    ],
    deliverables: [
      'Full brand website',
      'Portfolio showcase system',
      'Service pages with clear CTAs',
      'Blog/insights section',
      'Contact and quote request forms'
    ],
    result: 'The website successfully positioned Silverline Studio as a premium creative agency, resulting in a 60% increase in high-value enquiries and improved client perception.',
    screenshots: [
      '/images/portfolio/silverline-1.jpg',
      '/images/portfolio/silverline-2.jpg',
      '/images/portfolio/silverline-3.jpg'
    ]
  },
  {
    id: '4',
    slug: 'maison-cafe',
    name: 'Maison Café',
    category: 'restaurant',
    categoryLabel: 'Restaurant Website',
    shortDescription: 'Elegant café website with online ordering.',
    thumbnail: '/images/portfolio/maison-cafe-thumb.jpg',
    overview: 'Maison Café, a boutique coffee shop, required a website that captured their artisanal approach while facilitating online orders and providing essential information.',
    goals: [
      'Create elegant, approachable design',
      'Enable online ordering functionality',
      'Highlight specialty menu items',
      'Provide clear location and hours information'
    ],
    deliverables: [
      'Responsive café website',
      'Digital menu with filtering',
      'Third-party ordering integration',
      'Location map and hours',
      'Instagram feed integration'
    ],
    result: 'Maison Café experienced a 35% increase in online orders and improved walk-in traffic through better visibility of location and menu offerings.',
    screenshots: [
      '/images/portfolio/maison-cafe-1.jpg',
      '/images/portfolio/maison-cafe-2.jpg',
      '/images/portfolio/maison-cafe-3.jpg'
    ]
  },
  {
    id: '5',
    slug: 'northmark-services',
    name: 'Northmark Services',
    category: 'business',
    categoryLabel: 'Business Website',
    shortDescription: 'Lead-generating website for B2B services.',
    thumbnail: '/images/portfolio/northmark-thumb.jpg',
    overview: 'Northmark Services, a commercial maintenance company, needed a professional website to generate B2B leads and clearly communicate their service offerings.',
    goals: [
      'Generate qualified B2B leads',
      'Clearly present service packages',
      'Build credibility through testimonials',
      'Improve search engine visibility'
    ],
    deliverables: [
      'Business website with lead capture',
      'Service pages with clear pricing structure',
      'Client testimonials section',
      'Quote request system',
      'On-page SEO optimization'
    ],
    result: 'Northmark Services saw a 75% increase in qualified leads within three months, with the website becoming their primary lead generation channel.',
    screenshots: [
      '/images/portfolio/northmark-1.jpg',
      '/images/portfolio/northmark-2.jpg',
      '/images/portfolio/northmark-3.jpg'
    ]
  },
  {
    id: '6',
    slug: 'aurelia-skincare',
    name: 'Aurelia Skincare',
    category: 'ecommerce',
    categoryLabel: 'E-Commerce Website',
    shortDescription: 'Premium e-commerce store with conversion focus.',
    thumbnail: '/images/portfolio/aurelia-thumb.jpg',
    overview: 'Aurelia Skincare, a premium skincare brand, required an e-commerce platform that reflected their luxury positioning while optimizing for conversions.',
    goals: [
      'Create premium e-commerce experience',
      'Optimize product pages for conversion',
      'Implement smooth checkout flow',
      'Build trust through social proof'
    ],
    deliverables: [
      'Shopify e-commerce store',
      'Custom product page templates',
      'Optimized checkout process',
      'Product reviews integration',
      'Email capture and automation setup'
    ],
    result: 'Aurelia Skincare achieved a 40% increase in conversion rate and 25% increase in average order value through the optimized e-commerce experience.',
    screenshots: [
      '/images/portfolio/aurelia-1.jpg',
      '/images/portfolio/aurelia-2.jpg',
      '/images/portfolio/aurelia-3.jpg'
    ]
  },
  {
    id: '7',
    slug: 'district-dental',
    name: 'District Dental',
    category: 'business',
    categoryLabel: 'Local Service Website',
    shortDescription: 'Modern dental practice website with appointment booking.',
    thumbnail: '/images/portfolio/district-dental-thumb.jpg',
    overview: 'District Dental, a modern dental practice, needed a professional website to attract new patients and streamline appointment booking.',
    goals: [
      'Attract new patients through strong web presence',
      'Streamline appointment booking process',
      'Communicate service offerings clearly',
      'Build trust through credentials and testimonials'
    ],
    deliverables: [
      'Professional dental practice website',
      'Online appointment booking system',
      'Services and treatments pages',
      'Team and credentials showcase',
      'Patient testimonials and reviews'
    ],
    result: 'District Dental saw a 50% increase in new patient enquiries and reduced phone calls for basic appointments through the online booking system.',
    screenshots: [
      '/images/portfolio/district-dental-1.jpg',
      '/images/portfolio/district-dental-2.jpg',
      '/images/portfolio/district-dental-3.jpg'
    ]
  },
  {
    id: '8',
    slug: 'atlas-gym',
    name: 'Atlas Gym',
    category: 'platform',
    categoryLabel: 'Landing + Membership Funnel',
    shortDescription: 'High-converting landing page with membership funnel.',
    thumbnail: '/images/portfolio/atlas-gym-thumb.jpg',
    overview: 'Atlas Gym needed a high-converting landing page and membership funnel to drive sign-ups for their premium fitness facility.',
    goals: [
      'Maximize membership sign-up conversions',
      'Clearly communicate value proposition',
      'Create streamlined membership funnel',
      'Integrate with payment processing'
    ],
    deliverables: [
      'High-converting landing page',
      'Membership tier comparison',
      'Multi-step sign-up funnel',
      'Payment integration',
      'Email automation setup'
    ],
    result: 'Atlas Gym achieved a 65% increase in online membership sign-ups and reduced the sign-up process time by 70% through the streamlined funnel.',
    screenshots: [
      '/images/portfolio/atlas-gym-1.jpg',
      '/images/portfolio/atlas-gym-2.jpg',
      '/images/portfolio/atlas-gym-3.jpg'
    ]
  }
];

export const getProjectBySlug = (slug: string): PortfolioProject | undefined => {
  return portfolioProjects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): PortfolioProject[] => {
  if (category === 'all') return portfolioProjects;
  return portfolioProjects.filter(project => project.category === category);
};
