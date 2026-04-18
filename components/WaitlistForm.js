'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = { email: '' }
const waitlistEndpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.trim()
const fallbackEndpoint = '/api/waitlist'
const waitlistSource = process.env.NEXT_PUBLIC_WAITLIST_SOURCE?.trim() || 'leash-site'

async function readResponseMessage(response) {
  const contentType = response.headers.get('content-type') || ''

  if (contentType.includes('application/json')) {
    const data = await response.json()
    return data?.message || (response.ok ? 'Thanks. You are on the list.' : 'Something went sideways. Please try again.')
  }

  const text = await response.text()
  if (text.trim()) {
    return text.trim()
  }

  return response.ok ? 'Thanks. You are on the list.' : 'Something went sideways. Please try again.'
}

export default function WaitlistForm() {
  const [form, setForm] = useState(initialState)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitting(true)
    setStatus({ type: 'idle', message: '' })

    try {
      const endpoint = waitlistEndpoint || fallbackEndpoint

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, source: waitlistSource })
      })

      const message = await readResponseMessage(response)

      if (!response.ok) {
        throw new Error(message)
      }

      setStatus({ type: 'success', message })
      setForm(initialState)
    } catch (error) {
      const message = waitlistEndpoint
        ? error.message
        : 'Waitlist submissions need an endpoint. For GitHub Pages, set NEXT_PUBLIC_WAITLIST_ENDPOINT. For local Next.js runtime, the built-in /api/waitlist route can handle demo submissions.'

      setStatus({ type: 'error', message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65 }}
      className="section-shell mx-auto max-w-3xl p-6 sm:p-8"
    >
      <label className="block">
        <span className="mb-2 block text-sm text-white/62">Work email</span>
        <input
          required
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/25"
          placeholder="you@company.com"
        />
      </label>

      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-white/52">No spam. No performative hype. Just updates when there is something worth sharing.</p>
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-night transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? 'Joining…' : 'Join the waitlist'}
        </button>
      </div>

      {status.message && (
        <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-mint' : 'text-rose'}`}>{status.message}</p>
      )}
    </motion.form>
  )
}
