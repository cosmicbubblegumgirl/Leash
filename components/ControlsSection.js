import Reveal from './Reveal'
import SectionIntro from './SectionIntro'
import { permissions } from './data'

const riskClasses = {
  Low: 'border-mint/20 bg-mint/10 text-mint',
  Medium: 'border-gold/20 bg-gold/10 text-gold',
  High: 'border-rose/20 bg-rose/10 text-rose'
}

export default function ControlsSection() {
  return (
    <section id="controls" className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="Control model"
            title="Professional structure, human wording, and just enough personality."
            body="Each capability is easy to understand, but serious where it counts. Low-risk actions move quickly. High-risk actions become deliberate, visible, and reviewable."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            {permissions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.07}>
                <div className="section-shell p-5 sm:p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                        <span className={`rounded-full border px-3 py-1 text-xs font-medium ${riskClasses[item.risk]}`}>{item.risk} risk</span>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-white/66">{item.description}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">
                      {index % 2 === 0 ? 'Allowed' : 'Review first'}
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/60">{item.detail}</span>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/60">Audit included</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="section-shell sticky top-28 p-6">
              <p className="text-sm font-semibold text-white/90">Approval moment</p>
              <h3 className="mt-3 text-2xl font-semibold">A sensitive action should feel unmistakably sensitive.</h3>
              <p className="mt-4 text-sm leading-7 text-white/65">
                Instead of hiding risk behind frictionless automation, the interface makes it obvious when a decision deserves a human glance.
              </p>
              <div className="mt-6 rounded-[26px] border border-rose/20 bg-rose/10 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-rose/80">Approval required</p>
                <p className="mt-3 text-lg font-semibold">Spend R12,000 on a new software subscription?</p>
                <p className="mt-2 text-sm text-white/70">Requested by Ops Agent · Vendor not previously approved</p>
                <div className="mt-5 flex gap-3">
                  <button className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-night">Approve</button>
                  <button className="rounded-full border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white">Review details</button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
