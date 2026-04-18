import Reveal from './Reveal'
import SectionIntro from './SectionIntro'
import { featureCards } from './data'

export default function WhySection() {
  return (
    <section id="why" className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="Why it matters"
            title="Most teams are designing chat. The real gap is governance."
            body="People do not need more buttons that feel magical and vague. They need systems that make responsibility obvious. Permit brings structure, warmth, and accountability to autonomous behavior."
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08}>
              <div className="section-shell h-full p-6">
                <div className="mb-5 h-12 w-12 rounded-2xl border border-white/10 bg-white/10" />
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/62">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
