import { useState } from 'react'
import { business } from '../site.js'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Projects' },
  { href: '#quote', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/logo.png" alt="" className="h-11 w-11" />
          <span className="text-xl font-extrabold tracking-tight">{business.name}</span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-8 text-[15px] font-semibold md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-brand">
              {l.label}
            </a>
          ))}
          <a
            href="#quote"
            className="rounded-full bg-brand px-5 py-3 text-white transition-colors hover:bg-brand-dark"
          >
            Free quote
          </a>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-line px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-4 text-lg font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a
            href={business.phoneHref}
            className="mt-5 block rounded-full bg-brand py-4 text-center font-bold text-white"
          >
            Call {business.phoneDisplay}
          </a>
        </nav>
      )}
    </header>
  )
}
