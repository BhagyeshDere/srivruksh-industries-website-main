"use client"

import Image from "next/image"
import Link from "next/link"
import { services } from "@/data/services"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Services() {
  const containerRef = useRef(null)

  return (
    <motion.section
      ref={containerRef}
      className="bg-gradient-to-b from-gray-100 to-white py-24 md:py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* HEADING */}
      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C79A3B] uppercase tracking-[4px] font-semibold mb-3">
            Our Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0B2E5B] mb-5">
            Engineering & Manufacturing Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            We provide advanced industrial services including automation,
            fabrication, machining and equipment manufacturing tailored
            to industry requirements.
          </p>
        </motion.div>
      </div>

      {/* SERVICES */}
      <div className="relative flex flex-col items-center">
        {services.map((service, index) => {
          return (
            <ServiceCard 
              key={index} 
              service={service} 
              index={index} 
              total={services.length} 
            />
          )
        })}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-10 md:mt-16"  // 🔥 reduced top spacing
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-3 bg-[#C79A3B] hover:bg-[#b88a2d] text-white px-8 md:px-10 py-3 rounded-lg font-semibold shadow-lg transition hover:scale-105"
        >
          View All Services
          <span className="text-lg">→</span>
        </Link>
      </motion.div>
    </motion.section>
  )
}

// SUB COMPONENT

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
      className={`sticky top-20 md:top-28 w-full flex justify-center 
      ${index === total - 1 ? "mb-0" : "mb-12 md:mb-20"}`} // 🔥 FIX HERE
      style={{ height: "auto" }}
    >
      <motion.div
        style={{ scale }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative w-full group"
      >
        {/* IMAGE CARD */}
        <div className="relative h-[400px] sm:h-[480px] md:h-[600px] w-full px-4 md:px-12">
          <div className="relative w-full h-full overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl bg-black border border-white/10">
            
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover opacity-80 group-hover:scale-110 transition duration-[1.5s] ease-out"
            />

            <div className={`absolute inset-0 transition-opacity duration-500 ${
              isLeft
                ? "bg-gradient-to-r from-black/90 via-black/40 to-transparent"
                : "bg-gradient-to-l from-black/90 via-black/40 to-transparent"
            }`} />

            <div className={`absolute inset-0 flex items-center ${isLeft ? "justify-start" : "justify-end"}`}>
              <div className="max-w-7xl w-full px-8 md:px-16">
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className={`max-w-lg md:max-w-xl text-white ${isLeft ? "" : "ml-auto text-right"}`}
                >
                  <div className={`flex items-center gap-3 mb-4 ${isLeft ? "" : "justify-end"}`}>
                    <span className="text-[#C79A3B] font-mono text-sm font-bold">0{index + 1}</span>
                    <div className="w-8 h-px bg-[#C79A3B]/50" />
                  </div>

                  <h3 className="text-3xl md:text-6xl font-black mb-6 leading-[1] tracking-tighter">
                    {service.title}
                  </h3>

                  <div className={`w-16 h-[4px] bg-[#C79A3B] mb-6 ${isLeft ? "" : "ml-auto"}`} />

                  <p className="text-gray-200 mb-8 leading-relaxed text-base md:text-xl font-medium opacity-90">
                    High quality industrial engineering service with modern
                    manufacturing technology and skilled professionals.
                  </p>
                  
                  <div className={`flex ${isLeft ? "" : "justify-end"}`}>
                     <div className="inline-flex items-center gap-2 text-[#C79A3B] uppercase tracking-widest text-xs font-black border-b border-[#C79A3B]/0 hover:border-[#C79A3B] transition-all cursor-pointer">
                        Explore Specs →
                     </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>

      </motion.div>
    </div>
  )
}