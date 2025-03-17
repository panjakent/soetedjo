'use client'

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
    <section className="container px-4">
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
    </section>
  )
}
