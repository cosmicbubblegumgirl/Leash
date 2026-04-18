'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from './data'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-[#07111f]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 shadow-glow">
            <span className="text-lg font-semibold">P</span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-white/85 uppercase">Permit</p>
            <p className="text-xs text-white/45">AI agent governance</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/70 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#waitlist"
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-night transition hover:scale-[1.02]"
          >
            Join waitlist
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
        >
          <span className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#08111d]/95 px-6 py-5 md:hidden"
          >
            <div className="space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white/80"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#waitlist"
                onClick={() => setOpen(false)}
                className="block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-night"
              >
                Join waitlist
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
