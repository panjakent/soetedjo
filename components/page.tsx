import { useMemo } from 'react'
import { POSTS } from '@/contants/posts'
import { motion } from 'motion/react'
import { container, item } from '@/contants/framer-motion-variants'
import BukuCard from '@/components/BukuCard'
import VideoCard from '@/components/VideoCard'
import ImageCard from '@/components/ImageCard'

export const Post = ({ menu }: { menu: string }) => {
  const filteredMenu = useMemo(() => {
    return POSTS.filter((post) => post.menu.includes(menu))
  }, [menu])

  return (
    <div className="container">
      <section id="karya-list" className="px-4 mt-2">
        {filteredMenu.length > 0 ? (
          <motion.ul
            className="grid gap-2"
            variants={container}
            initial="hidden"
            animate="show"
            custom={{ delayChildren: 0.2 }}
          >
            {filteredMenu.map((menu) => {
              return (
                <motion.li key={menu.id} variants={item}>
                  {menu.type === 'article' ? (
                    <BukuCard {...menu} />
                  ) : menu.type === 'video' ? (
                    <VideoCard {...menu} />
                  ) : menu.type === 'image' ? (
                    <ImageCard {...menu} />
                  ) : (
                    <div className="card p-4">{menu.title}</div>
                  )}
                </motion.li>
              )
            })}
          </motion.ul>
        ) : (
          <motion.p variants={container} className="text-center text-gray-500">
            Tidak ada postingan ditemukan.
          </motion.p>
        )}
      </section>
    </div>
  )
}
