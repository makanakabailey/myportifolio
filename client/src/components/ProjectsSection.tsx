import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { SiFigma, SiAdobexd, SiWordpress, SiGoogleanalytics } from "react-icons/si";
import { Calendar, Database, BarChart3, Users, Target, TrendingUp } from "lucide-react";

// Import Authority Builder images
import authorityBuilderHome from "@assets/authority-builder-home.png";
import authorityBuilder2 from "@assets/authority-builder-2.png";
import authorityBuilder3 from "@assets/authority-builder-3.png";
import authorityBuilder4 from "@assets/authority-builder-4.png";
import authorityBuilder5 from "@assets/authority-builder-5.png";
import authorityBuilder7 from "@assets/authority-builder-7.png";

// Import Craftsman images
import craftsman1 from "@assets/craftsman-1.png";
import craftsman2 from "@assets/craftsman-2.png";
import craftsman3 from "@assets/craftsman-3.png";
import craftsman4 from "@assets/craftsman-4.png";
import craftsman5 from "@assets/craftsman-5.png";
import craftsman6 from "@assets/craftsman-6.png";

// Import Architect images
import architect1 from "@assets/architect-1.png";
import architect2 from "@assets/architect-2.png";
import architect3 from "@assets/architect-3.png";
import architect4 from "@assets/architect-4.png";
import architect5 from "@assets/architect-5.png";
import architect6 from "@assets/architect-6.png";

interface Project {
  id: string;
  title: string;
  description: string;
  images: string[];
}

