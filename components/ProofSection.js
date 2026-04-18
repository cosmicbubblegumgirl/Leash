import Reveal from './Reveal'
import SectionIntro from './SectionIntro'
import { proofPoints } from './data'

export default function ProofSection() {
  return (
    <section id="proof" className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="Why this feels trustworthy"
            title="A premium shell outside, a serious operating model underneath."
            body="The visual language feels modern and distinctive, but the structure is grounded in the kind of software people trust with calendars, customers, budgets, and files."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <div className="section-shell p-6 sm:p-8">
              <p className="text-sm font-semibold text-white/85">Audit trail</p>
              <div className="mt-6 space-y-4">
                {[
                  ['09:12', 'Read 14 new emails from approved senders', 'Low'],
                  ['09:24', 'Drafted 3 calendar options for investor sync', 'Medium'],
                  ['09:37', 'Requested approval to share contract with external counsel', 'High']
                ].map(([time, text, risk]) => (
                  <div key={time} className="rounded-[22px] border border-white/10 bg-white/6 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-medium text-white/50">{time}</span>
                      <span className={`rounded-full px-3 py-1 text-xs ${risk === 'Low' ? 'bg-mint/15 text-mint' : risk === 'Medium' ? 'bg-gold/15 text-gold' : 'bg-rose/15 text-rose'}`}>{risk}</span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/75">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
            {proofPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.08}>
                <div className="section-shell h-full p-6">
                  <p className="text-base leading-8 text-white/74">{point}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
