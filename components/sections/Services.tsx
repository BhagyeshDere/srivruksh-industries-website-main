"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

// Updated services data integrated directly to ensure correct mapping
export const services = [
  {
    title: "Sheet Metal Fabrication",
    image: "/images/services/sheet-metal3.png"
  },
  {
    title: "SS Fabrication",
    image: "/images/services/ss-fab2.png"
  },
  {
    title: "MS Heavy Fabrication",
    image: "/images/services/heavy-ms1.png"
  },
  {
    title: "Fabrication with Machining",
    image: "/images/services/machining-fab.png"
  }
]

export default function Services() {
  const containerRef = useRef(null)

  return (
    <motion.section
      ref={containerRef}
      className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 md:py-28 lg:py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 sm:mb-16 md:mb-24 lg:mb-32">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C79A3B] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-4">
            Our Expertise
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 sm:mb-6 tracking-tight leading-[1.1]">
            Engineering & <br className="hidden md:block" /> Manufacturing Solutions
          </h2>

          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed font-medium opacity-80 px-2">
            Advanced industrial services including automation, fabrication,
            and precision machining tailored to global standards.
          </p>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="relative flex flex-col items-center">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            service={service}
            index={index}
            total={services.length}
          />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-10 sm:mt-14 md:mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-3 sm:gap-4 bg-[#C79A3B] hover:bg-[#b88a2d] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl font-bold text-xs sm:text-sm md:text-base shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <span className="tracking-wide">Explore All Services</span>
          <span className="text-lg sm:text-xl">→</span>
        </Link>
      </motion.div>
    </motion.section>
  )
}

/* SUB COMPONENT */

function ServiceCard({ service, index, total }: { service: any, index: number, total: number }) {
  const cardRef = useRef(null)
  const isLeft = index % 2 === 0

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.02])

  return (
    <div
      ref={cardRef}
      className={`sticky top-16 sm:top-20 md:top-24 lg:top-28 w-full flex justify-center 
      ${index === total - 1 ? "mb-0" : "mb-10 sm:mb-12 md:mb-16 lg:mb-20"}`}
    >
      <motion.div
        style={{ scale }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-full group"
      >

        {/* CARD */}
        <div className="relative h-[300px] sm:h-[380px] md:h-[500px] lg:h-[550px] w-full px-3 sm:px-4 md:px-8 lg:px-12">
          <div className="relative w-full h-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.5rem] md:rounded-[3rem] lg:rounded-[4rem] shadow-2xl bg-slate-900 border border-white/5">

            <Image
              src={service.image}
              alt={service.title}
              fill
              priority={index < 2}
              className="object-cover opacity-75 group-hover:scale-105 transition duration-[2s] ease-out"
            />

            {/* GRADIENT Overlay */}
            <div className={`absolute inset-0 ${
              isLeft
                ? "bg-gradient-to-r from-slate-950/90 via-slate-900/40 to-transparent"
                : "bg-gradient-to-l from-slate-950/90 via-slate-900/40 to-transparent"
            }`} />

            {/* CONTENT */}
            <div className={`absolute inset-0 flex items-center ${isLeft ? "justify-start" : "justify-end"}`}>
              <div className="max-w-7xl w-full px-4 sm:px-6 md:px-12 lg:px-20">

                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl text-white ${isLeft ? "" : "ml-auto text-right"}`}
                >

                  {/* INDEX */}
                  <div className={`flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4 ${isLeft ? "" : "justify-end"}`}>
                    <span className="text-[#C79A3B] font-mono text-sm sm:text-base md:text-lg font-bold tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="w-8 sm:w-10 md:w-12 h-px bg-[#C79A3B]/40" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 leading-[0.95] tracking-tight uppercase">
                    {service.title}
                  </h3>

                  {/* LINE */}
                  <div className={`w-12 sm:w-14 md:w-16 h-1 bg-[#C79A3B] mb-4 sm:mb-6 ${isLeft ? "" : "ml-auto"}`} />

                  {/* DESC */}
                  <p className="text-white mb-6 sm:mb-8 leading-relaxed text-xs sm:text-sm md:text-lg lg:text-xl font-light opacity-95 max-w-xs sm:max-w-md md:max-w-lg inline-block">
                    Precision-driven engineering solutions utilizing state-of-the-art
                    manufacturing workflows and expert craftsmanship.
                  </p>

                </motion.div>

              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  )
}