const projectsData: Project[] = [
  {
    id: "authority-builder",
    title: "The Authority Builder",
    description: `**Client Profile:** Marketing Consultant (or Coach) specializing in helping experts establish credibility and attract premium clients.

**The Challenge:**
The client, a highly skilled marketing consultant, struggled with a website that failed to communicate her unique value proposition. It looked generic, lacked a strong narrative, and didn't effectively convert visitors into qualified leads. Her business relies heavily on trust and authority, but her online presence wasn't reflecting her expertise, leading to missed opportunities with high-value clients.

**My Solution:**
I designed and developed a comprehensive website experience focused on building authority, fostering trust, and generating high-quality leads.

**Powerful Homepage Design:** Crafted a compelling hero section with a benefit-driven headline ("Unlock Your Expert Influence: Attract Premium Clients") and a clear sub-headline, immediately communicating value. A prominent Call to Action ("Book a Free Discovery Call") was strategically placed to guide visitor action.

**"About/Story" Page:** Developed a rich narrative on the "About" page, detailing the consultant's journey, philosophy, and the impact she creates. This personal connection humanizes the brand and builds rapport.

**Detailed Case Studies:** Created a dedicated section for in-depth case studies, each following the "Problem → Solution → Result" framework. This demonstrated her expertise through tangible outcomes and data, showcasing her ability to deliver real transformations.

**Strategic Testimonial Integration:** Testimonials from satisfied clients were seamlessly integrated throughout the site – on the homepage, services pages, and case study pages – providing constant social proof and reinforcing credibility.

**Clear High-Value Offer:** Emphasized a singular, high-value Call to Action across the site ("Book a Free Discovery Call") to streamline the lead generation process and attract serious inquiries.

**Results:**
The new website transformed the consultant's online presence into a powerful authority-building tool. Within the first three months of launch:

• **Increased Lead Quality:** A 75% increase in qualified discovery call bookings, leading to higher conversion rates for premium clients.

• **Enhanced Credibility:** Client feedback indicated a significant improvement in perception, with prospects consistently mentioning the professionalism and clear value presented by the website.

• **Improved Engagement:** Website analytics showed a 40% increase in average session duration and a lower bounce rate, indicating visitors were more engaged with the content and finding the information they needed.

• **Stronger Brand Recognition:** The cohesive design and compelling messaging established the consultant as a recognized authority in her niche.

**Skills Demonstrated:**
• Copywriting: Crafting persuasive, benefit-driven headlines, sub-headlines, and calls to action.
• Storytelling: Developing an engaging "About/Story" narrative and structuring compelling case studies.
• Lead Generation Strategy: Designing a user flow optimized for converting visitors into qualified leads through strategic CTAs and content placement.
• UI/UX Design: Creating an intuitive, aesthetically pleasing, and professional website layout.
• Information Architecture: Organizing content logically to ensure ease of navigation and information retrieval.

**Technologies Used:**
• Design Tools: Figma, Adobe XD (for wireframing and UI design)
• Development Platform: WordPress (or Webflow/Squarespace, depending on client preference and complexity)
• Analytics: Google Analytics
• CRM Integration: HubSpot, Calendly (for discovery call scheduling)`,
    images: [
      authorityBuilderHome,
      authorityBuilder2,
      authorityBuilder3,
      authorityBuilder4,
      authorityBuilder5,
      authorityBuilder7
    ]
  },
  {
    id: "master-craftsman",
    title: "The Master Craftsman",
    description: `**Client Profile:** A Custom Furniture Builder (Artisan/Maker) selling physical, high-value goods online.

**The Challenge:**
The client, an exceptionally talented custom furniture builder, produced exquisite, handcrafted pieces. However, their existing online presence failed to convey the premium craftsmanship and unique story behind their work. Lacking high-quality photography, transparent policies, and a compelling brand narrative, their products struggled to justify their premium pricing against mass-produced alternatives on platforms like Etsy or Amazon, hindering sales and growth.

**My Solution:**
I designed and implemented a bespoke e-commerce experience that champions craftsmanship, builds trust, and optimizes for conversion, positioning the client as a high-end artisan rather than just another online seller.

**E-commerce Setup with Visual Focus:** Created a robust e-commerce platform where every page prioritizes high-quality product photography and, where applicable, video. This immersive visual experience allows products to speak for themselves.

**Immersive Product Pages:** Each product page features:
• A scrollable gallery of numerous high-resolution images showing the product from multiple angles, in different settings, and highlighting intricate details.
• Descriptions that blend features with the narrative, emphasizing materials and unique design elements.
• Integrated video (or video thumbnails) showcasing the crafting process, adding depth and authenticity.

**"About the Maker" Section:** Developed a dedicated page telling the story of the artisan, their philosophy, and the meticulous process behind their work. This section includes evocative workshop photography and concise text blocks, building a personal connection and justifying premium pricing.

**Transparent Policies:** Clearly articulated shipping details, return policies, and care instructions are easily accessible. This transparency builds crucial trust, especially for high-value purchases.

**Email List Integration:** Seamlessly integrated an email subscription opt-in throughout the site (e.g., footer, pop-ups, dedicated page) to capture leads for new product launches, exclusive collections, and brand storytelling, fostering a loyal customer base.

**Results:**
The redesigned e-commerce platform successfully elevated the custom furniture builder's brand and significantly improved their online sales performance.

• **Increased Conversion Rate:** A 60% increase in online sales conversions, as customers felt more confident and connected to the products.

• **Enhanced Brand Perception:** The client was firmly positioned as a premium artisan, capable of justifying higher price points compared to competitors.

• **Stronger Customer Loyalty:** The "About the Maker" section and consistent brand storytelling led to more engaged customers and repeat purchases.

• **Reduced Customer Service Inquiries:** Clear policies and comprehensive product information led to a 30% decrease in basic customer service questions, freeing up the artisan's time.

**Skills Demonstrated:**
• E-commerce Strategy: Designing a user journey optimized for product discovery, trust-building, and purchase completion.
• Branding: Crafting a cohesive visual identity and narrative that conveys craftsmanship, quality, and heritage.
• Conversion Optimization: Implementing design elements and content strategies to maximize sales and lead generation.
• Visual Design: Curating and presenting high-quality imagery and video to highlight product features and aesthetics.
• User Experience (UX) Design: Creating an intuitive and enjoyable shopping experience with clear navigation and information hierarchy.

**Technologies Used:**
• E-commerce Platform: Shopify (or WooCommerce for WordPress)
• Design Tools: Adobe Photoshop, Lightroom (for image editing), Figma (for UI/UX design)
• Email Marketing: Mailchimp, Klaviyo
• Video Hosting: Vimeo, YouTube (embedded)`,
    images: [
      craftsman1,
      craftsman2,
      craftsman3,
      craftsman4,
      craftsman5,
      craftsman6
    ]
  },
  {
    id: "the-architect",
    title: "The Architect",
    description: `**Client Profile:** An Architect (or any creative professional whose work is highly visual).

**The Challenge:**
The client, a talented architect, had an impressive body of work but their existing online portfolio was merely a disorganized gallery of images. It lacked a cohesive narrative, made it difficult for visitors to understand the scope and intent behind each project, and failed to adequately present the design process. The stunning visual quality of their work was diminished by a cluttered and unguided user experience.

**My Solution:**
I designed and developed a minimalist, image-centric portfolio that acts as a guided visual journey through the architect's projects, transforming a simple gallery into a compelling storytelling platform.

**Minimalist, Full-Screen Design:** The website utilizes a clean, uncluttered layout where high-resolution imagery takes center stage. A full-screen hero image on the landing page immediately immerses the visitor in the architect's work.

**Intuitive Navigation:** Simple, clear navigation (Projects, About, Contact) is unobtrusively placed, ensuring users can find what they need without distracting from the visuals.

**Individual Project Storytelling:** Each project has its dedicated page, structured to tell a complete story:
• Concept & Sketches: Showcasing initial ideas, hand-drawn sketches, and early massing models to reveal the creative process.
• Material Palette & Inspiration: Presenting mood boards, material samples, and inspirational imagery that informed the design.
• Final Result & Details: Featuring stunning photographs of the completed project, floor plans, and key technical details.

**Meticulous Attention to Visuals:** Optimized all images for quality and fast loading speed across devices. Each image serves a purpose in the narrative.

**Responsive Design:** Ensured a seamless and equally impactful experience on desktops, tablets, and mobile devices, making the work accessible to all users.

**Results:**
The new portfolio transformed the architect's online presence, effectively showcasing their work as a series of visual stories.

• **Enhanced Client Engagement:** The structured project pages guided prospective clients through the design process, leading to more informed and engaged inquiries.

• **Improved Presentation of Work:** The focus on high-quality visuals and narrative allowed the architect's unique design philosophy and meticulous attention to detail to shine through.

• **Positive Feedback:** The architect received glowing feedback from clients and peers, praising the portfolio's elegance, clarity, and immersive experience.

• **Increased Conversion Rate:** Potential clients could better understand the architect's capabilities and vision, leading to a higher conversion rate for initial consultations.

**Skills Demonstrated:**
• Visual Design: Creating an aesthetic, minimalist, and image-focused layout that prioritizes the architectural work.
• User Experience (UX) Design: Crafting an intuitive user flow that guides visitors through project stories and information seamlessly.
• Presentation & Storytelling: Structuring content to effectively communicate the conceptual development, design process, and final outcomes of each project.
• Information Architecture: Organizing complex visual and textual information into easily digestible and aesthetically pleasing layouts.
• Responsive Design: Ensuring optimal viewing and interaction across various devices and screen sizes.

**Technologies Used:**
• Design Tools: Adobe Photoshop, Illustrator, Figma (for mood boards, mockups, and UI design)
• Development Platform: Webflow, custom HTML/CSS/JavaScript (for granular control over animations and image loading)
• Image Optimization: Tools like TinyPNG, ImageOptim
• Performance Monitoring: Google PageSpeed Insights`,
    images: [
      architect1,
      architect2,
      architect3,
      architect4,
      architect5,
      architect6
    ]
  },
  {
    id: "project-four",
    title: "Project Four",
    description: "Coming soon - Project description will be added here.",
    images: ["/api/placeholder/400/300"]
  }
];

