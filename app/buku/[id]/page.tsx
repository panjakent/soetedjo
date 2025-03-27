'use client'

import { useParams } from 'next/navigation'
import { DATA_BUKU } from '@/app/utils/data'
import Image from 'next/image'
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

export default function BukuDetail() {
  const params = useParams()
  const buku = DATA_BUKU.find((item) => item.id.toString() === params.id)

  if (!buku) {
    return <p className="text-center text-red-500">Buku tidak ditemukan.</p>
  }

  return (
    <div className="container">
      <section id="buku-detail" className="px-4 mt-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="px-2 py-4 text-justify text-[16px]"
        >
          <motion.h1 variants={item} className="font-bold text-[18px]">
            {buku.title}
          </motion.h1>
          <motion.p variants={item} className="text-gray-700">
            Oleh: {buku.author}
          </motion.p>
          <motion.div variants={item} className="mt-2 mb-2">
            {/* Gambar di kiri, portrait */}
            <div className="float-left w-[150px] h-[200px] overflow-hidden mr-4">
              <Image
                src={buku.cover}
                alt={buku.title}
                width={200} // Lebar tetap
                height={300} // Tinggi tetap, portrait
                className="w-full h-full object-cover"
              />
            </div>
            {/* Teks mengalir di sekitar gambar, termasuk bawah */}
            {buku.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mt-4">
                {paragraph}
              </p>
            ))}
            {/* Clear float */}
            <div className="clear-both"></div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
