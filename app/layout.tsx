import type { Metadata } from 'next'
import { Amiri, Averia_Serif_Libre } from 'next/font/google'
import './globals.css'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'
import WelcomeMessage from '@/app/components/WelcomeMessage'

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
        <Header />
        <main className="pt-[87px] pb-[80px]">
          <WelcomeMessage />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
