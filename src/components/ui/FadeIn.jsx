import { motion } from "framer-motion";
import { EASE } from "../../constants/tokens";

export default function FadeIn({ children, delay = 0, y = 30, style, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay, ease: EASE }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}