interface ProjectTileProps {
  project: Project;
  index: number;
}

function ProjectTile({ project, index }: ProjectTileProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  const getTileSize = (index: number) => {
    // Each tile should cover 1/4 of the section
    return "col-span-1 row-span-1";
  };

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setIsHovered(true);
    }, 500); // 500ms delay for reduced sensitivity
    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsHovered(false);
  };

  return (
    <div
      className={`relative overflow-hidden cursor-pointer group ${getTileSize(index)} min-h-[200px]`}
      style={{ backgroundColor: "#1e40af" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Simplified Background Image */}
      <img
        src={project.images[currentImageIndex]}
        alt={`${project.title} slide ${currentImageIndex + 1}`}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Project Title */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-white font-semibold text-lg leading-tight">
          {project.title}
        </h3>
      </div>

      {/* Hover Description Tooltip - Full Page Overlay */}
      {isHovered && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 z-50 overflow-hidden"
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-background rounded-lg w-full max-w-4xl h-full flex flex-col border border-border">
            {/* Header */}
            <div className="p-6 border-b border-border flex justify-between items-center bg-card">
              <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
              <div className="flex gap-2">
                <SiFigma className="w-6 h-6 text-primary" />
                <SiAdobexd className="w-6 h-6 text-accent" />
                <SiWordpress className="w-6 h-6 text-primary" />
                <SiGoogleanalytics className="w-6 h-6 text-accent" />
                <Calendar className="w-6 h-6 text-primary" />
                <Database className="w-6 h-6 text-accent" />
              </div>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide bg-background" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="prose prose-lg max-w-none text-foreground">
                {project.description.split('\n\n').map((section, index) => {
                  // Check if section contains bullet points
                  if (section.includes('•')) {
                    const lines = section.split('\n');
                    
                    // Check if first line starts with bullet or is a header
                    const firstLineIsBullet = lines[0].trim().startsWith('•');
                    const title = firstLineIsBullet ? '' : lines[0];
                    const bullets = firstLineIsBullet ? lines : lines.slice(1);
                    
                    return (
                      <div key={index} className="mb-6">
                        {title && <h3 className="text-lg font-semibold text-foreground mb-3">{title}</h3>}
                        <ul className="space-y-2">
                          {bullets.map((bullet, bulletIndex) => {
                            if (!bullet.trim().startsWith('•')) return null;
                            return (
                              <li key={bulletIndex} className="flex items-start gap-2">
                                {bullet.includes('Lead Quality') && <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />}
                                {bullet.includes('Credibility') && <Users className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />}
                                {bullet.includes('Engagement') && <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />}
                                {bullet.includes('Brand Recognition') && <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />}
                                {bullet.includes('Enhanced') && <Users className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />}
                                {bullet.includes('Improved') && <BarChart3 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />}
                                {bullet.includes('Positive') && <Target className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />}
                                {bullet.includes('Increased') && <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />}
                                <span className="text-muted-foreground">{bullet.replace('•', '').trim()}</span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  }
                  
                  // Handle bold headers
                  if (section.includes('**')) {
                    const formatted = section.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    return (
                      <div key={index} className="mb-4">
                        <p 
                          className="text-muted-foreground leading-relaxed" 
                          dangerouslySetInnerHTML={{ __html: formatted }}
                        />
                      </div>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {section}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Slideshow indicators */}
      {project.images.length > 1 && (
        <div className="absolute bottom-4 left-4 flex space-x-1 z-10">
          {project.images.map((_, imgIndex) => (
            <div
              key={imgIndex}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Showcase of strategic portfolio designs and digital transformations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-4 grid-rows-1 gap-0 h-[400px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-testid="projects-grid"
        >
          {projectsData.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants} data-testid={`project-tile-${index}`}>
              <ProjectTile project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}