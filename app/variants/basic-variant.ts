import { Variants } from "motion/react";

export const BasicVariants: Variants = {
  hidden: {
    y: 12,
    opacity: 0,
    filter: "blur(4px)",
    willChange: "transform, opacity, filter", 
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0.01px)",
    transitionEnd: {
      filter: "none",
    },
  },
};