import Header from '../components/Header'
import Hero from '../components/Hero'
import WhySection from '../components/WhySection'
import FlowSection from '../components/FlowSection'
import ControlsSection from '../components/ControlsSection'
import SignalsSection from '../components/SignalsSection'
import ProofSection from '../components/ProofSection'
import WaitlistSection from '../components/WaitlistSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <WhySection />
      <FlowSection />
      <ControlsSection />
      <SignalsSection />
      <ProofSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
