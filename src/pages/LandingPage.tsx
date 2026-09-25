import Footer from "@/components/layout/Footer"
import Navbar from "@/components/layout/Navbar"
import About from "@/components/sections/About"
import CallToAction from "@/components/sections/CallToAction"
import Experiences from "@/components/sections/Experiences"
import Hero from "@/components/sections/Hero"
import Schedule from "@/components/sections/Schedule"
import Speakers from "@/components/sections/Speakers"
import Sponsors from "@/components/sections/Sponsors"
import TrackRecord from "@/components/sections/TrackRecord"
import Venue from "@/components/sections/Venue"

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <TrackRecord />
        <Experiences />
        <Schedule />
        <Speakers />
        <Venue />
        <Sponsors />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
