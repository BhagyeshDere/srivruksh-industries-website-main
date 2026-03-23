"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B2E5B]">

      {/* Background with subtle zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/factory/abouthero1.jpg"
          alt="Factory"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2E5B]/90 via-[#0B2E5B]/40 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(199,154,59,0.15),_transparent_70%)]" />

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-5xl">

        {/* Tag: Refined Typography & UI */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-8 px-6 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
          <span className="text-[10px] md:text-xs font-black text-white tracking-[0.4em] uppercase">
            Srivruksh Industries Pvt Ltd
          </span>
        </motion.div>

        {/* Heading: Advanced Industrial Style */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter"
        >
          ENGINEERING <br />
          <span className=" text-[#C79A3B] opacity-90 ">
            Excellence
          </span>
        </motion.h1>

        {/* Description: Light & Sophisticated */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-200 text-sm md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light"
        >
          Powering modern industries with <span className="text-white font-medium">precision manufacturing</span> and 
          unmatched automation solutions designed for high-performance reliability.
        </motion.p>

        {/* Buttons: Improved Shape & Hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="px-10 py-4 rounded-full bg-[#C79A3B] text-[#0B2E5B] text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl">
            Get Quote
          </button>

          <button className="px-10 py-4 rounded-full border border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all duration-300">
            View Services
          </button>
        </motion.div>

      </div>

      {/* Decorative Bottom Mask */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0B2E5B] to-transparent z-20" />
      
      {/* Side Decorative Text (Subtle UI touch) */}
      <div className="absolute left-10 bottom-10 hidden lg:block overflow-hidden">
        <p className="text-white/5 text-[12vh] font-black leading-none select-none tracking-tighter -mb-4">
          SRIVRUKSH
        </p>
      </div>

    </section>
  )
}