"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Cog, Scan, Layers } from "lucide-react"

export default function Facilities() {
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
    <section className="relative py-32 bg-[#f8fafc] overflow-hidden">
      {/* 1. BLUEPRINT BACKGROUND DECORATION */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#0B2E5B 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADING: INDUSTRIAL TYPOGRAPHY */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#0B2E5B]/10 bg-[#0B2E5B]/5"
          >
            <Scan className="w-4 h-4 text-[#C79A3B]" />
            <span className="text-[10px] font-black text-[#0B2E5B] uppercase tracking-[0.4em]">Infrastructure</span>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-[#0B2E5B] tracking-tighter leading-none mb-8">
            PRODUCTION <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e0b85d]">
              FACILITIES
            </span>
          </h2>
          
          <div className="w-24 h-[3px] bg-[#C79A3B]" />
        </div>

        {/* 2. ADVANCED INTERACTIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-slate-200/50"
            >
              {/* IMAGE WITH PARALLAX EFFECT */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover grayscale-[0.4] group-hover:grayscale-0 transition-all duration-700" 
                />
              </div>

              {/* DYNAMIC GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B] via-[#0B2E5B]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* TOP TAGS: TECHNICAL METADATA */}
              <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white">
                  <Layers className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black text-white/50 uppercase tracking-widest border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                  Facility Unit-0{index + 1}
                </span>
              </div>

              {/* CONTENT PANEL: GLASSMORPHISM REVEAL */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <Cog className="w-5 h-5 text-[#C79A3B] animate-spin-slow" />
                  <div className="h-px flex-1 bg-white/20" />
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight leading-none">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {item.desc}
                </p>
                
                {/* INTERACTIVE HINT */}
                <div className="mt-6 flex items-center gap-2 text-[#C79A3B] text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Precision Optimized</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. BACKGROUND ACCENTS */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0B2E5B]/5 blur-[120px] rounded-full" />
      <div className="absolute top-24 -right-24 w-80 h-80 bg-[#C79A3B]/5 blur-[100px] rounded-full" />
    </section>
  )
}