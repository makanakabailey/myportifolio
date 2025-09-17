import { motion } from "framer-motion";
import { 
  SiBehance, 
  SiDribbble, 
  SiFigma, 
  SiAdobe, 
  SiMedium 
} from "react-icons/si";

export default function FeaturedPlatforms() {
  const platforms = [
    { icon: SiBehance, name: "Behance" },
    { icon: SiDribbble, name: "Dribbble" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiAdobe, name: "Adobe" },
    { icon: SiMedium, name: "Medium" }
  ];

  return (
    <section className="py-8 px-6 bg-muted" data-testid="featured-platforms">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-center text-muted-foreground mb-8 font-mono text-sm uppercase tracking-wide">
            Featured On
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.1,
                  color: "hsl(var(--primary))"
                }}
                transition={{ 
                  delay: index * 0.1,
                  duration: 0.3 
                }}
                viewport={{ once: true }}
                className="cursor-pointer transition-colors"
                data-testid={`platform-${platform.name.toLowerCase()}`}
              >
                <platform.icon className="text-3xl" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
