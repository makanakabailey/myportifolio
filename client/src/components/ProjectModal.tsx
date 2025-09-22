import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { projectData, type Project } from "@/lib/projectData";
import { useState, useEffect } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

export default function ProjectModal({ isOpen, onClose, projectId }: ProjectModalProps) {
  const project: Project | undefined = projectId ? projectData[projectId] : undefined;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when modal opens or project changes
  useEffect(() => {
    if (isOpen && projectId) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, projectId]);

  // Auto-slide images like in tiles
  useEffect(() => {
    if (isOpen && project && project.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isOpen, project]);

  if (!project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-testid="project-modal"
        >
          {/* Central modal with white background and 90% opacity */}
          <motion.div
            className="absolute inset-x-16 top-20 bottom-20 bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-content"
          >
            {/* Blinking circular X button at top center */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
              <motion.button
                onClick={onClose}
                className="w-12 h-12 bg-gray-800/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-gray-700/80 transition-colors"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                data-testid="modal-close"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="h-full overflow-y-auto p-8 pt-20">
              {/* Image carousel at the top */}
              <div className="relative mb-8">
                <div className="relative h-80 rounded-xl overflow-hidden bg-black">
                  <motion.img
                    key={currentImageIndex}
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain object-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    data-testid="modal-carousel-image"
                  />
                  
                  {/* Opaque overlay for empty space */}
                  <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                  
                  {/* Navigation arrows */}
                  {project.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        data-testid="carousel-prev"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                        data-testid="carousel-next"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </>
                  )}
                  
                  {/* Dot indicators */}
                  {project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {project.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                          data-testid={`carousel-dot-${index}`}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Project details */}
              <div className="space-y-8">
                {/* Title and category */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-serif text-3xl font-bold text-gray-800 mb-2" data-testid="modal-title">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-gray-600 uppercase tracking-wide" data-testid="modal-category">
                    {project.category}
                  </p>
                </motion.div>

                {/* Main content grid */}
                <div className="grid md:grid-cols-2 gap-12">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-3">The Challenge</h4>
                      <p className="text-gray-700 leading-relaxed" data-testid="modal-problem">
                        {project.problem}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-3">The Solution</h4>
                      <p className="text-gray-700 leading-relaxed" data-testid="modal-solution">
                        {project.solution}
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-3">The Result</h4>
                      <p className="text-gray-700 leading-relaxed" data-testid="modal-result">
                        {project.result}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 text-lg mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2" data-testid="modal-technologies">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm"
                            data-testid={`modal-tech-${index}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
