import Link from 'next/link'
import { Artikel } from '@/app/utils/types'

interface ArtikelCardProps extends Artikel {
  cover?: string
}

export default function ArtikelCard({
  id,
  title,
  author,
  content,
}: ArtikelCardProps) {
  const truncatedContent = content.split(' ').slice(0, 20).join(' ') + '...'

  return (
    <div className="card flex gap-0 min-h-[190px]">
      {/* info artikel */}
      <div className="flex-1 flex flex-col">
        <div className="p-4">
          <h3 className="text-[18px] font-bold">{title}</h3>
          <p className="text-sm text-gray-600">Oleh {author}</p>
          <p className="text-sm mt-2">{truncatedContent}</p>
        </div>

        {/* link selalu di bawah */}
        <div className="mt-auto pb-2 pr-5 text-right">
          <Link
            href={`/artikel/${id}`}
            className="text-primary text-sm font-bold underline"
          >
            Selengkapnya di sini
          </Link>
        </div>
      </div>
    </div>
  )
}
