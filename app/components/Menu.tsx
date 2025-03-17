import { Icon } from '@iconify/react'
import Link from 'next/link'

const MENU_ITEMS = [
  { icon: 'ic:baseline-menu-book', text: 'Sejarah', href: '/sejarah' },
  { icon: 'ic:round-emoji-events', text: 'Karya', href: '/karya' },
  { icon: 'ic:baseline-image', text: 'Galeri', href: '/galeri' },
  { icon: 'ic:baseline-calendar-month', text: 'Acara', href: '/acara' },
]

export default function Menu() {
  return (
    <nav id="menu-inside" className="px-4 grid grid-cols-2 gap-2 mt-2">
      {MENU_ITEMS.map((menu) => (
        <Link key={menu.text} href={menu.href} className=" menu-card">
          <Icon icon={menu.icon} className="text-primary text-[28px]" />
          <span className="text-[18px] font-bold">{menu.text}</span>
        </Link>
      ))}
    </nav>
  )
}
