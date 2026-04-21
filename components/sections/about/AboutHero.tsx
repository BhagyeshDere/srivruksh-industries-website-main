"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">

      {/* Background with subtle zoom effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/images/factory/abouthero2.jpg"
          alt="Factory"
          fill
          priority
          className="object-cover opacity-80" // Increased opacity to let the image show through more
        />
      </motion.div>

      {/* Overlays - Softened the blue layers */}
      <div className="absolute inset-0 bg-black/40" /> 
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2E5B]/70 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(199,154,59,0.1),_transparent_70%)]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl md:max-w-5xl">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] mb-6 sm:mb-8 tracking-tighter"
        >
          ENGINEERING <br />
          <span className="text-[#C79A3B]">
            EXCELLENCE
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-100 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl md:max-w-2xl mx-auto font-light px-2"
        >
          Powering modern industries with{" "}
          <span className="text-white font-medium">precision manufacturing</span>{" "}
          and unmatched automation solutions designed for high-performance reliability.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full bg-[#C79A3B] text-[#0B2E5B] text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl text-center"
          >
            Get Quote
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-full border border-white/40 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-center"
          >
            View Services
          </Link>
        </motion.div>

      </div>

      {/* BOTTOM MASK - Reduced density of the blue fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-slate-900 to-transparent z-20" />

      {/* SIDE TEXT - Watermark */}
      <div className="absolute left-6 sm:left-10 bottom-10 hidden lg:block overflow-hidden pointer-events-none">
        <p className="text-white/[0.03] text-[12vh] font-black leading-none select-none tracking-tighter -mb-4">
          SRIVRUKSH
        </p>
      </div>

    </section>
  )
}