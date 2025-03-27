'use client'

import React from 'react'
import { motion, Variants } from 'motion/react'

const item: Variants = {
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

export default function Page() {
  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className="flex justify-center items-center h-[300px]"
    >
      not implement yet!
    </motion.div>
  )
}
