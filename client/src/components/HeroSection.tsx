import { motion } from "framer-motion";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="pt-24 pb-16 px-6" data-testid="hero-section">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-5xl md:text-7xl font-bold text-accent mb-6 leading-tight"
            data-testid="hero-title"
          >
            Makanaka<br />Mukorombindo
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl"
            data-testid="hero-subtitle"
          >
            Portfolio Designer & Strategic Storyteller
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-4 mb-12"
            data-testid="hero-tags"
          >
            {['UX/UI Design', 'Brand Strategy', 'Portfolio Development'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                data-testid={`skill-tag-${index}`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
