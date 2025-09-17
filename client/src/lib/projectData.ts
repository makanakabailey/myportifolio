export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  image: string;
  tags: string[];
  description: string;
}

export const projectData: Record<string, Project> = {
  authority: {
    id: 'authority',
    title: 'VisionPoint Consulting',
    category: 'Strategy & Consulting',
    description: 'Authority-building portfolio for business strategist',
    problem: 'Business strategist needed credible online presence to attract C-level clients and establish thought leadership in competitive consulting market.',
    solution: 'Authority-building design with strategic testimonials, detailed case studies, and clear value proposition highlighting expertise and results.',
    result: '150% increase in qualified consultation requests within 3 months, featured in industry publications, secured 3 enterprise contracts.',
    technologies: ['Figma', 'Webflow', 'Adobe CC', 'Google Analytics'],
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Branding', 'UX Strategy', 'Content Strategy']
  },
  visual: {
    id: 'visual',
    title: 'Meridian Architecture',
    category: 'Architecture & Design',
    description: 'Visual portfolio showcasing award-winning spaces',
    problem: 'Award-winning architect needed portfolio to showcase complex spatial designs and attract high-end residential and commercial clients.',
    solution: 'Minimalist visual storytelling emphasizing project narratives, design processes, and stunning photography of completed works.',
    result: 'Featured in Architectural Digest, 200% increase in premium project inquiries, won international design competition.',
    technologies: ['Figma', 'Framer', 'Adobe CC', 'Three.js'],
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Visual Design', 'Portfolio', 'Photography']
  },
  product: {
    id: 'product',
    title: 'Terra Ceramics',
    category: 'E-commerce & Craft',
    description: 'Premium e-commerce for artisanal pottery',
    problem: 'Artisan potter needed premium e-commerce platform to compete with mass production while highlighting handmade quality and craftsmanship.',
    solution: 'Craft-focused design highlighting handmade quality, maker story, and premium positioning with seamless e-commerce integration.',
    result: '300% increase in average order value, featured in design magazines, expanded to international markets.',
    technologies: ['Shopify', 'Adobe CC', 'Figma', 'Klaviyo'],
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['E-commerce', 'Product', 'Branding']
  },
  results: {
    id: 'results',
    title: 'DataDriven Agency',
    category: 'B2B Services',
    description: 'ROI-focused portfolio for marketing agency',
    problem: 'Marketing agency needed to prove ROI capabilities to enterprise clients and differentiate from competitors in saturated market.',
    solution: 'Data-focused design with clear metrics, quantifiable case studies, and interactive dashboards showcasing client success stories.',
    result: 'Secured 5 enterprise contracts worth $2M+ in first quarter, 400% increase in qualified leads, industry recognition.',
    technologies: ['Figma', 'Webflow', 'Chart.js', 'HubSpot'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Analytics', 'B2B', 'Performance']
  },
  hybrid: {
    id: 'hybrid',
    title: 'Sarah Chen Design',
    category: 'Personal Branding',
    description: 'Multi-faceted portfolio for UX thought leader',
    problem: 'UX designer needed platform for both client work showcase and thought leadership content to establish industry authority.',
    solution: 'Dual-purpose design balancing portfolio showcase with content strategy, integrating blog, speaking engagements, and case studies.',
    result: 'Speaking at 3 major conferences, 500% increase in LinkedIn followers, featured in design publications, launched design course.',
    technologies: ['Figma', 'Notion', 'Webflow', 'ConvertKit'],
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['UX Design', 'Branding', 'Content Strategy']
  },
  navigation: {
    id: 'navigation',
    title: 'Dr. Alex Rivera',
    category: 'Research & Academia',
    description: 'Complex navigation for research portfolio',
    problem: 'Researcher needed organized presentation of 200+ published papers and ongoing projects for academic and industry collaboration.',
    solution: 'Advanced filtering and search with intuitive categorization system, timeline view, and collaboration-focused design.',
    result: 'Increased collaboration requests by 180%, improved research visibility, secured 2 major grant opportunities.',
    technologies: ['React', 'Algolia', 'Figma', 'Zotero API'],
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Information Architecture', 'UX', 'Search']
  },
  bold: {
    id: 'bold',
    title: 'Studio Flux',
    category: 'Creative Innovation',
    description: 'Experimental portfolio for contemporary artist',
    problem: 'Contemporary artist needed portfolio reflecting experimental, boundary-pushing work while maintaining usability for gallery owners and collectors.',
    solution: 'Bold, interactive design with custom animations, unconventional layouts, and immersive experience showcasing artistic innovation.',
    result: 'Gallery representation in NYC, featured in major art publications, solo exhibition, collector network expanded globally.',
    technologies: ['Three.js', 'Figma', 'Custom CSS', 'WebGL'],
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600',
    tags: ['Art Direction', 'Innovation', 'Interactive']
  }
};
