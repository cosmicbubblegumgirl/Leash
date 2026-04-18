'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const initialState = { name: '', email: '', team: '' }
const waitlistEndpoint = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT?.trim()

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
      if (!waitlistEndpoint) {
        throw new Error('Waitlist endpoint is not configured yet. Set NEXT_PUBLIC_WAITLIST_ENDPOINT to connect submissions.')
      }

      const response = await fetch(waitlistEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went sideways. Please try again.')
      }

      setStatus({ type: 'success', message: data.message })
      setForm(initialState)
    } catch (error) {
      setStatus({ type: 'error', message: error.message })
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-1">
          <span className="mb-2 block text-sm text-white/62">Your name</span>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/25"
            placeholder="Alex, Sam, or your future favorite customer"
          />
        </label>
        <label className="sm:col-span-1">
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
        <label className="sm:col-span-2">
          <span className="mb-2 block text-sm text-white/62">Team or use case</span>
          <input
            name="team"
            value={form.team}
            onChange={handleChange}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-white/25"
            placeholder="Ops, sales, founder mode, or delightfully chaotic admin work"
          />
        </label>
      </div>

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
