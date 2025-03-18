'use client'

import { useState } from 'react'
import ArtikelCard from '@/app/components/ArtikelCard'
import BukuCard from '@/app/components/BukuCard'
import { CATEGORIES, ALL_DATA } from '@/app/utils/data'
import { isArtikel, isBuku } from '@/app/utils/types'

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
      <section id="filter-buttons" className="px-4 grid grid-cols-3 gap-2 mt-2">
        {CATEGORIES.map((cat) => {
          const isActive = selectedFilters.includes(cat.key)
          return (
            <button
              key={cat.key}
              onClick={() => toggleFilter(cat.key)}
              className={`filter-btn ${isActive ? 'active' : ''}`}
            >
              {cat.label}
            </button>
          )
        })}
      </section>

      {/* list karya */}
      <section id="karya-list" className="px-4 mt-2">
        {filteredKarya.length > 0 ? (
          <ul className="grid gap-2">
            {filteredKarya.map((karya) => {
              return isArtikel(karya) ? (
                <ArtikelCard key={karya.id} {...karya} />
              ) : isBuku(karya) ? (
                <BukuCard key={karya.id} {...karya} />
              ) : (
                <li key={karya.id} className="card p-4">
                  {karya.title}
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="text-center text-gray-500">
            Tidak ada karya ditemukan.
          </p>
        )}
      </section>
    </div>
  )
}
