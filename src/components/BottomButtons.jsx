import { motion } from 'framer-motion';
import './BottomButtons.css';

export default function BottomButtons() {
  const handleAsiste = () => {
    alert('Gracias por confirmar tu asistencia ❤️\n\nNos vemos en el cumpleaños de Amira!');
  };

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
      <motion.button
        className="btn-image btn-asiste"
        onClick={handleAsiste}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src="/asiste.webp" alt="Confirmar Asistencia" />
      </motion.button>
    </div>
  );
}
