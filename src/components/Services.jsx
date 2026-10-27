import { services } from '../site.js'
import Reveal from './Reveal.jsx'

export default function Services() {
  return (
    <section id="services" className="bg-sand py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl">What we do</h2>
          <a href="#quote" className="font-bold text-brand hover:text-brand-dark">
            Request a quote →
          </a>
        </Reveal>

        <div className="grid gap-0.5 border-2 border-[#d8d4ce] bg-[#d8d4ce] sm:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06} className="h-full">
              <div className="group flex h-full flex-col gap-4 bg-white p-7 transition-colors hover:bg-brand">
                <span className="text-5xl font-extrabold leading-none text-brand transition-colors group-hover:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="text-xl font-extrabold transition-colors group-hover:text-white">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-muted transition-colors group-hover:text-white/90">
                  {s.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
