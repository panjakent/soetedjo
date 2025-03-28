'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'motion/react'
import { container, item } from '@/contants/framer-motion-variants'
import { POSTS } from '@/contants/posts'
import Link from 'next/link'
import { PhotoProvider, PhotoView } from 'react-photo-view'

export default function BukuDetail() {
  const params = useParams()
  const post = POSTS.find((item) => item.id.toString() === params.id)

  if (!post) {
    return <p className="text-center text-red-500">Buku tidak ditemukan.</p>
  }

  return (
    <div className="container">
      <section id="buku-detail" className="px-4 mt-2">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="px-2 py-4 text-justify text-[16px]"
        >
          <motion.h1 variants={item} className="font-bold text-[18px]">
            {post.title}
          </motion.h1>
          <motion.p variants={item} className="text-gray-700 mt-2">
            Shared by: {post.whoShare}
          </motion.p>
          <motion.p variants={item} className="text-gray-700">
            Oleh: {post.author}
            {post.source ? (
              <>
                {' ( '}
                <Link href={post.source} className="text-primary underline">
                  Sumber
                </Link>
                {' )'}
              </>
            ) : null}
          </motion.p>
          <motion.div variants={item} className="mt-2 mb-2">
            {/* Gambar di kiri, portrait */}
            {post.cover ? (
              <div className="float-left w-[150px] h-[200px] overflow-hidden mr-4">
                <PhotoProvider>
                  <PhotoView src={post.cover}>
                    <Image
                      src={post.cover || ''}
                      alt={post.title}
                      width={200} // Lebar tetap
                      height={300} // Tinggi tetap, portrait
                      className="w-full h-full object-cover"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            ) : null}
            {/* Teks mengalir di sekitar gambar, termasuk bawah */}
            {Array.isArray(post.content)
              ? post.content.map((paragraph, index) => (
                  <p key={index} className="mt-4">
                    {paragraph}
                  </p>
                ))
              : null}
            {/* Clear float */}
            <div className="clear-both"></div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
