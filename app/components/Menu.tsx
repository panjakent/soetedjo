import { Icon } from '@iconify/react'
import { motion, Variants } from 'motion/react'
import Link from 'next/link'

const MENU_ITEMS = [
  { icon: 'ic:baseline-menu-book', text: 'Sejarah', href: '/sejarah' },
  { icon: 'ic:round-emoji-events', text: 'Karya', href: '/karya' },
  { icon: 'ic:baseline-image', text: 'Galeri', href: '/galeri' },
  { icon: 'ic:baseline-calendar-month', text: 'Acara', href: '/acara' },
]

export default function Menu() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.1, 0.99],
      },
    },
  }

  return (
    <motion.nav
      id="menu-inside"
      className="px-4 grid grid-cols-2 gap-2 mt-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {MENU_ITEMS.map((menu) => (
        <motion.span key={menu.text} variants={item}>
          <Link href={menu.href} className=" menu-card">
            <Icon icon={menu.icon} className="text-primary text-[28px]" />
            <span className="text-[18px] font-bold">{menu.text}</span>
          </Link>
        </motion.span>
      ))}
    </motion.nav>
  )
}
