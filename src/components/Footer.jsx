import { business } from '../site.js'

export default function Footer() {
  return (
    <footer className="border-t border-line text-sm text-muted">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="" className="h-8 w-8" />
          <span>
            © {new Date().getFullYear()} {business.name} · {business.serviceArea}
          </span>
        </div>
        <span>
          <a href={business.phoneHref} className="hover:text-brand">{business.phoneDisplay}</a> · {business.email} ·{' '}
          {business.license}
        </span>
      </div>
    </footer>
  )
}
