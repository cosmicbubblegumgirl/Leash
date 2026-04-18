import Header from '../components/Header'
import Hero from '../components/Hero'
import WhySection from '../components/WhySection'
import ControlsSection from '../components/ControlsSection'
import ProofSection from '../components/ProofSection'
import WaitlistSection from '../components/WaitlistSection'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <WhySection />
      <ControlsSection />
      <ProofSection />
      <WaitlistSection />
      <Footer />
    </main>
  )
}
