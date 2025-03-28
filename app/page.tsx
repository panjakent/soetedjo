'use client'

import Menu from '@/components/Menu'
import { motion } from 'motion/react'
import Image from 'next/image'
import { container, item } from '@/contants/framer-motion-variants'
import { PhotoProvider, PhotoView } from 'react-photo-view'

export default function Home() {
  return (
    <motion.div
      className="container"
      variants={container}
      initial="hidden"
      animate="show"
      custom={{ delayChildren: 0.3 }}
    >
      <motion.div id="image" variants={item} className="px-4 mt-2">
        <div className="w-full h-full rounded-md overflow-hidden">
          <PhotoProvider>
            <PhotoView src="/assets/home-image.jpeg">
              <Image
                src="/assets/home-image.jpeg"
                alt="home image"
                width={200} // Lebar tetap
                height={300} // Tinggi tetap, portrait
                className="w-full h-full object-cover"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
      </motion.div>
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
