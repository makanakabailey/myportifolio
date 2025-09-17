import { motion } from "framer-motion";

export default function AboutSection() {
  const tools = {
    "Strategy & Discovery": ["FigJam", "Miro", "Notion", "UserVoice"],
    "Design & Prototyping": ["Figma", "Adobe CC", "Sketch", "Principle"],
    "Development & Implementation": ["Webflow", "Framer", "HTML/CSS", "React"]
  };

  return (
    <section id="about" className="py-20 px-6 bg-muted" data-testid="about-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-accent mb-6" data-testid="about-title">
              Strategic Toolkit
            </h2>
            <div className="space-y-6">
              {Object.entries(tools).map(([category, toolList], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`tool-category-${index}`}
                >
                  <h3 className="font-semibold text-accent mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {toolList.map((tool, toolIndex) => (
                      <motion.span
                        key={tool}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        whileHover={{ scale: 1.05 }}
                        data-testid={`tool-${index}-${toolIndex}`}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional designer portrait"
              className="rounded-lg w-full"
              data-testid="about-image"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
