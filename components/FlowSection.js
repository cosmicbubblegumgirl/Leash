import Reveal from './Reveal'
import SectionIntro from './SectionIntro'
import { flowSteps } from './data'

export default function FlowSection() {
  return (
    <section id="flow" className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="How it works"
            title="A rollout model that slows down only when it should."
            body="The product does not treat every action the same. It gives teams a clear way to define capability, route sensitive moments, and keep a readable record of what happened."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="section-shell p-6 sm:p-8">
              <p className="text-sm font-semibold text-white/85">Rollout sequence</p>
              <div className="mt-6 space-y-4">
                {flowSteps.map((step, index) => (
                  <div key={step.title} className="rounded-[24px] border border-white/10 bg-white/6 p-5">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-sm font-semibold text-white/85">
                        0{index + 1}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{step.title}</p>
                        <p className="mt-2 text-sm leading-7 text-white/66">{step.body}</p>
                        <p className="mt-3 text-xs uppercase tracking-[0.24em] text-white/42">{step.meta}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="section-shell p-6 sm:p-8">
              <p className="text-sm font-semibold text-white/85">Example policy</p>
              <div className="mt-6 rounded-[28px] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-base font-semibold text-white">Sales agent outreach</p>
                    <p className="mt-1 text-sm text-white/55">Outbound contact is allowed with visible limits.</p>
                  </div>
                  <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs text-gold">Medium risk</span>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    ['Audience', 'Only existing leads in approved CRM lists'],
                    ['Tone', 'No urgency language, no medical or legal claims'],
                    ['Hours', 'Weekdays between 08:00 and 17:00 local time'],
                    ['Escalation', 'Manual approval for attachments or pricing changes']
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[22px] border border-white/10 bg-white/6 p-4">
                      <p className="text-xs uppercase tracking-[0.22em] text-white/42">{label}</p>
                      <p className="mt-2 text-sm leading-7 text-white/72">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}