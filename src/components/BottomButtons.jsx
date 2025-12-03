import { motion } from 'framer-motion';
import './BottomButtons.css';

export default function BottomButtons() {
  return (
    <div className="bottom-buttons">
      {/* Botón Lugar (izquierda) */}
      <motion.a
        href="https://maps.app.goo.gl/Hp6WBQ9sYLqEKBmJ7"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-image btn-lugar"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/lugar.webp" alt="Ver Ubicación" />
      </motion.a>

      {/* Botón Asiste (derecha) */}
      <motion.a
        href="https://api.whatsapp.com/send/?phone=51938101013&text=Hola%21%21+Confirmo+mi+asistencia+al+primer+a%C3%B1o+de+Amira&type=phone_number&app_absent=0"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-image btn-asiste"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/asiste.webp" alt="Confirmar Asistencia" />
      </motion.a>
    </div>
  );
}
