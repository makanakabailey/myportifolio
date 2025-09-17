import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      data-testid="loading-screen"
      className="fixed inset-0 bg-background z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        <motion.div
          className="w-12 h-12 border-4 border-secondary border-t-primary rounded-full mb-4 mx-auto"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <div className="space-y-2">
          <div className="skeleton h-4 w-32 rounded mx-auto" />
          <div className="skeleton h-3 w-24 rounded mx-auto" />
        </div>
      </div>
    </motion.div>
  );
}
