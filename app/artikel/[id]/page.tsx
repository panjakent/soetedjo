'use client'

import { useParams } from 'next/navigation'
import { DATA_ARTIKEL } from '@/app/utils/data'
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
      duration: 0.6,
      ease: [0.6, -0.05, 0.1, 0.99],
    },
  },
}

export default function ArtikelPage() {
  const params = useParams()
  const artikel = DATA_ARTIKEL.find((a) => a.id === Number(params.id))

  if (!artikel) {
    return (
      <motion.p variants={item} className="text-center text-gray-500">
        Artikel tidak ditemukan.
      </motion.p>
    )
  }

  return (
    <div className="container">
      <section id="artikel-detail" className="px-4 mt-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="px-2 py-4 text-justify text-[16px]"
        >
          <motion.h1 variants={item} className="font-bold text-[18px]">
            {artikel.title}
          </motion.h1>
          <motion.p variants={item} className="text-gray-700">
            Oleh: {artikel.author}
          </motion.p>

          {artikel.content.split('\n\n').map((paragraph, index) => (
            <motion.p variants={item} key={index} className="mt-2">
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </section>
    </div>
  )
}
