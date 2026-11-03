import { Link } from 'react-router-dom'
import { formatINR } from '../data/products'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, subtotal, setQty, remove, clear } = useCart()

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <p className="page-eyebrow">Cart</p>
        <h1 className="page-title mt-3 text-4xl">Your cart is empty</h1>
        <p className="mt-3 text-sm text-muted">Discover bridal, diamond and everyday collections.</p>
        <Link to="/shop" className="btn-gold mt-8 inline-flex">
          Shop Jewellery →
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-cream pb-20 pt-10">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="page-eyebrow">Cart</p>
            <h1 className="page-title mt-2 text-4xl md:text-5xl">Your selection</h1>
          </div>
          <button type="button" onClick={clear} className="text-[11px] uppercase tracking-[0.14em] text-muted hover:text-forest">
            Clear cart
          </button>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <ul className="divide-y divide-forest/10 border-y border-forest/10">
            {items.map(({ product, qty }) => (
              <li key={product.id} className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center">
                <Link to={`/product/${product.slug}`} className="h-28 w-24 shrink-0 overflow-hidden bg-cream-dark sm:h-32 sm:w-28">
                  <img src={product.image} alt="" className="h-full w-full object-cover" />
                </Link>
                <div className="flex-1">
                  <Link to={`/product/${product.slug}`} className="font-display text-xl text-forest hover:text-gold">
                    {product.name}
                  </Link>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                    {product.metal} · {product.purity}
                  </p>
                  <p className="mt-2 text-sm font-medium text-forest">{formatINR(product.price)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-forest/20">
                    <button
                      type="button"
                      className="px-3 py-2 text-forest"
                      onClick={() => setQty(product.id, qty - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm">{qty}</span>
                    <button
                      type="button"
                      className="px-3 py-2 text-forest"
                      onClick={() => setQty(product.id, qty + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <p className="min-w-24 text-right text-sm font-medium text-forest">
                    {formatINR(product.price * qty)}
                  </p>
                  <button
                    type="button"
                    onClick={() => remove(product.id)}
                    className="text-[11px] uppercase tracking-[0.12em] text-muted hover:text-forest"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit border border-forest/10 bg-[#efe8da] p-6 lg:sticky lg:top-24">
            <h2 className="font-display text-2xl text-forest">Order summary</h2>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between text-muted">
                <span>Subtotal</span>
                <span className="text-forest">{formatINR(subtotal)}</span>
              </div>
              <div className="flex justify-between text-muted">
                <span>Shipping</span>
                <span className="text-forest">Calculated at checkout</span>
              </div>
            </div>
            <div className="mt-5 flex justify-between border-t border-forest/15 pt-4 text-base font-medium text-forest">
              <span>Total</span>
              <span>{formatINR(subtotal)}</span>
            </div>
            <button type="button" className="btn-forest mt-6 w-full">
              Checkout →
            </button>
            <Link to="/shop" className="mt-4 block text-center text-[11px] uppercase tracking-[0.14em] text-forest/60 hover:text-gold">
              Continue shopping
            </Link>
          </aside>
        </div>
      </div>
    </div>
  )
}
