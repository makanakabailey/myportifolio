import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { projectData, type Project } from "@/lib/projectData";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string | null;
}

export default function ProjectModal({ isOpen, onClose, projectId }: ProjectModalProps) {
  const project: Project | undefined = projectId ? projectData[projectId] : undefined;

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-custom z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          data-testid="project-modal"
        >
          <motion.div
            className="bg-card rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            data-testid="modal-content"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-accent mb-2" data-testid="modal-title">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-muted-foreground uppercase tracking-wide" data-testid="modal-category">
                    {project.category}
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-muted-foreground hover:text-accent transition-colors p-2"
                  data-testid="modal-close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-6" data-testid="modal-body">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  data-testid="modal-image"
                />
                
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h4 className="font-semibold text-accent mb-3">The Challenge</h4>
                    <p className="text-muted-foreground mb-6" data-testid="modal-problem">
                      {project.problem}
                    </p>
                    
                    <h4 className="font-semibold text-accent mb-3">The Solution</h4>
                    <p className="text-muted-foreground" data-testid="modal-solution">
                      {project.solution}
                    </p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="font-semibold text-accent mb-3">The Result</h4>
                    <p className="text-muted-foreground mb-6" data-testid="modal-result">
                      {project.result}
                    </p>
                    
                    <h4 className="font-semibold text-accent mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2" data-testid="modal-technologies">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                          data-testid={`modal-tech-${index}`}
                        >
                          {tech}
                        </span>
                      ))}
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
