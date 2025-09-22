import { motion } from "framer-motion";
import { projectData } from "@/lib/projectData";

interface PortfolioGridProps {
  onProjectClick: (projectId: string) => void;
}

export default function PortfolioGrid({ onProjectClick }: PortfolioGridProps) {
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
    <section id="work" className="py-20 px-6" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-4" data-testid="portfolio-title">
            Who I Help
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl" data-testid="portfolio-description">
            Examples of professionals I create portfolios for and the unique challenges they face
          </p>
        </motion.div>

        <motion.div
          className="bento-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          data-testid="project-grid"
        >
          {Object.values(projectData).map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bento-item project-card bg-card rounded-lg overflow-hidden cursor-pointer"
              onClick={() => onProjectClick(project.id)}
              data-testid={`project-card-${project.id}`}
            >
              <div className="p-6 h-full flex flex-col">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  data-testid={`project-image-${project.id}`}
                />
                <div className="flex-1">
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-accent mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-secondary/50 text-secondary-foreground rounded text-xs"
                        data-testid={`project-tag-${project.id}-${tagIndex}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
