'use client'

import Menu from '@/app/components/Menu'
import { motion, Variants } from 'motion/react'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
      ease: [0.6, -0.05, 0.1, 0.99],
    },
  },
}

export default function Home() {
  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.section id="quote" className="px-4 mt-2" variants={item}>
        <div className="card px-8 py-6 text-center italic text-[16px]">
          <p>
            &quot;Setiap kenangan adalah cerita, setiap foto adalah jejak
            perjalanan, dan setiap kisah yang terukir membentuk bagian dari
            perjalanan kami.&quot;
          </p>
          <p className="mt-4 not-italic">
            Ingin tahu lebih dekat? Pilih menu di bawah dan temukan kisah di
            balik jejak keluarga Soetedjo Oetojo.
          </p>
        </div>
      </motion.section>
      <motion.div variants={item}>
        <Menu />
      </motion.div>
    </motion.div>
  )
}
