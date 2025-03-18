'use client'

import { useParams } from 'next/navigation'
import { DATA_BUKU } from '@/app/utils/data'
import Image from 'next/image'

export default function BukuDetail() {
  const params = useParams()
  const buku = DATA_BUKU.find((item) => item.id.toString() === params.id)

  if (!buku) {
    return <p className="text-center text-red-500">Buku tidak ditemukan.</p>
  }

  return (
    <div className="container">
      <section id="buku-detail" className="px-4 mt-2">
        <div className="px-2 py-4 text-justify text-[16px]">
          <h1 className="font-bold text-[18px]">{buku.title}</h1>
          <p className="text-gray-700">Oleh: {buku.author}</p>
          <div className="mt-2 mb-2">
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
          </div>
        </div>
      </section>
    </div>
  )
}
