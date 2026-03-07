import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  elevated?: boolean;
}

const BentoCard = ({ children, className = "", delay = 0, elevated = false }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ 
        y: -4, 
        boxShadow: "0 12px 30px -8px hsl(var(--primary) / 0.12)",
        transition: { duration: 0.25, ease: "easeOut" }
      }}
      className={`${elevated ? "bento-card-elevated" : "bento-card"} h-full cursor-pointer ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default BentoCard;
