import { Artikel, Buku, Karya } from './types'

export const CATEGORIES = [
  { key: 'artikel', label: 'Artikel' },
  { key: 'buku', label: 'Buku' },
  { key: 'gambar', label: 'Gambar' },
  { key: 'lagu', label: 'Lagu' },
  { key: 'podcast', label: 'Podcast' },
]

export const DATA_BUKU: Buku[] = [
  {
    id: 1,
    title: 'Buku Sejarah',
    category: 'buku',
    cover: '/assets/unnamed.jpg',
    author: 'Taufik Rahman',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis a suscipit laoreet, lorem felis ultricies nulla, non facilisis nisl sapien ut nunc. Suspendisse potenti. Quisque fringilla, lorem a hendrerit tincidunt, orci felis cursus libero, nec efficitur est risus eget magna. Pellentesque ac risus eget lacus dictum pharetra eget non felis. Duis vehicula, risus ac congue ultrices, velit sapien auctor urna, eget eleifend nisl nunc sit amet est. Vestibulum at fringilla elit. Duis tempus, dolor eget posuere fermentum, erat leo volutpat arcu, non hendrerit justo arcu eu urna.',
  },
  {
    id: 3,
    title: 'Novel Warisan',
    category: 'buku',
    cover: '/assets/OIP.jpeg',
    author: 'Lina Kartika',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis a suscipit laoreet, lorem felis ultricies nulla, non facilisis nisl sapien ut nunc. Suspendisse potenti. Quisque fringilla, lorem a hendrerit tincidunt, orci felis cursus libero, nec efficitur est risus eget magna. Pellentesque ac risus eget lacus dictum pharetra eget non felis. Duis vehicula, risus ac congue ultrices, velit sapien auctor urna, eget eleifend nisl nunc sit amet est. Vestibulum at fringilla elit. Duis tempus, dolor eget posuere fermentum, erat leo volutpat arcu, non hendrerit justo arcu eu urna.',
  },
]

export const DATA_ARTIKEL: Artikel[] = [
  {
    id: 2,
    title: 'Artikel Perjuangan',
    author: 'Ahmad Budi',

    category: 'artikel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis a suscipit laoreet, lorem felis ultricies nulla, non facilisis nisl sapien ut nunc. Suspendisse potenti. Quisque fringilla, lorem a hendrerit tincidunt, orci felis cursus libero, nec efficitur est risus eget magna. Pellentesque ac risus eget lacus dictum pharetra eget non felis. Duis vehicula, risus ac congue ultrices, velit sapien auctor urna, eget eleifend nisl nunc sit amet est. Vestibulum at fringilla elit. Duis tempus, dolor eget posuere fermentum, erat leo volutpat arcu, non hendrerit justo arcu eu urna.',
  },
  {
    id: 4,
    title: 'Artikel Biografi',
    author: 'Siti Aminah',

    category: 'artikel',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, felis a suscipit laoreet, lorem felis ultricies nulla, non facilisis nisl sapien ut nunc. Suspendisse potenti. Quisque fringilla, lorem a hendrerit tincidunt, orci felis cursus libero, nec efficitur est risus eget magna. Pellentesque ac risus eget lacus dictum pharetra eget non felis. Duis vehicula, risus ac congue ultrices, velit sapien auctor urna, eget eleifend nisl nunc sit amet est. Vestibulum at fringilla elit. Duis tempus, dolor eget posuere fermentum, erat leo volutpat arcu, non hendrerit justo arcu eu urna.',
  },
]

export const DATA_LAIN: Karya[] = [
  { id: 12, title: 'Podcast Keluarga', category: 'podcast' },
  { id: 13, title: 'Lukisan Lama', category: 'gambar' },
  { id: 14, title: 'Lagu Tradisional', category: 'lagu' },
]

export const ALL_DATA: Karya[] = [...DATA_BUKU, ...DATA_ARTIKEL, ...DATA_LAIN]
