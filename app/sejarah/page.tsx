'use client'

import { useEffect } from 'react'
import { motion, useAnimate, useInView, Variants } from 'motion/react'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
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

export default function Sejarah() {
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 })
    }
  }, [isInView])

  return (
    <div className="container">
      <section id="quote" className="px-4 mt-2">
        <motion.div
          className="px-2 py-4 text-justify text-[16px]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="font-bold text-[18px]" variants={item}>
            1. Sejarah
          </motion.h1>
          <motion.p className="mt-2" variants={item}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </motion.p>
          <motion.p className="mt-2" variants={item}>
            Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id
            tincidunt sapien risus a quam. Maecenas fermentum consequat mi.
            Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem,
            aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus,
            elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada
            diam lacus eget erat. Cras mollis scelerisque nunc. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident.
          </motion.p>
          <motion.p className="mt-2" variants={item}>
            Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam
            varius, turpis et commodo pharetra, est eros bibendum elit, nec
            luctus magna felis sollicitudin mauris. Integer in mauris eu nibh
            euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec
            lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu
            tempor congue, eros est euismod turpis, id tincidunt sapien risus a
            quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque
            malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget,
            consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet,
            felis nisl adipiscing sapien, sed malesuada diam lacus eget erat.
            Cras mollis scelerisque nunc. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Nullam arcu. Aliquam consequat. Curabitur augue
            lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna
            nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse
            platea dictumst.
          </motion.p>
        </motion.div>
      </section>
    </div>
  )
}
