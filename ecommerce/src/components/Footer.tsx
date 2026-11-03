import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto bg-forest text-cream">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-3 md:px-10 lg:px-14">
        <div>
          <p className="font-display text-lg tracking-[0.12em] uppercase">B.L. Hissaria</p>
          <p className="mt-3 max-w-xs text-sm font-light text-cream/65">
            Hallmarked jewellery, crafted with trust. Shop bridal, diamond and everyday collections online.
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Shop</p>
          <ul className="space-y-2 text-sm text-cream/75">
            <li><Link to="/shop" className="hover:text-gold">All Jewellery</Link></li>
            <li><Link to="/shop?category=Bridal" className="hover:text-gold">Bridal</Link></li>
            <li><Link to="/shop?category=Diamond" className="hover:text-gold">Diamond</Link></li>
            <li><Link to="/cart" className="hover:text-gold">Your Cart</Link></li>
          </ul>
        </div>
        <div className="md:text-right">
          <p className="text-[11px] tracking-[0.2em] uppercase text-gold mb-3">Visit</p>
          <p className="text-sm font-light text-cream/75">
            123, M.G. Road<br />Bengaluru - 560001
          </p>
          <p className="mt-2 text-sm text-cream/75">+91 80 4123 4567</p>
        </div>
      </div>
      <div className="border-t border-cream/10 px-5 py-4 text-center text-[11px] text-cream/45">
        © {new Date().getFullYear()} B.L. Hissaria Jewellers Pvt. Ltd.
      </div>
    </footer>
  )
}
