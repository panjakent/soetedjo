'use client'

import Image from 'next/image'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import { Posts } from '@/contants/posts'

export default function BukuCard(props: Posts) {
  return (
    <div className="card flex gap-0 min-h-[190px]">
      {/* info buku */}
      <div className="flex-1 flex flex-col p-4">
        <div>
          {props.title && (
            <h3 className="text-[18px] font-bold">{props.title}</h3>
          )}
          {props.whoShare && (
            <p className="text-sm text-gray-600">Shared by {props.whoShare}</p>
          )}
          {props.author && (
            <p className="text-sm text-gray-600">Oleh {props.author}</p>
          )}
        </div>

        {/* cover */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          {Array.isArray(props.content)
            ? props.content.map((url) => {
                return (
                  <div className="aspect-square" key={url}>
                    <PhotoProvider>
                      <PhotoView src={url}>
                        <Image
                          src={url}
                          alt={url}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </div>
  )
}
