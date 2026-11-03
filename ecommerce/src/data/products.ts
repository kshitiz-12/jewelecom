export type Category =
  | 'Bridal'
  | 'Diamond'
  | 'Traditional'
  | 'Everyday'
  | 'Earrings'
  | 'Rings'
  | 'Bangles'
  | 'Necklaces'

export type Metal = 'Yellow Gold' | 'White Gold' | 'Rose Gold' | 'Platinum'

export type Product = {
  id: string
  slug: string
  name: string
  description: string
  price: number
  compareAt?: number
  category: Category
  metal: Metal
  purity: string
  weight: string
  image: string
  badge?: string
  featured?: boolean
  createdAt: string
  inStock: boolean
}

export const CATEGORIES: Array<Category | 'All'> = [
  'All',
  'Bridal',
  'Diamond',
  'Traditional',
  'Everyday',
  'Earrings',
  'Rings',
  'Bangles',
  'Necklaces',
]

export const METALS: Array<Metal | 'All'> = [
  'All',
  'Yellow Gold',
  'White Gold',
  'Rose Gold',
  'Platinum',
]

export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A–Z' },
] as const

export type SortValue = (typeof SORT_OPTIONS)[number]['value']

export const products: Product[] = [
  {
    id: 'p1',
    slug: 'emerald-bridal-necklace',
    name: 'Emerald Bridal Necklace',
    description:
      'A statement bridal necklace in 22K yellow gold, set with emeralds and rubies. Crafted for your most precious ceremony.',
    price: 285000,
    compareAt: 312000,
    category: 'Bridal',
    metal: 'Yellow Gold',
    purity: '22K',
    weight: '68.4 g',
    image: '/images/product-bridal-necklace.jpg',
    badge: 'Bestseller',
    featured: true,
    createdAt: '2026-09-12',
    inStock: true,
  },
  {
    id: 'p2',
    slug: 'cascade-diamond-necklace',
    name: 'Cascade Diamond Necklace',
    description:
      'Brilliant-cut diamonds cascade on a platinum setting — brilliance for every occasion.',
    price: 425000,
    category: 'Diamond',
    metal: 'Platinum',
    purity: 'PT950',
    weight: '24.2 g',
    image: '/images/product-diamond-necklace.jpg',
    badge: 'New',
    featured: true,
    createdAt: '2026-10-20',
    inStock: true,
  },
  {
    id: 'p3',
    slug: 'heritage-gold-jhumkas',
    name: 'Heritage Gold Jhumkas',
    description:
      'Traditional bell-shaped jhumkas with intricate filigree and pearl drops. Rooted in heritage.',
    price: 68400,
    category: 'Earrings',
    metal: 'Yellow Gold',
    purity: '22K',
    weight: '18.6 g',
    image: '/images/product-jhumkas.jpg',
    featured: true,
    createdAt: '2026-08-02',
    inStock: true,
  },
  {
    id: 'p4',
    slug: 'everyday-gold-bangles',
    name: 'Everyday Gold Bangles',
    description:
      'A refined stack of polished yellow gold bangles — subtle, stylish, timeless for daily wear.',
    price: 92400,
    category: 'Bangles',
    metal: 'Yellow Gold',
    purity: '22K',
    weight: '32.1 g',
    image: '/images/product-bangles.jpg',
    featured: true,
    createdAt: '2026-07-18',
    inStock: true,
  },
  {
    id: 'p5',
    slug: 'solitaire-promise-ring',
    name: 'Solitaire Promise Ring',
    description:
      'A classic solitaire in yellow gold with a brilliant diamond centre — made for forever promises.',
    price: 156000,
    compareAt: 168000,
    category: 'Rings',
    metal: 'Yellow Gold',
    purity: '18K',
    weight: '4.8 g',
    image: '/images/product-solitaire-ring.jpg',
    badge: 'Sale',
    featured: true,
    createdAt: '2026-10-01',
    inStock: true,
  },
  {
    id: 'p6',
    slug: 'engraved-gold-kada',
    name: 'Engraved Gold Kada',
    description:
      'A substantial men’s kada with hand-engraved motifs in hallmarked yellow gold.',
    price: 118500,
    category: 'Bangles',
    metal: 'Yellow Gold',
    purity: '22K',
    weight: '41.3 g',
    image: '/images/product-gold-kada.jpg',
    createdAt: '2026-06-22',
    inStock: true,
  },
  {
    id: 'p7',
    slug: 'rose-gold-drop-earrings',
    name: 'Rose Gold Drop Earrings',
    description:
      'Delicate rose gold drops with diamond accents — soft radiance for evening and everyday.',
    price: 78900,
    category: 'Earrings',
    metal: 'Rose Gold',
    purity: '18K',
    weight: '7.2 g',
    image: '/images/product-rose-earrings.jpg',
    badge: 'New',
    createdAt: '2026-10-28',
    inStock: true,
  },
  {
    id: 'p8',
    slug: 'emerald-teardrop-pendant',
    name: 'Emerald Teardrop Pendant',
    description:
      'A fine gold chain with a teardrop emerald pendant — quiet luxury for everyday elegance.',
    price: 54200,
    category: 'Everyday',
    metal: 'Yellow Gold',
    purity: '18K',
    weight: '5.4 g',
    image: '/images/product-emerald-pendant.jpg',
    createdAt: '2026-05-14',
    inStock: true,
  },
  {
    id: 'p9',
    slug: 'classic-diamond-studs',
    name: 'Classic Diamond Studs',
    description:
      'Timeless brilliant-cut diamond studs in white gold — essential brilliance.',
    price: 132000,
    category: 'Diamond',
    metal: 'White Gold',
    purity: '18K',
    weight: '3.1 g',
    image: '/images/product-diamond-studs.jpg',
    featured: true,
    createdAt: '2026-09-30',
    inStock: true,
  },
  {
    id: 'p10',
    slug: 'diamond-mangalsutra',
    name: 'Diamond Mangalsutra',
    description:
      'A contemporary mangalsutra with black beads and a diamond pendant — tradition, reimagined.',
    price: 98500,
    category: 'Necklaces',
    metal: 'Yellow Gold',
    purity: '18K',
    weight: '12.8 g',
    image: '/images/product-mangalsutra.jpg',
    createdAt: '2026-08-19',
    inStock: true,
  },
  {
    id: 'p11',
    slug: 'temple-gold-choker',
    name: 'Temple Gold Choker',
    description:
      'An ornate temple-inspired choker with goddess motifs in rich yellow gold.',
    price: 246000,
    category: 'Traditional',
    metal: 'Yellow Gold',
    purity: '22K',
    weight: '52.7 g',
    image: '/images/product-temple-choker.jpg',
    badge: 'Limited',
    createdAt: '2026-04-08',
    inStock: true,
  },
  {
    id: 'p12',
    slug: 'ruby-cocktail-ring',
    name: 'Ruby Cocktail Ring',
    description:
      'A bold cocktail ring featuring an oval ruby haloed by diamonds in yellow gold.',
    price: 178500,
    category: 'Rings',
    metal: 'Yellow Gold',
    purity: '18K',
    weight: '9.6 g',
    image: '/images/product-ruby-ring.jpg',
    createdAt: '2026-09-05',
    inStock: false,
  },
]

export function formatINR(amount: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
