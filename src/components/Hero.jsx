import { motion } from 'motion/react'
import { business, heroPhotos } from '../site.js'
import Photo from './Photo.jsx'

export default function Hero() {
  return (
    <section id="top" className="pt-20 sm:pt-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-6 inline-block rounded-full bg-brand-soft px-4 py-2 text-sm font-bold text-brand-dark">
            Serving {business.serviceArea}
          </p>
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.04] tracking-tighter sm:text-6xl lg:text-7xl">
            The bathroom you've been picturing, <span className="text-brand">done right.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            Bathroom renovations, tile work, new showers, and window and cabinet installation.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#quote"
              className="rounded-full bg-brand px-8 py-4 font-bold text-white transition-colors hover:bg-brand-dark"
            >
              Get a free quote
            </a>
            <a
              href={business.phoneHref}
              className="rounded-full bg-sand px-8 py-4 font-bold transition-colors hover:bg-stone"
            >
              Call {business.phoneDisplay}
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {heroPhotos.map((p, i) => (
            <motion.div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Photo {...p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
