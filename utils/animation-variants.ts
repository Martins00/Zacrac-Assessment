import { MotionVariants } from "@vueuse/motion";

export const slideUpVariants: MotionVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  visibleOnce: {
    opacity: 1,
    y: 0,
    transition: {
      type: "keyframes",
      duration: 500,
      easings: "easeOut",
    },
  },
};
export const scaleInVariants: MotionVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  visibleOnce: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      mass: 15,
      stiffness: 280,
      damping: 25,
      delay: 200,
    },
  },
};