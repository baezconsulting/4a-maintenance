import { motion } from 'motion/react'
import { business, heroPhotos, trustPoints } from '../site.js'
import Photo from './Photo.jsx'

const ease = [0.22, 1, 0.36, 1]
const areas = business.serviceArea.split(',').map((s) => s.trim())
// Local visitors don't need the country code on the button.
const phoneLocal = business.phoneDisplay.replace(/^\+1\s*/, '')

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0 text-brand">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.86-9.86a.75.75 0 0 0-1.22-.88l-3.24 4.5-1.8-1.8a.75.75 0 1 0-1.06 1.06l2.42 2.42a.75.75 0 0 0 1.14-.09l3.76-5.2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
      <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5V5c0 7.18 5.82 13 13 13h1.5a1.5 1.5 0 0 0 1.5-1.5v-2.09a1.5 1.5 0 0 0-1.13-1.45l-2.9-.73a1.5 1.5 0 0 0-1.56.55l-.65.86a.5.5 0 0 1-.6.16 11.04 11.04 0 0 1-5.46-5.46.5.5 0 0 1 .16-.6l.86-.65a1.5 1.5 0 0 0 .55-1.56l-.73-2.9A1.5 1.5 0 0 0 5.09 2H3.5Z" />
    </svg>
  )
}

export default function Hero() {
  const [main, inset] = heroPhotos

  return (
    <section id="top" className="overflow-hidden pt-10 pb-20 sm:pt-14 lg:pt-16 lg:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="mb-6 inline-flex flex-wrap items-center gap-x-2 rounded-full bg-brand-soft px-4 py-2 text-sm font-bold text-brand-dark">
            {areas.map((a, i) => (
              <span key={a} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-brand/40">·</span>}
                {a}
              </span>
            ))}
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.04] tracking-tighter sm:text-6xl xl:text-7xl">
            The bathroom you've been picturing, <span className="text-brand">done right.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Bathroom renovations, tile work, new showers, and window and cabinet installation.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="rounded-full bg-brand px-8 py-4 font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Get a free quote
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 rounded-full bg-sand px-7 py-4 font-bold transition-colors hover:bg-stone"
            >
              <PhoneIcon />
              {phoneLocal}
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-line pt-7 text-[15px] font-semibold">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckIcon />
                {t}
              </li>
            ))}
          </ul>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {/* Soft brand block behind the photos */}
          <div aria-hidden="true" className="absolute -top-5 -right-5 bottom-10 left-10 rounded-[2.5rem] bg-brand-soft" />

          <motion.div
            className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <Photo {...main} />
          </motion.div>

          {inset && (
            <motion.div
              className="absolute -bottom-8 -left-6 hidden aspect-square w-[44%] overflow-hidden rounded-2xl shadow-2xl ring-8 ring-white sm:block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
            >
              <Photo {...inset} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
