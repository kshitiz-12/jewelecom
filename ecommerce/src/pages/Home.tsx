import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 4)

  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-forest md:min-h-[78vh]">
        <img
          src="/images/hero-shop.jpg"
          alt="B.L. Hissaria jewellery"
          className="absolute inset-0 h-full w-full object-cover object-[70%_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/55 to-forest/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-[1440px] flex-col justify-center px-5 py-20 md:min-h-[78vh] md:px-10 lg:px-14">
          <p className="page-eyebrow text-gold">Online Boutique</p>
          <h1 className="mt-4 max-w-xl font-display text-5xl font-medium leading-[1.05] tracking-[-0.02em] text-cream md:text-6xl lg:text-[4.25rem]">
            Jewellery that tells your story.
          </h1>
          <p className="mt-5 max-w-md text-base font-light text-cream/70">
            Shop hallmarked bridal, diamond and everyday pieces — crafted with trust for generations.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/shop" className="btn-gold">
              Shop All →
            </Link>
            <Link
              to="/shop?category=Bridal"
              className="inline-flex items-center gap-2 border border-cream/35 px-6 py-3 text-[0.6875rem] uppercase tracking-[0.14em] text-cream hover:border-gold hover:text-gold transition-colors"
            >
              Bridal Collection
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-16 md:px-10 lg:px-14 lg:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="page-eyebrow">Featured</p>
            <h2 className="page-title mt-2 text-3xl md:text-4xl">Chosen for this season</h2>
          </div>
          <Link to="/shop" className="hidden text-[12px] uppercase tracking-[0.14em] text-forest/60 hover:text-gold sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="bg-cream-dark">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-14 md:grid-cols-3 md:px-10 lg:px-14">
          {[
            { t: '100% Hallmarked', d: 'BIS-hallmarked gold & certified diamonds.' },
            { t: 'Secure Checkout', d: 'Encrypted payments with easy returns.' },
            { t: 'Atelier Care', d: 'Book a store visit for custom sizing.' },
          ].map((item) => (
            <div key={item.t} className="border-l border-gold/40 pl-5">
              <h3 className="font-display text-2xl text-forest">{item.t}</h3>
              <p className="mt-2 text-sm font-light text-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
