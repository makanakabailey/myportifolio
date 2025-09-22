// Featured Projects assets
import authorityBuilderHome from "@assets/authority-builder-home.png";
import authorityBuilder2 from "@assets/authority-builder-2.png";
import authorityBuilder3 from "@assets/authority-builder-3.png";
import authorityBuilder4 from "@assets/authority-builder-4.png";
import authorityBuilder5 from "@assets/authority-builder-5.png";
import authorityBuilder7 from "@assets/authority-builder-7.png";

import craftsman1 from "@assets/craftsman-1.png";
import craftsman2 from "@assets/craftsman-2.png";
import craftsman3 from "@assets/craftsman-3.png";
import craftsman4 from "@assets/craftsman-4.png";
import craftsman5 from "@assets/craftsman-5.png";
import craftsman6 from "@assets/craftsman-6.png";

import architect1 from "@assets/architect-1.png";
import architect2 from "@assets/architect-2.png";
import architect3 from "@assets/architect-3.png";
import architect4 from "@assets/architect-4.png";
import architect5 from "@assets/architect-5.png";
import architect6 from "@assets/architect-6.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
  image: string;
  images: string[];
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
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
    images: [
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900'
    ],
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
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900'
    ],
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
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900'
    ],
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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900'
    ],
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
    image: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
    images: [
      'https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900'
    ],
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
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
    images: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900'
    ],
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
    image: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
    images: [
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900',
      'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=900'
    ],
    tags: ['Art Direction', 'Innovation', 'Interactive']
  },
  'authority-builder': {
    id: 'authority-builder',
    title: 'The Authority Builder',
    category: 'Featured Project',
    description: 'Marketing Consultant specializing in helping experts establish credibility and attract premium clients',
    problem: 'The client, a highly skilled marketing consultant, struggled with a website that failed to communicate her unique value proposition. It looked generic, lacked a strong narrative, and didn\'t effectively convert visitors into qualified leads.',
    solution: 'I designed and developed a comprehensive website experience focused on building authority, fostering trust, and generating high-quality leads with powerful homepage design, strategic testimonial integration, and clear high-value offers.',
    result: '75% increase in qualified discovery call bookings, 40% increase in average session duration, enhanced credibility with improved client perception, and stronger brand recognition as a recognized authority.',
    technologies: ['Figma', 'Adobe XD', 'WordPress', 'Google Analytics', 'HubSpot', 'Calendly'],
    image: authorityBuilderHome,
    images: [
      authorityBuilderHome,
      authorityBuilder2,
      authorityBuilder3,
      authorityBuilder4,
      authorityBuilder5,
      authorityBuilder7
    ],
    tags: ['Web Design', 'Lead Generation', 'Authority Building']
  },
  'master-craftsman': {
    id: 'master-craftsman',
    title: 'The Master Craftsman',
    category: 'Featured Project',
    description: 'Custom Furniture Builder (Artisan/Maker) selling physical, high-value goods online',
    problem: 'The client, an exceptionally talented custom furniture builder, produced exquisite, handcrafted pieces. However, their existing online presence failed to convey the premium craftsmanship and unique story behind their work.',
    solution: 'I designed and implemented a bespoke e-commerce experience that champions craftsmanship, builds trust, and optimizes for conversion, positioning the client as a high-end artisan rather than just another online seller.',
    result: '60% increase in online sales conversions, enhanced brand perception as a premium artisan, stronger customer loyalty with repeat purchases, and 30% decrease in customer service inquiries.',
    technologies: ['Shopify', 'Adobe Photoshop', 'Lightroom', 'Figma', 'Mailchimp', 'Klaviyo'],
    image: craftsman1,
    images: [
      craftsman1,
      craftsman2,
      craftsman3,
      craftsman4,
      craftsman5,
      craftsman6
    ],
    tags: ['E-commerce', 'Branding', 'Craftsmanship']
  },
  'the-architect': {
    id: 'the-architect',
    title: 'The Architect',
    category: 'Featured Project',
    description: 'An Architect (or any creative professional whose work is highly visual)',
    problem: 'The client, a talented architect, had an impressive body of work but their existing online portfolio was merely a disorganized gallery of images. It lacked a cohesive narrative and failed to adequately present the design process.',
    solution: 'I designed and developed a minimalist, image-centric portfolio that acts as a guided visual journey through the architect\'s projects, transforming a simple gallery into a compelling storytelling platform.',
    result: 'Enhanced client engagement with structured project pages, improved presentation of work with focus on high-quality visuals, positive feedback from clients and peers, and increased conversion rate for initial consultations.',
    technologies: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Webflow', 'TinyPNG', 'ImageOptim'],
    image: architect1,
    images: [
      architect1,
      architect2,
      architect3,
      architect4,
      architect5,
      architect6
    ],
    tags: ['Portfolio Design', 'Visual Storytelling', 'Architecture']
  }
};
