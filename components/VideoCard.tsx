'use client'

import ReactPlayer from 'react-player'
import { Posts } from '@/contants/posts'

export default function VideoCard({ content, ...props }: Posts) {
  return (
    <div className="card flex flex-col min-h-[190px] overflow-hidden gap-2">
      <div className="p-4">
        {props.title && (
          <h3 className="text-[18px] font-bold">{props.title}</h3>
        )}
        {props.whoShare && (
          <p className="text-sm text-gray-600">Shared by {props.whoShare}</p>
        )}
        {props.author && (
          <p className="text-sm text-gray-600">Oleh {props.author}</p>
        )}
        <div className="mt-2">
          <ReactPlayer url={content} width="100%" />
        </div>
      </div>
    </div>
  )
}
