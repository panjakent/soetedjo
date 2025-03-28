export type Karya = {
  id: number
  title: string
  category: string
}

export type Artikel = Karya & {
  author: string
  content: string
}

export type Buku = Karya & {
  cover: string
  author: string
  content: string
}
