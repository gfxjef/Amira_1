import { motion } from 'framer-motion';
import './MobileOnlyWarning.css';

export default function MobileOnlyWarning() {
  return (
    <motion.div
      className="mobile-warning"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="warning-content">
        <img
          src="/logo_amira.png"
          alt="Logo Amira"
          className="warning-logo"
        />
        <h2 className="warning-title">¡Esta página está optimizada para celulares!</h2>
        <p className="warning-message">
          Para ver las sugerencias de regalos de Amira,<br />
          por favor abre esta página desde tu teléfono móvil.
        </p>
        <div className="warning-icon">📱</div>
      </div>
    </motion.div>
  );
}
