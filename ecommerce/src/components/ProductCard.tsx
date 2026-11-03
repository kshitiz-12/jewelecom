import { Link } from 'react-router-dom'
import { formatINR, type Product } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart()

  return (
    <article className="product-card group flex flex-col">
      <Link to={`/product/${product.slug}`} className="relative block aspect-[3/4] overflow-hidden bg-cream-dark">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 bg-forest px-2.5 py-1 text-[10px] tracking-[0.14em] uppercase text-cream">
            {product.badge}
          </span>
        )}
        {!product.inStock && (
          <span className="absolute inset-0 flex items-center justify-center bg-forest/45 text-[11px] tracking-[0.2em] uppercase text-cream">
            Sold Out
          </span>
        )}
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        <p className="text-[10px] tracking-[0.16em] uppercase text-muted">{product.category}</p>
        <Link to={`/product/${product.slug}`} className="mt-1 font-display text-xl text-forest hover:text-gold transition-colors">
          {product.name}
        </Link>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="text-sm font-medium text-forest">{formatINR(product.price)}</p>
          {product.compareAt && (
            <p className="text-xs text-muted line-through">{formatINR(product.compareAt)}</p>
          )}
        </div>
        <button
          type="button"
          disabled={!product.inStock}
          onClick={() => add(product)}
          className="btn-forest mt-4 w-full"
        >
          {product.inStock ? 'Add to Cart' : 'Unavailable'}
        </button>
      </div>
    </article>
  )
}
