import { motion, useReducedMotion } from 'framer-motion';
import { fadeInScale } from '../styles/animations';
import './Hero.css';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Variantes según preferencia de movimiento
  const logoVariants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.01 } } }
    : fadeInScale;

  return (
    <div className="hero-compact">
      {/* Logo con animación */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={logoVariants}
      >
        <img
          src="/logo_amira.png"
          alt="Logo de Amira"
          className="logo-small"
        />
      </motion.div>
    </div>
  );
}
