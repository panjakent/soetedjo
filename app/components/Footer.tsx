'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const FOOTER_MENU = [
  { icon: 'ic:round-home', text: 'Beranda', href: '/' },
  { icon: 'ic:baseline-menu-book', text: 'Sejarah', href: '/sejarah' },
  { icon: 'ic:round-emoji-events', text: 'Karya', href: '/karya' },
  { icon: 'ic:baseline-image', text: 'Galeri', href: '/galeri' },
  { icon: 'ic:baseline-calendar-month', text: 'Acara', href: '/acara' },
]

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="px-4 fixed bottom-0 inset-x-0 border-t border-borderColor bg-white/80 backdrop-blur-md z-10">
      <nav className="container mx-auto grid grid-cols-5">
        {FOOTER_MENU.map((menu) => {
          const isActive = pathname === menu.href

          return (
            <Link
              key={menu.text}
              href={menu.href}
              className={`footer-menu-item pb-2 ${isActive ? 'active' : ''}`}
            >
              <Icon icon={menu.icon} className="icon" />
              <span className="text">{menu.text}</span>
            </Link>
          )
        })}
      </nav>
    </footer>
  )
}
