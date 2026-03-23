"use client"

import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import AutoScroll from "embla-carousel-auto-scroll"
import { clients } from "@/data/clients"
import { motion } from "framer-motion"

export default function Clients() {

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      dragFree: true
    },
    [
      AutoScroll({
        playOnInit: true,
        speed: 0.7,
        stopOnInteraction: false,
        stopOnMouseEnter: true
      })
    ]
  )

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-28 lg:py-32 bg-[#F8FAFC] relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >

      {/* WATERMARK */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <h2 className="text-[28vw] sm:text-[22vw] md:text-[18vw] font-black text-[#0B2E5B] tracking-tight">
          PARTNERS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 md:mb-20">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-4 py-1 rounded-full bg-[#0B2E5B]/5 border border-[#0B2E5B]/10"
          >
            <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-bold text-[#0B2E5B] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Corporate Network
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B2E5B] mb-4 sm:mb-6 tracking-tight">
            INDUSTRY <span className="text-slate-400 font-light">ALLIANCES</span>
          </h2>

          <p className="text-slate-500 max-w-xl sm:max-w-2xl text-xs sm:text-sm md:text-base lg:text-lg font-light leading-relaxed px-2">
            From heavy fabrication to precision automation, Srivruksh Industries is
            the <span className="text-[#0B2E5B] font-semibold underline decoration-[#C79A3B]/30 underline-offset-4">
              preferred partner
            </span> for India's leading engineering firms.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative">

          {/* SIDE GRADIENTS */}
          <div className="absolute inset-y-0 left-0 w-12 sm:w-20 md:w-40 bg-gradient-to-r from-[#F8FAFC] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 sm:w-20 md:w-40 bg-gradient-to-l from-[#F8FAFC] to-transparent z-20 pointer-events-none" />

          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex -ml-3 sm:-ml-4">

              {[...clients, ...clients].map((client, index) => {
                const imagePath = client.logo.startsWith('/images')
                  ? client.logo
                  : `/images${client.logo}`

                return (
                  <div
                    key={`${client.name}-${index}`}
                    className="flex-[0_0_70%] sm:flex-[0_0_45%] md:flex-[0_0_32%] lg:flex-[0_0_22%] pl-3 sm:pl-4 py-6 sm:py-8 md:py-10"
                  >
                    <motion.div
                      whileHover={{
                        y: -6,
                        boxShadow: "0 20px 40px -15px rgba(11, 46, 91, 0.1)"
                      }}
                      className="relative bg-white rounded-xl sm:rounded-2xl border border-slate-200 p-4 sm:p-6 md:p-8 h-[110px] sm:h-[130px] md:h-[160px] flex items-center justify-center transition-all duration-500 group/card hover:border-[#C79A3B]/40"
                    >

                      <div className="absolute top-2 sm:top-3 left-2 sm:left-3 w-2 sm:w-3 h-2 sm:h-3 border-t-2 border-l-2 border-slate-100 group-hover/card:border-[#C79A3B] transition-colors" />

                      <div className="relative w-full h-full">
                        <Image
                          src={imagePath}
                          alt={client.name}
                          fill
                          className="object-contain opacity-100 transition-all duration-700"
                        />
                      </div>

                    </motion.div>
                  </div>
                )
              })}

            </div>
          </div>
        </div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 sm:mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-16 border-t border-slate-200 pt-10 sm:pt-12 md:pt-16"
        >

          <div className="text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0B2E5B]">99.8%</h4>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
              Quality Assurance
            </p>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200" />

          <div className="text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0B2E5B]">500+</h4>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
              Projects Delivered
            </p>
          </div>

          <div className="hidden md:block w-px h-10 bg-slate-200" />

          <div className="text-center">
            <h4 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0B2E5B]">15+</h4>
            <p className="text-[8px] sm:text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] mt-1">
              Global Clients
            </p>
          </div>

        </motion.div>

      </div>
    </motion.section>
  )
}