'use client'

import Link from 'next/link'
import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Posts } from '@/contants/posts'

export default function BukuCard({
  id,
  title,
  author,
  content,
  cover,
  ...props
}: Posts) {
  return (
    <div className="card flex gap-0 min-h-[190px]">
      {/* cover */}
      {cover ? (
        <div className="content-center pt-4 pl-4 pb-4 ">
          <div className="w-[110px] h-[150px] bg-gray-200 flex items-center justify-center overflow-hidden">
            <PhotoProvider>
              <PhotoView src={cover}>
                <Image
                  src={cover}
                  alt={title}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </PhotoView>
            </PhotoProvider>
          </div>
        </div>
      ) : null}

      {/* info buku */}
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <h3 className="text-[18px] font-bold">{title}</h3>
          <p className="text-sm text-gray-600">Shared by {props.whoShare}</p>
          <p className="text-sm text-gray-600">Oleh {author}</p>
          <p className="text-sm mt-2 line-clamp-3">{content}</p>
        </div>

        {/* link selalu di bawah */}
        <div className="mt-auto pb-2 pr-5 text-right">
          <Link
            href={`/posts/${id}`}
            className="text-primary text-sm font-bold underline"
          >
            Selengkapnya di sini
          </Link>
        </div>
      </div>
    </div>
  )
}
