'use client'

import { usePathname } from 'next/navigation'

export default function WelcomeMessage() {
  const pathname = usePathname()

  const pageNames: Record<string, string> = {
    '/': 'Beranda',
    '/sejarah': 'Sejarah',
    '/karya': 'karya',
    '/galeri': 'Galeri',
    '/acara': 'Acara',
  }

  const pageName = pageNames[pathname] || 'Beranda'

  return (
    <section
      id="welkam"
      className="px-3 h-full max-w-lg mx-auto font-AveriaSerifLibre"
    >
      <div className="card px-5 py-4 text-center italic text-2xl font-bold">
        <p>
          Selamat datang di{' '}
          <span className="text-primary not-italic underline decoration-1 underline-offset-4">
            {pageName}
          </span>{' '}
          <br />
          <span>Keluarga Soetedjo Oetojo</span>!
        </p>
      </div>
    </section>
  )
}
