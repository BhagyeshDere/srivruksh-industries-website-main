"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Hero() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full h-[90vh] md:h-[95vh] min-h-[650px] md:min-h-[700px] flex items-center overflow-hidden bg-slate-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      {/* BACKGROUND */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/assets/hero1.jpg"
          alt="Industrial Manufacturing"
          fill
          priority
          className="object-cover opacity-70 scale-110"
        />
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B2E5B]/80 via-[#0B2E5B]/40 to-transparent" />
      <div className="absolute inset-0 z-10 bg-black/20" />

      {/* GRID */}
      <div
        className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* CONTENT - Shifted to the left by adjusting mx-0 and reducing px */}
      <div className="relative z-20 w-full max-w-7xl ml-0 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl text-white">

          {/* TAG */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 sm:gap-3 mb-6 md:mb-8 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl"
          >
            <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
            <span className="text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
              Srivruksh Industries Pvt Ltd
            </span>
          </motion.div>

          {/* TAGLINE */}
          <motion.p
            className="uppercase tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-xs text-[#C79A3B] mb-4 md:mb-6 font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Precision • Engineering • Excellence
          </motion.p>

          {/* HEADING */}
          <motion.h1
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.95] mb-6 md:mb-8 tracking-tighter uppercase break-words"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            Engineering <span className="text-[#C79A3B]">&</span> <br />
            Fabrication <span className="text-white">Solutions</span>
          </motion.h1>

          {/* LINE */}
          <motion.div
            className="w-20 sm:w-24 h-[3px] md:h-[4px] bg-[#C79A3B] mb-6 md:mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ originX: 0 }}
          />

          {/* DESCRIPTION */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 leading-relaxed max-w-xl md:max-w-2xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Delivering{" "}
            <span className="text-white font-medium">
              advanced industrial automation
            </span>
            , precision machining, and custom manufacturing designed for modern engineering sectors.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-wrap gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="/services"
              className="group bg-[#C79A3B] hover:bg-white text-[#0B2E5B] px-8 md:px-10 py-3 md:py-4 rounded-sm font-black text-[10px] md:text-xs tracking-widest shadow-xl flex items-center gap-2 transition-all duration-300"
            >
              VIEW SERVICES
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link
              href="/contact"
              className="border border-white/40 backdrop-blur-sm hover:bg-white hover:text-[#0B2E5B] text-white px-8 md:px-10 py-3 md:py-4 rounded-sm font-black text-[10px] md:text-xs tracking-widest transition-all duration-300"
            >
              CONTACT US
            </Link>
          </motion.div>

        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-[#C79A3B] to-transparent" />
        <span className="text-[8px] md:text-[10px] font-black text-white/40 tracking-[0.4em] uppercase [writing-mode:vertical-lr]">
          Scroll
        </span>
      </motion.div>

      {/* WATERMARK */}
      <div className="absolute right-10 bottom-10 hidden xl:block pointer-events-none z-10">
        <p className="text-white/[0.03] text-[12vh] font-black leading-none tracking-tighter">
          SRIVRUKSH
        </p>
      </div>

    </motion.section>
  )
}