'use client'

import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'

const pageNames: Record<string, string> = {
  '/': 'Beranda',
  '/sejarah': 'Sejarah',
  '/karya': 'Karya',
  '/galeri': 'Galeri',
  '/acara': 'Acara',
}

export default function WelcomeMessage() {
  const pathname = usePathname()
  const pageName = pageNames[pathname] || 'Beranda'

  return (
    <motion.section
      key={pathname}
      className="container px-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: [0.6, -0.05, 0.1, 0.99],
      }}
    >
      <div className="card py-3 text-center">
        <p className="text-[20px] font-bold">
          Selamat datang di{' '}
          <span className="text-primary underline decoration-1 underline-offset-[3px]">
            {pageName}
          </span>{' '}
          <br />
          <span className="italic">Keluarga Soetedjo Oetojo</span>!
        </p>
      </div>
    </motion.section>
  )
}
