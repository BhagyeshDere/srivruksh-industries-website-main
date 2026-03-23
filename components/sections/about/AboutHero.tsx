"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-[#0B2E5B]">

      {/* Background */}
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

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2E5B]/90 via-[#0B2E5B]/40 to-black/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(199,154,59,0.15),_transparent_70%)]" />

      {/* CONTENT */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl md:max-w-5xl">

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.95] mb-6 sm:mb-8 tracking-tight"
        >
          ENGINEERING <br />
          <span className="text-[#C79A3B] opacity-90">
            Excellence
          </span>
        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-slate-200 text-xs sm:text-sm md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-xl md:max-w-2xl mx-auto font-light px-2"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
        >
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full bg-[#C79A3B] text-[#0B2E5B] text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-300 shadow-xl text-center"
          >
            Get Quote
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full border border-white/20 text-white text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-white/10 backdrop-blur-md transition-all duration-300 text-center"
          >
            View Services
          </Link>
        </motion.div>

      </div>

      {/* BOTTOM MASK */}
      <div className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32 bg-gradient-to-t from-[#0B2E5B] to-transparent z-20" />

      {/* SIDE TEXT */}
      <div className="absolute left-6 sm:left-10 bottom-6 sm:bottom-10 hidden lg:block overflow-hidden">
        <p className="text-white/5 text-[10vh] md:text-[12vh] font-black leading-none select-none tracking-tight -mb-4">
          SRIVRUKSH
        </p>
      </div>

    </section>
  )
}