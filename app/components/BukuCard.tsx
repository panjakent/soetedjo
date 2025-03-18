import Link from 'next/link'
import { Buku } from '@/app/utils/types'
import Image from 'next/image'

export default function BukuCard({ id, title, author, content, cover }: Buku) {
  const truncatedContent = content.split(' ').slice(0, 11).join(' ') + '...'

  return (
    <div className="card flex gap-0 min-h-[190px]">
      {/* cover */}
      <div className="content-center pt-4 pl-4 pb-4 ">
        <div className="w-[110px] h-[150px] bg-gray-200 flex items-center justify-center overflow-hidden">
          <Image
            src={cover}
            alt={title}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* info buku */}
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <h3 className="text-[18px] font-bold">{title}</h3>
          <p className="text-sm text-gray-600">Oleh {author}</p>
          <p className="text-sm mt-2">{truncatedContent}</p>
        </div>

        {/* link selalu di bawah */}
        <div className="mt-auto pb-2 pr-5 text-right">
          <Link
            href={`/buku/${id}`}
            className="text-primary text-sm font-bold underline"
          >
            Selengkapnya di sini
          </Link>
        </div>
      </div>
    </div>
  )
}
