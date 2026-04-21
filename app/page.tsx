import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import WhyChoose from "@/components/sections/WhyChoose"
import Services from "@/components/sections/Services"
import Products from "@/components/sections/Products"
import Facilities from "@/components/sections/Facilities"
import Mission from "@/components/sections/Mission"
import Clients from "@/components/sections/Clients"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Why Choose Us */}
      <WhyChoose />

      {/* Services */}
      <Services />

      {/* Products */}
      <Products />

      {/* Facilities */}
      <Facilities />

      {/* Mission */}
      <Mission />

      {/* Clients */}
      <Clients />
    </>
  )
}