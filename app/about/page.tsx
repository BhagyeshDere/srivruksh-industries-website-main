import AboutHero from "@/components/sections/about/AboutHero"
import WhoWeAre from "@/components/sections/about/WhoWeAre"
import VisionMission from "@/components/sections/about/VisionMission"
import Values from "@/components/sections/about/Values"
import Certifications from "@/components/sections/about/Certifications"
import CTA from "@/components/sections/about/CTA"

export default function AboutPage() {
  return (
    <>
      {/* 🔹 HERO */}
      <AboutHero />

      {/* 🔹 ABOUT CONTENT */}
      <WhoWeAre />
      <VisionMission />
      <Values />

      {/* 🔹 TRUST SECTION */}
      <Certifications />

      {/* 🔥 FINAL CONVERSION SECTION */}
      <CTA />
    </>
  )
}