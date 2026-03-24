"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { Cpu } from "lucide-react"

export default function Facilities() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const facilities = [
    {
      title: "CNC Profile Cutting Machine",
      image: "/images/facilities/cnc-cutting.jpg",
      desc: "Bed Size 3000mm x 6000mm. Precision cutting for thickness from 3mm to 150mm."
    },
    {
      title: "CNC Turning Machine",
      image: "/images/facilities/cnc-turning.jpg",
      desc: "MacPower brand with 165mm Chuck Dia and high-torque 7-9KW spindle power."
    },
    {
      title: "Conventional Turning Lath (L)",
      image: "/images/facilities/lath-large.jpg",
      desc: "Large scale turning for Flange Dia up to 1200mm and lengths up to 3000mm."
    },
    {
      title: "Conventional Turning Lath (S)",
      image: "/images/facilities/lath-small.jpg",
      desc: "Standard turning for Flange Dia up to 1000mm and shaft diameters up to 500mm."
    },
    {
      title: "Tapping Machine",
      image: "/images/facilities/tapping.jpg",
      desc: "High-speed industrial tapping range spanning from M3 to M30 requirements."
    },
    {
      title: "M1TR Machine",
      image: "/images/facilities/m1tr.jpg",
      desc: "Pacmill brand with 254 x 1371mm table size and precision 3-axis travel."
    },
    {
      title: "Universal Milling Machine",
      image: "/images/facilities/milling.jpg",
      desc: "Model 2.5 with 1200mm X-Axis travel and a heavy-duty 700kg weight capacity."
    },
    {
      title: "VMC Machine",
      image: "/images/facilities/vmc.jpg",
      desc: "Jyoti make high-accuracy vertical machining center with 900 x 600 x 630mm bed."
    },
    {
      title: "Fabrication Facility",
      image: "/images/facilities/fabrication.jpg",
      desc: "Comprehensive solutions including CO2, Argon, Arc, and specialized Aluminium welding."
    }
  ]

  const totalFacilities = facilities.length

  return (
    <section className="relative py-16 sm:py-20 md:py-32 bg-[#fcfcfc] overflow-hidden">

      {/* GRID BG */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#0B2E5B 1px, transparent 1px), linear-gradient(90deg, #0B2E5B 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADING */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <span className="w-8 sm:w-12 h-[2px] bg-[#C79A3B]" />
              <p className="text-[#C79A3B] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] md:text-xs font-black">
                Production Facilities
              </p>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#0B2E5B] tracking-tight leading-[0.9]">
              MODERN <br />
              <span className="text-slate-300 italic">INFRASTRUCTURE</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-xs sm:max-w-sm text-xs sm:text-sm md:text-base leading-relaxed border-l-2 border-slate-100 pl-4 sm:pl-6 font-medium"
          >
            Explore our advanced machinery designed for precision,
            efficiency, and industrial excellence.
          </motion.p>
        </div>
      </div>

      {/* SCROLL */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 md:gap-10 overflow-x-auto px-4 sm:px-6 md:px-[8vw] pb-10 sm:pb-12 scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {facilities.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[85vw] sm:min-w-[75vw] md:min-w-[480px] snap-center group"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
          >

            <div className="relative h-[380px] sm:h-[450px] md:h-[580px] rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#0B2E5B]/20">

              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.3] group-hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B] via-[#0B2E5B]/40 to-transparent opacity-90" />

              <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 right-4 sm:right-6 md:right-8 flex justify-between items-center">

                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 sm:px-4 py-1 rounded-full flex items-center gap-2">
                  <Cpu className="w-3 h-3 text-[#C79A3B]" />
                  <span className="text-white text-[8px] sm:text-[9px] font-black uppercase tracking-widest">
                    Industrial Grade
                  </span>
                </div>

                <div className="font-mono text-white/50 text-[10px] sm:text-xs md:text-sm font-bold">
                  <span className="text-[#C79A3B]">
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                </div>

              </div>

              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 md:p-14">
                <div className="flex flex-col gap-2">

                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="text-[#C79A3B] font-mono text-xs sm:text-sm font-bold">
                      FACILITY_ID_{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </span>
                    <div className="h-px w-6 sm:w-8 bg-[#C79A3B]/30" />
                  </div>

                  <h3 className="text-xl sm:text-2xl md:text-4xl font-black text-white tracking-tight uppercase">
                    {item.title}
                  </h3>

                  <div className="h-px w-full bg-white/10 my-3 sm:my-4" />

                  <div className="min-h-[50px] sm:min-h-[60px] md:min-h-[80px]">
                    <p className="text-slate-300 text-xs sm:text-sm md:text-base font-medium leading-relaxed max-w-xs">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 👉 NEW SWIPE INDICATOR */}
      <div className="flex justify-center mt-4 sm:mt-6">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex items-center gap-2 text-[#0B2E5B] text-xs sm:text-sm font-semibold opacity-70"
        >
          <span>Swipe</span>
          <span className="text-[#C79A3B]">→</span>
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-10 sm:mt-12 md:mt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-slate-200 pt-8 sm:pt-10">

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-baseline gap-1 font-black text-[#0B2E5B]">
              <span className="text-3xl sm:text-4xl md:text-6xl">
                {totalFacilities < 10 ? `0${totalFacilities}` : totalFacilities}
              </span>
              <span className="text-[9px] sm:text-xs md:text-sm uppercase text-[#C79A3B]">
                Units Total
              </span>
            </div>

            <div className="h-8 sm:h-10 w-px bg-slate-200 hidden md:block" />

            <p className="text-[9px] sm:text-[10px] md:text-xs text-slate-400 uppercase max-w-[140px]">
              Operational & Certified Infrastructure
            </p>
          </div>

          <div className="flex flex-col items-end gap-2 sm:gap-3 w-full md:w-auto">
            <div className="flex items-center gap-3 sm:gap-4 w-full md:w-64">
              <span className="text-[8px] sm:text-[9px] text-slate-300 uppercase">
                Progress
              </span>

              <div className="h-[2px] flex-grow bg-slate-100 relative overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1.5 }}
                  className="absolute top-0 left-0 h-full bg-[#C79A3B]"
                />
              </div>

              <span className="text-[8px] sm:text-[9px] text-[#0B2E5B] uppercase">
                100%
              </span>
            </div>

            <p className="text-[8px] sm:text-[9px] text-slate-400 uppercase tracking-widest">
              Slide to explore machines
            </p>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

    </section>
  )
}