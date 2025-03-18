'use client'

import { useParams } from 'next/navigation'
import { DATA_ARTIKEL } from '@/app/utils/data'

export default function ArtikelPage() {
  const params = useParams()
  const artikel = DATA_ARTIKEL.find((a) => a.id === Number(params.id))

  if (!artikel) {
    return <p className="text-center text-gray-500">Artikel tidak ditemukan.</p>
  }

  return (
    <div className="container">
      <section id="artikel-detail" className="px-4 mt-2">
        <div className="px-2 py-4 text-justify text-[16px]">
          <h1 className="font-bold text-[18px]">{artikel.title}</h1>
          <p className="text-gray-700">Oleh: {artikel.author}</p>

          {artikel.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mt-2">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </div>
  )
}
