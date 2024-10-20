export const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export const gridItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  shake_x: {
    x: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  shake_y: {
    y: [0, -10, 10, -10, 10, 0],
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      delay: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
};

export const transitionVariants = {
  opacity: 1,
  y: 1,
  x: 1,
  transition: {
    delay: 0.1,
    duration: 0.6,
  },
};
