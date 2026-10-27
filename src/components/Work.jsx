import { projectPhotos } from '../site.js'
import Photo from './Photo.jsx'
import Reveal from './Reveal.jsx'

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mb-10 text-4xl font-extrabold tracking-tight sm:text-5xl">Recent work</h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-3">
          {projectPhotos.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <Photo {...p} className="transition-transform duration-500 hover:scale-105" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
