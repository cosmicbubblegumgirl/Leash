import Reveal from './Reveal'
import SectionIntro from './SectionIntro'
import WaitlistForm from './WaitlistForm'

export default function WaitlistSection() {
  return (
    <section id="waitlist" className="px-6 py-12 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionIntro
            eyebrow="Early access"
            title="Bring a little order to autonomous chaos."
            body="If your team is experimenting with agents that touch real workflows, join the list. We are building for people who want the upside of automation without surrendering judgment."
            align="center"
          />
        </Reveal>
        <div className="mt-10">
          <WaitlistForm />
        </div>
      </div>
    </section>
  )
}
