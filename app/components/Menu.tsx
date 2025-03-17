import { Icon } from '@iconify/react'
import Link from 'next/link'

const LIST_MENU = [
  { icon: 'ic:baseline-menu-book', text: 'Sejarah', href: '/sejarah' },
  {
    icon: 'ic:round-emoji-events',
    text: 'Karya',
    href: '/karya',
  },
  { icon: 'ic:baseline-image', text: 'Galeri', href: '/galeri' },
  { icon: 'ic:baseline-calendar-month', text: 'Acara', href: '/acara' },
]

export default function Menu() {
  return (
    <nav id="menu-inside" className="grid grid-cols-2 gap-3 mt-3 px-3">
      {LIST_MENU.map((menu) => (
        <Link
          key={menu.text}
          href={menu.href}
          className="card py-3 shadow-[inset_0_0_10px_rgba(0,0,0,0.20)] transition duration-150 ease-in-out hover:shadow-[inset_0_0_18px_rgba(0,0,0,0.20)] flex gap-3 justify-center items-center"
        >
          <Icon icon={menu.icon} className="text-primary text-[28px]" />
          <span className="text-[18px] font-bold">{menu.text}</span>
        </Link>
      ))}
    </nav>
  )
}
