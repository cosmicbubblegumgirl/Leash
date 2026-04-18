import Reveal from './Reveal'
import SectionIntro from './SectionIntro'
import { signalCards } from './data'

export default function SignalsSection() {
  return (
    <section id="signals" className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="Operational signals"
            title="The interface should tell you where trust is holding and where it is thinning out."
            body="Instead of burying risk in configuration pages, the product surfaces a few sharp signals that help teams understand exposure, review load, and clarity."
            align="center"
          />
        </Reveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {signalCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.08}>
              <div className="section-shell h-full p-6 sm:p-8">
                <p className="text-sm uppercase tracking-[0.24em] text-white/42">{card.label}</p>
                <p className="mt-5 text-4xl font-semibold tracking-tight text-white">{card.value}</p>
                <p className="mt-4 text-sm leading-7 text-white/66">{card.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}