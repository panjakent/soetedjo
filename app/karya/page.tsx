'use client'

import { useState } from 'react'
import ArtikelCard from '@/app/components/ArtikelCard'
import BukuCard from '@/app/components/BukuCard'
import { ALL_DATA, CATEGORIES } from '@/app/utils/data'
import { isArtikel, isBuku } from '@/app/utils/types'
import { motion, Variants } from 'motion/react'

const container: Variants = {
  hidden: { opacity: 0 },
  show: (custom: any) => ({
    opacity: 1,
    transition: {
      delayChildren: custom?.delayChildren || 0,
      staggerChildren: 0.1,
    },
  }),
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

export default function Karya() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const toggleFilter = (category: string) => {
    setSelectedFilters((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    )
  }

  const filteredKarya =
    selectedFilters.length > 0
      ? ALL_DATA.filter((karya) => selectedFilters.includes(karya.category))
      : ALL_DATA.sort((a, b) => a.id - b.id).filter(
          (karya) =>
            selectedFilters.length === 0 ||
            selectedFilters.includes(karya.category)
        )

  return (
    <div className="container">
      {/* filter button */}
      <motion.section
        id="filter-buttons"
        className="px-4 grid grid-cols-3 gap-2 mt-2"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {CATEGORIES.map((cat) => {
          const isActive = selectedFilters.includes(cat.key)
          return (
            <motion.button
              key={cat.key}
              variants={item}
              onClick={() => toggleFilter(cat.key)}
              className={`filter-btn ${isActive ? 'active' : ''}`}
            >
              {cat.label}
            </motion.button>
          )
        })}
      </motion.section>

      {/* list karya */}
      <section id="karya-list" className="px-4 mt-2">
        {filteredKarya.length > 0 ? (
          <motion.ul
            className="grid gap-2"
            variants={container}
            initial="hidden"
            animate="show"
            custom={{ delayChildren: 0.6 }}
          >
            {filteredKarya.map((karya) => {
              return (
                <motion.li key={karya.id} variants={item}>
                  {isArtikel(karya) ? (
                    <ArtikelCard {...karya} />
                  ) : isBuku(karya) ? (
                    <BukuCard {...karya} />
                  ) : (
                    <div className="card p-4">{karya.title}</div>
                  )}
                </motion.li>
              )
            })}
          </motion.ul>
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada karya ditemukan.
          </p>
        )}
      </section>
    </div>
  )
}
