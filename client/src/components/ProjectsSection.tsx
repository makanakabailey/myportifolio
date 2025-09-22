import { motion } from "framer-motion";
import { useState, useEffect } from "react";

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
    description: "A comprehensive website experience focused on building authority, fostering trust, and generating high-quality leads for marketing consultants. Achieved 75% increase in qualified discovery call bookings and 40% increase in engagement.",
    images: [
      "/attached_assets/authority builder home page_1758531719877.png",
      "/attached_assets/#2 authority builder_1758531719876.png",
      "/attached_assets/#3 authority builder_1758531719876.png",
      "/attached_assets/#4 authority builder_1758531719876.png",
      "/attached_assets/#5 authority builder_1758531719875.png",
      "/attached_assets/#7 authoritybuilder_1758531719875.png"
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
        return "col-span-2 row-span-2"; // Large tile for Authority Builder
      case 1:
        return "col-span-1 row-span-1"; // Medium tile
      case 2:
        return "col-span-1 row-span-1"; // Medium tile
      default:
        return "col-span-1 row-span-1";
    }
  };

  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl cursor-pointer group ${getTileSize(index)}`}
      style={{ backgroundColor: "#1e40af" }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image Slideshow */}
      <div className="absolute inset-0">
        {project.images.map((image, imgIndex) => (
          <motion.img
            key={imgIndex}
            src={image}
            alt={`${project.title} slide ${imgIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: imgIndex === currentImageIndex ? 0.8 : 0 
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Project Title */}
      <div className="absolute top-4 left-4 z-10">
        <h3 className="text-white font-semibold text-lg leading-tight">
          {project.title}
        </h3>
      </div>

      {/* Hover Description Tooltip */}
      <motion.div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-6 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: isHovered ? 'auto' : 'none' }}
      >
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 max-h-full overflow-y-auto">
          <h4 className="font-semibold text-gray-900 mb-2">{project.title}</h4>
          <p className="text-gray-700 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </motion.div>

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
    </motion.div>
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
          className="grid grid-cols-3 grid-rows-2 gap-4 h-[600px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsData.map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectTile project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}