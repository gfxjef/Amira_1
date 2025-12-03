/**
 * Framer Motion Animation Variants
 * Optimizado para móviles - Solo propiedades GPU-accelerated
 * (transform: x, y, scale, rotate y opacity)
 */

// Fade In (simple)
export const fadeIn = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Fade In con Scale (para logo)
export const fadeInScale = {
  hidden: {
    opacity: 0,
    scale: 0.8
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

// Slide Up (desde abajo)
export const slideUp = {
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Slide Up con delay personalizable
export const slideUpDelay = (delay = 0) => ({
  hidden: {
    opacity: 0,
    y: 40
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut"
    }
  }
});

// Stagger Container (para grids de tarjetas)
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Stagger Item (para items individuales)
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Float animation (para elementos decorativos como mariposas)
export const float = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Float con rotación suave
export const floatRotate = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Pulse para botones
export const pulse = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

// Hover para botones (solo desktop)
export const hoverButton = {
  rest: {
    scale: 1,
    filter: "brightness(1)"
  },
  hover: {
    scale: 1.05,
    filter: "brightness(1.1)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Tap para elementos táctiles (móvil)
export const tapScale = {
  scale: 0.95,
  transition: {
    duration: 0.1,
    ease: "easeOut"
  }
};

// Card hover (solo desktop)
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.12)"
  },
  hover: {
    scale: 1.03,
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Parallax suave (para elementos decorativos en desktop)
export const parallaxScroll = (offsetY = 50) => ({
  initial: { y: 0 },
  animate: { y: offsetY }
});

// Viewport animation config (para useInView)
export const viewportConfig = {
  once: true, // Solo animar una vez
  margin: "-100px", // Trigger antes de entrar al viewport
  amount: 0.3 // 30% del elemento visible
};

// Configuración para useReducedMotion
export const reducedMotionConfig = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.01 }
  }
};

// ===========================
// CARRUSEL ANIMATIONS
// ===========================

// Slide para carrusel (dirección dinámica)
export const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  })
};

// Swipe helpers para carrusel
export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};
