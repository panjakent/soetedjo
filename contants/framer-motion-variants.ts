import { Variants } from 'motion/react'

export const container: Variants = {
  hidden: { opacity: 0 },
  show: (custom: { delayChildren?: number }) => ({
    opacity: 1,
    transition: {
      delayChildren: custom?.delayChildren || 0,
      staggerChildren: 0.1,
    },
  }),
}

export const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.1, 0.99],
    },
  },
}
