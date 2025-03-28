import { Icon } from '@iconify/react'
import { motion } from 'motion/react'
import Link from 'next/link'
import { LIST_MENU } from '@/contants/list-menu'
import { container, item } from '@/contants/framer-motion-variants'

export default function Menu() {
  return (
    <motion.nav
      id="menu-inside"
      className="px-4 grid grid-cols-2 gap-2 mt-2"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {LIST_MENU.map((menu) => (
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
