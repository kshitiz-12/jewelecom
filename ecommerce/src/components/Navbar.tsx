import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/shop?category=Bridal', label: 'Bridal' },
  { to: '/shop?category=Diamond', label: 'Diamond' },
]

export default function Navbar() {
  const { count } = useCart()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-forest/8 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-4 px-5 md:h-[72px] md:px-10 lg:px-14">
        <Link to="/" className="inline-flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src="/images/logo-mark.png" alt="" className="h-9 w-auto" aria-hidden />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-[0.9rem] font-medium tracking-[0.12em] uppercase text-forest">
              B.L. Hissaria
            </span>
            <span className="mt-1 text-[0.55rem] tracking-[0.2em] uppercase text-gold-dark">
              Online Boutique
            </span>
          </span>
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-[12px] uppercase tracking-[0.14em] font-light transition-colors ${
                  isActive ? 'text-forest' : 'text-forest/65 hover:text-forest'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 px-3 py-2 text-forest/70 hover:text-forest"
            aria-label={`Cart, ${count} items`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6h15l-1.5 9h-12L6 6zm0 0L5 3H2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-medium text-forest">
                {count}
              </span>
            )}
          </Link>

          <button
            type="button"
            className="p-2 text-forest lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-forest/10 bg-cream px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="font-display text-xl text-forest"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/cart" className="font-display text-xl text-forest" onClick={() => setOpen(false)}>
              Cart ({count})
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
