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
    id: "project-two",
    title: "Project Two",
    description: "Coming soon - Project description will be added here.",
    images: ["/api/placeholder/400/300"]
  },
  {
    id: "project-three", 
    title: "Project Three",
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

  useEffect(() => {
    if (project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images.length]);

  const getTileSize = (index: number) => {
    switch (index) {
      case 0:
        return "col-span-2 row-span-3"; // Larger tile for Authority Builder
      case 1:
        return "col-span-1 row-span-2"; // Larger medium tile
      case 2:
        return "col-span-1 row-span-1"; // Regular tile
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <div
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${getTileSize(index)} min-h-[200px]`}
      style={{ backgroundColor: "#1e40af" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-start justify-center p-4 z-50 overflow-hidden">
          <div className="bg-white rounded-lg w-full max-w-4xl h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>
              <div className="flex gap-2">
                <SiFigma className="w-6 h-6 text-purple-600" />
                <SiAdobexd className="w-6 h-6 text-pink-600" />
                <SiWordpress className="w-6 h-6 text-blue-600" />
                <SiGoogleanalytics className="w-6 h-6 text-orange-600" />
                <Calendar className="w-6 h-6 text-blue-500" />
                <Database className="w-6 h-6 text-green-600" />
              </div>
            </div>
            
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="prose prose-lg max-w-none">
                {project.description.split('\n\n').map((section, index) => {
                  // Check if section contains bullet points
                  if (section.includes('•')) {
                    const lines = section.split('\n');
                    const title = lines[0];
                    const bullets = lines.slice(1);
                    
                    return (
                      <div key={index} className="mb-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                        <ul className="space-y-2">
                          {bullets.map((bullet, bulletIndex) => (
                            <li key={bulletIndex} className="flex items-start gap-2">
                              {bullet.includes('Lead Quality') && <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />}
                              {bullet.includes('Credibility') && <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />}
                              {bullet.includes('Engagement') && <BarChart3 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />}
                              {bullet.includes('Brand Recognition') && <Target className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />}
                              <span className="text-gray-700">{bullet.replace('•', '').trim()}</span>
                            </li>
                          ))}
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
                          className="text-gray-700 leading-relaxed" 
                          dangerouslySetInnerHTML={{ __html: formatted }}
                        />
                      </div>
                    );
                  }
                  
                  return (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
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
          className="grid grid-cols-3 grid-rows-3 gap-6 h-[800px]"
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