'use client'

import { Icon } from '@iconify/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation' // ✅ Import usePathname

const LIST_MENU_FOOTER = [
  { icon: 'ic:round-home', text: 'Beranda', href: '/' },
  { icon: 'ic:baseline-menu-book', text: 'Sejarah', href: '/sejarah' },
  { icon: 'ic:round-emoji-events', text: 'karya', href: '/karya' },
  { icon: 'ic:baseline-image', text: 'Galeri', href: '/galeri' },
  { icon: 'ic:baseline-calendar-month', text: 'Acara', href: '/acara' },
]

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="fixed bottom-0 inset-x-0 max-w-screen-lg mx-auto px-0">
      <nav className="px-4 grid grid-cols-5 bg-primary">
        {LIST_MENU_FOOTER.map((menu) => {
          const isActive = pathname === menu.href

          return (
            <Link
              key={menu.text}
              href={menu.href}
              className={`h-[90px] flex flex-col justify-center items-center transition duration-150 ease-in-out ${
                isActive ? 'bg-background' : 'hover:bg-background group'
              }`}
            >
              <Icon
                icon={menu.icon}
                className={`text-[30px] transition duration-150 ease-in-out ${
                  isActive
                    ? 'text-primary'
                    : 'text-background group-hover:text-primary'
                }`}
              />
              <span
                className={`mt-1 text-[14px] pb-4 transition duration-150 ease-in-out ${
                  isActive ? '' : 'text-background group-hover:text-foreground'
                }`}
              >
                {menu.text}
              </span>
            </Link>
          )
        })}
      </nav>
    </footer>
  )
}
