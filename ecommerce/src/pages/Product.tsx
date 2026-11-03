import { Link, useParams } from 'react-router-dom'
import { formatINR, getProductBySlug, products } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export default function Product() {
  const { slug } = useParams()
  const product = slug ? getProductBySlug(slug) : undefined
  const { add } = useCart()

  if (!product) {
    return (
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <h1 className="page-title text-3xl">Piece not found</h1>
        <Link to="/shop" className="btn-gold mt-8 inline-flex">
          Back to Shop →
        </Link>
      </div>
    )
  }

  const related = products
    .filter((p) => p.id !== product.id && (p.category === product.category || p.metal === product.metal))
    .slice(0, 4)

  return (
    <div className="bg-cream pb-20">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-10 md:px-10 lg:grid-cols-2 lg:gap-14 lg:px-14 lg:py-14">
        <div className="relative aspect-[3/4] overflow-hidden bg-cream-dark">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          {product.badge && (
            <span className="absolute left-4 top-4 bg-forest px-3 py-1 text-[10px] tracking-[0.14em] uppercase text-cream">
              {product.badge}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center">
          <p className="page-eyebrow">{product.category}</p>
          <h1 className="page-title mt-3 text-4xl md:text-5xl">{product.name}</h1>
          <div className="mt-4 flex items-baseline gap-3">
            <p className="text-xl font-medium text-forest">{formatINR(product.price)}</p>
            {product.compareAt && (
              <p className="text-sm text-muted line-through">{formatINR(product.compareAt)}</p>
            )}
          </div>
          <p className="mt-5 max-w-md text-[0.95rem] font-light leading-relaxed text-muted">
            {product.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-forest/10 py-6 text-sm">
            <div>
              <dt className="text-[10px] tracking-[0.16em] uppercase text-muted">Metal</dt>
              <dd className="mt-1 text-forest">{product.metal}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.16em] uppercase text-muted">Purity</dt>
              <dd className="mt-1 text-forest">{product.purity}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.16em] uppercase text-muted">Weight</dt>
              <dd className="mt-1 text-forest">{product.weight}</dd>
            </div>
            <div>
              <dt className="text-[10px] tracking-[0.16em] uppercase text-muted">Availability</dt>
              <dd className="mt-1 text-forest">{product.inStock ? 'In stock' : 'Sold out'}</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              disabled={!product.inStock}
              onClick={() => add(product)}
              className="btn-forest"
            >
              {product.inStock ? 'Add to Cart →' : 'Sold Out'}
            </button>
            <Link to="/shop" className="inline-flex items-center gap-2 px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-forest/60 hover:text-gold">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
          <h2 className="page-title text-3xl">You may also like</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
