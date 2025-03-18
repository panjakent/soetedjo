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

export const isArtikel = (karya: Karya): karya is Artikel =>
  karya.category === 'artikel' && 'author' in karya && 'content' in karya

export const isBuku = (karya: Karya): karya is Buku =>
  karya.category === 'buku' && 'author' in karya && 'content' in karya
