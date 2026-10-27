import { useState } from 'react'
import { business, services, formspreeId } from '../site.js'
import Reveal from './Reveal.jsx'

const inputClass =
  'rounded-lg border border-[#bdb8b1] px-4 py-3 font-normal outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20'

export default function Quote() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!formspreeId) {
      const body = [...data.entries()].map(([k, v]) => `${k}: ${v}`).join('\n')
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent('Quote request')}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="quote" className="bg-brand py-24 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-14 px-6">
        <Reveal className="min-w-0 flex-[1_1_380px]">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">Start your project</h2>
          <p className="mt-5 text-lg leading-relaxed text-white/90">
            Tell us what you need and we'll get back to you with a quote.
          </p>
          <a href={business.phoneHref} className="mt-8 block text-3xl font-extrabold hover:underline">
            {business.phoneDisplay}
          </a>
          <p className="mt-2 text-white/90">{business.email}</p>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 flex-[1_1_460px]">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 rounded-2xl bg-white p-8 text-ink shadow-2xl sm:grid-cols-2"
          >
            <label className="flex flex-col gap-1.5 text-sm font-bold">
              Name
              <input name="name" type="text" required autoComplete="name" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-bold">
              Phone
              <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-bold sm:col-span-2">
              Email
              <input name="email" type="email" autoComplete="email" className={inputClass} />
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-bold sm:col-span-2">
              Service
              <select name="service" className={`${inputClass} bg-white`}>
                {services.map((s) => (
                  <option key={s.title}>{s.title}</option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-1.5 text-sm font-bold sm:col-span-2">
              Project details
              <textarea name="details" rows={4} className={`${inputClass} resize-y`} />
            </label>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="rounded-lg bg-ink py-4 font-bold text-white transition-colors hover:bg-black disabled:opacity-60 sm:col-span-2"
            >
              {status === 'sending' ? 'Sending…' : 'Send request'}
            </button>
            {status === 'sent' && (
              <p role="status" className="text-sm font-semibold text-green-700 sm:col-span-2">
                Thanks! We'll be in touch soon.
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm font-semibold text-brand sm:col-span-2">
                Something went wrong. Please call us at {business.phoneDisplay}.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
