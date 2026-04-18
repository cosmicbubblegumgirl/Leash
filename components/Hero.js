'use client'

import { motion } from 'framer-motion'
import Reveal from './Reveal'

export default function Hero() {
  return (
    <section id="top" className="relative px-6 pb-16 pt-12 lg:px-8 lg:pb-24 lg:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="max-w-2xl">
            <span className="soft-label">Trust for autonomous AI</span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              Control what AI can do <span className="gradient-text">before</span> it does it.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72 sm:text-xl">
              Permit gives teams a calm, credible way to manage autonomous agents. Clear permissions, sensible approvals,
              and an audit trail that explains what happened in plain English.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#waitlist" className="rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-night transition hover:scale-[1.02]">
                Join the waitlist
              </a>
              <a href="#controls" className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur">
                See the control model
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Read email</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Book meetings</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Spend money</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Share files</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">Contact people</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="section-shell shimmer relative p-5 sm:p-6">
            <div className="grid-fade absolute inset-0 opacity-60" />
            <motion.div
              className="float-orb absolute -right-10 top-10 h-28 w-28 rounded-full bg-brand/20 blur-3xl"
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            />
            <motion.div
              className="float-orb absolute bottom-10 left-4 h-24 w-24 rounded-full bg-cyan/20 blur-3xl"
              animate={{ scale: [1.12, 1, 1.1] }}
              transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
            />
            <div className="relative z-10">
              <div className="mb-4 flex items-center justify-between rounded-3xl border border-white/10 bg-black/20 px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white/80">Agent privileges</p>
                  <p className="text-xs text-white/45">Calm controls for consequential actions</p>
                </div>
                <span className="rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs text-mint">Live</span>
              </div>

              <div className="space-y-4">
                {[
                  ['Read email', 'Low', 'Allowed for starred senders'],
                  ['Book meetings', 'Medium', 'Requires calendar rules'],
                  ['Spend money', 'High', 'Needs human approval'],
                  ['Share files', 'High', 'Restricted to approved domains']
                ].map(([title, risk, note], index) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + index * 0.08, duration: 0.5 }}
                    className="rounded-[24px] border border-white/10 bg-white/8 p-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">{title}</p>
                        <p className="mt-1 text-sm text-white/55">{note}</p>
                      </div>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                          risk === 'Low'
                            ? 'bg-mint/15 text-mint'
                            : risk === 'Medium'
                              ? 'bg-gold/15 text-gold'
                              : 'bg-rose/15 text-rose'
                        }`}
                      >
                        {risk}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="h-2 flex-1 rounded-full bg-white/10">
                        <div className={`h-2 rounded-full ${risk === 'Low' ? 'w-3/4 bg-mint' : risk === 'Medium' ? 'w-1/2 bg-gold' : 'w-1/3 bg-rose'}`} />
                      </div>
                      <div className="ml-4 h-7 w-12 rounded-full border border-white/10 bg-white/10 p-1">
                        <div className={`h-5 w-5 rounded-full bg-white ${risk === 'High' ? '' : 'translate-x-5'} transition`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
