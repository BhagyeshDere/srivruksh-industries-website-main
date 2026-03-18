"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"
import { Cpu, ChevronRight } from "lucide-react"

export default function Facilities() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const facilities = [
    {
      title: "CNC Profile Cutting Machine",
      image: "/images/facilities/cnc-cutting.jpg",
      desc: "High precision cutting from 3mm to 150mm thickness."
    },
    {
      title: "CNC Turning Machine",
      image: "/images/facilities/cnc-turning.jpg",
      desc: "Powerful CNC turning for industrial accuracy."
    },
    {
      title: "Universal Milling Machine",
      image: "/images/facilities/milling.jpg",
      desc: "Advanced milling for complex machining."
    },
    {
      title: "Tapping Machine",
      image: "/images/facilities/tapping.jpg",
      desc: "Precision tapping from M3 to M30."
    },
    {
      title: "VMC Machine",
      image: "/images/facilities/vmc.jpg",
      desc: "High accuracy vertical machining center."
    },
    {
      title: "Fabrication Facility",
      image: "/images/facilities/fabrication.jpg",
      desc: "Complete welding & fabrication solutions."
    }
  ]

  return (
    <section className="relative py-24 md:py-32 bg-[#fcfcfc] overflow-hidden">
      
      {/* 1. INDUSTRIAL GRID DECORATION */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#0B2E5B 1px, transparent 1px), linear-gradient(90deg, #0B2E5B 1px, transparent 1px)`, backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADING SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-[#C79A3B]" />
              <p className="text-[#C79A3B] uppercase tracking-[0.4em] text-[10px] md:text-xs font-black">
                Production Facilities
              </p>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-[#0B2E5B] tracking-tighter leading-none">
              MODERN <br />
              <span className="text-slate-300 italic">INFRASTRUCTURE</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-sm text-sm md:text-base leading-relaxed border-l-2 border-slate-100 pl-6 font-light"
          >
            Explore our advanced machinery designed for precision,
            efficiency, and industrial excellence.
          </motion.p>
        </div>
      </div>

      {/* 2. HORIZONTAL SCROLL HUB */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-[10vw] pb-16 scroll-smooth snap-x snap-mandatory no-scrollbar"
      >
        {facilities.map((item, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] md:min-w-[450px] snap-center group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* CARD CONTAINER */}
            <div className="relative h-[500px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-[#0B2E5B]/20 group-hover:-translate-y-2">
              
              {/* IMAGE WITH ZOOM EFFECT */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
              />

              {/* DYNAMIC GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B] via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* SPEC TAG (Top Right) */}
              <div className="absolute top-6 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#C79A3B]" />
                  <span className="text-white text-[10px] font-black uppercase tracking-widest leading-none">Industrial Grade</span>
                </div>
              </div>

              {/* CONTENT PANEL */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-black text-[#C79A3B]/50 group-hover:text-[#C79A3B] transition-colors">0{index + 1}</span>
                  <div className="h-px flex-1 bg-white/20" />
                </div>

                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 tracking-tighter leading-[1.1]">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm md:text-base font-light leading-relaxed max-w-xs transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.desc}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-[#C79A3B] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                  <span>View Technical Specs</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. SCROLL HINT WITH ANIMATION */}
      <div className="flex items-center justify-center gap-4 text-slate-400 mt-4">
        <motion.div 
          animate={{ x: [-10, 10, -10] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-12 h-px bg-slate-200" 
        />
        <span className="text-[10px] font-black uppercase tracking-[0.3em] select-none">
          Swipe to Navigate Infrastructure
        </span>
        <motion.div 
          animate={{ x: [10, -10, 10] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-12 h-px bg-slate-200" 
        />
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