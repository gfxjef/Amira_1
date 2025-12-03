import { motion } from 'framer-motion';
import { staggerItem, tapScale } from '../styles/animations';
import './GiftCard.css';

export default function GiftCard({ gift }) {
  return (
    <motion.div
      className="gift-card"
      variants={staggerItem}
      whileTap={tapScale}
      style={{
        borderColor: gift.color
      }}
    >
      {/* Imagen del regalo */}
      <div className="gift-image-wrapper">
        <img
          src={gift.imageUrl}
          alt={gift.title}
          className="gift-image"
        />
      </div>

      {/* Título */}
      <h3 className="gift-title">{gift.title}</h3>

      {/* Descripción */}
      <p className="gift-description">{gift.description}</p>
    </motion.div>
  );
}
