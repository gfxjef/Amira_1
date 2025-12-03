import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';
import { swipePower, swipeConfidenceThreshold } from '../styles/animations';
import { gifts } from '../data/gifts';
import GiftCard from './GiftCard';
import './GiftCarousel.css';

export default function GiftCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = gifts.length - 1;
      if (nextIndex >= gifts.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const handleDragEnd = (_e, { offset, velocity }) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      paginate(1);
    } else if (swipe > swipeConfidenceThreshold) {
      paginate(-1);
    }
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-container">
        {/* Título de Sugerencias */}
        <h2 className="carousel-title">Sugerencias de Regalos</h2>

        {/* Flecha izquierda */}
        <button
          className="arrow arrow-left"
          onClick={() => paginate(-1)}
          aria-label="Anterior"
        >
          <IoChevronBack />
        </button>

      {/* Tarjeta con AnimatePresence */}
      <div className="carousel-card-wrapper">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="carousel-card-motion"
          >
            <GiftCard gift={gifts[currentIndex]} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Flecha derecha */}
      <button
        className="arrow arrow-right"
        onClick={() => paginate(1)}
        aria-label="Siguiente"
      >
        <IoChevronForward />
      </button>
      </div>
    </div>
  );
}
