import type { Metadata } from 'next'
import { Amiri, Averia_Serif_Libre } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WelcomeMessage from '@/components/WelcomeMessage'
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { Suspense } from 'react'

import 'react-photo-view/dist/react-photo-view.css'

const averiaSerifLibre = Averia_Serif_Libre({
  variable: '--font-averia-serif-libre',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const amiri = Amiri({
  variable: '--font-amiri',
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'Keluarga Soetedjo Oetojo',
  description: 'Jejak dan sejarah keluarga Soetedjo Oetojo',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body
        className={`${averiaSerifLibre.variable} ${amiri.variable} antialiased`}
      >
        <NuqsAdapter>
          <Suspense>
            <Header />
            <main className="py-[87px]">
              <WelcomeMessage />
              {children}
            </main>
            <Footer />
          </Suspense>
        </NuqsAdapter>
      </body>
    </html>
  )
}
