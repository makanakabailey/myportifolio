import { motion } from "framer-motion";
import { 
  SiLinkedin, 
  SiBehance, 
  SiDribbble,
  SiGmail
} from "react-icons/si";

export default function ContactSection() {
  const socialLinks = [
    { icon: SiLinkedin, name: "LinkedIn", href: "#" },
    { icon: SiBehance, name: "Behance", href: "#" },
    { icon: SiDribbble, name: "Dribbble", href: "#" },
    { icon: SiGmail, name: "Email", href: "mailto:hello@makanakamukorombindo.com" }
  ];

  return (
    <section id="contact" className="py-20 px-6" data-testid="contact-section">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-accent mb-6" data-testid="contact-title">
            Let's Create Together
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto" data-testid="contact-description">
            Ready to transform your professional presence with a portfolio that tells your story?
          </p>
          
          <motion.button
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="contact-button"
          >
            Start Your Project
          </motion.button>
          
          <motion.div
            className="flex justify-center space-x-6 mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            data-testid="social-links"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`social-${social.name.toLowerCase()}`}
              >
                <social.icon className="text-xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
