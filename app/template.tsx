'use client'

import { AnimatePresence } from 'motion/react'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence key={pathname} mode="wait">
      {children}
    </AnimatePresence>
  )
}
