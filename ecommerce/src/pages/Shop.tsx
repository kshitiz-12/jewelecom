import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import {
  CATEGORIES,
  METALS,
  SORT_OPTIONS,
  products,
  type Category,
  type Metal,
  type SortValue,
} from '../data/products'

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const categoryParam = (params.get('category') as Category | null) ?? 'All'
  const [category, setCategory] = useState<Category | 'All'>(
    CATEGORIES.includes(categoryParam) ? categoryParam : 'All',
  )
  const [metal, setMetal] = useState<Metal | 'All'>('All')
  const [sort, setSort] = useState<SortValue>('featured')
  const [query, setQuery] = useState('')
  const [maxPrice, setMaxPrice] = useState(500000)
  const [inStockOnly, setInStockOnly] = useState(false)

  const filtered = useMemo(() => {
    let list = [...products]

    if (category !== 'All') {
      list = list.filter((p) => p.category === category)
    }
    if (metal !== 'All') list = list.filter((p) => p.metal === metal)
    if (inStockOnly) list = list.filter((p) => p.inStock)
    list = list.filter((p) => p.price <= maxPrice)

    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.metal.toLowerCase().includes(q),
      )
    }

    switch (sort) {
      case 'price-asc':
        list.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        list.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        list.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'newest':
        list.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        break
      default:
        list.sort((a, b) => Number(b.featured) - Number(a.featured) || b.price - a.price)
    }

    return list
  }, [category, metal, sort, query, maxPrice, inStockOnly])

  const setCategoryAndUrl = (c: Category | 'All') => {
    setCategory(c)
    const next = new URLSearchParams(params)
    if (c === 'All') next.delete('category')
    else next.set('category', c)
    setParams(next, { replace: true })
  }

  return (
    <div className="bg-cream pb-20 pt-8 md:pt-10">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="max-w-2xl">
          <p className="page-eyebrow">Shop</p>
          <h1 className="page-title mt-2 text-4xl md:text-5xl">A Collection for Every Moment</h1>
          <p className="mt-3 text-sm font-light text-muted md:text-base">
            Filter by category, metal and price — or sort to find your piece.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-b border-forest/10 pb-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategoryAndUrl(c)}
              className={`relative pb-1 text-[12px] uppercase tracking-[0.14em] transition-colors ${
                category === c ? 'text-forest' : 'text-muted hover:text-forest'
              }`}
            >
              {c}
              {category === c && <span className="absolute inset-x-0 bottom-0 h-px bg-gold" />}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-[240px_1fr]">
          {/* Filters */}
          <aside className="space-y-7 lg:sticky lg:top-24 lg:self-start">
            <div>
              <label className="text-[11px] tracking-[0.18em] uppercase text-forest/50" htmlFor="search">
                Search
              </label>
              <input
                id="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Name, metal…"
                className="mt-2 w-full border border-forest/20 bg-transparent px-3 py-2.5 text-sm outline-none focus:border-gold"
              />
            </div>

            <div>
              <p className="text-[11px] tracking-[0.18em] uppercase text-forest/50">Metal</p>
              <div className="mt-3 space-y-2">
                {METALS.map((m) => (
                  <label key={m} className="flex cursor-pointer items-center gap-2 text-sm text-forest/80">
                    <input
                      type="radio"
                      name="metal"
                      checked={metal === m}
                      onChange={() => setMetal(m)}
                      className="accent-[var(--color-gold)]"
                    />
                    {m}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[11px] tracking-[0.18em] uppercase text-forest/50" htmlFor="price">
                Max price — ₹{(maxPrice / 1000).toFixed(0)}k
              </label>
              <input
                id="price"
                type="range"
                min={40000}
                max={500000}
                step={10000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-3 w-full accent-[var(--color-gold)]"
              />
            </div>

            <label className="flex cursor-pointer items-center gap-2 text-sm text-forest/80">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="accent-[var(--color-gold)]"
              />
              In stock only
            </label>

            <button
              type="button"
              onClick={() => {
                setCategoryAndUrl('All')
                setMetal('All')
                setSort('featured')
                setQuery('')
                setMaxPrice(500000)
                setInStockOnly(false)
              }}
              className="text-[11px] uppercase tracking-[0.16em] text-gold hover:text-gold-dark"
            >
              Reset filters
            </button>
          </aside>

          {/* Results */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-forest/10 pb-4">
              <p className="text-sm text-muted">
                Showing <span className="text-forest">{filtered.length}</span> pieces
              </p>
              <div className="flex items-center gap-2">
                <label htmlFor="sort" className="text-[11px] uppercase tracking-[0.14em] text-forest/50">
                  Sort
                </label>
                <select
                  id="sort"
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortValue)}
                  className="border border-forest/20 bg-transparent px-3 py-2 text-sm text-forest outline-none focus:border-gold"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {filtered.length === 0 ? (
              <p className="mt-16 text-center text-muted">No pieces match these filters.</p>
            ) : (
              <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
