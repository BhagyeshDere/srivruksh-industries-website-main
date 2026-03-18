"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      className="relative w-full h-[90vh] min-h-[650px] flex items-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Image
        src="/images/assets/hero.png"
        alt="Industrial Manufacturing"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E5B]/95 via-[#0B2E5B]/80 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

      <motion.div
        className="absolute -top-20 -left-20 w-96 h-96 bg-[#C79A3B]/20 blur-3xl rounded-full"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      ></motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl text-white">
          
          {/* Tagline: Blueprint Style */}
          <motion.p
            className="uppercase tracking-[0.4em] text-[10px] md:text-xs text-[#C79A3B] mb-6 font-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Precision • Engineering • Excellence
          </motion.p>

          {/* Heading: Heavy Industrial Style */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Engineering <span className="text-[#C79A3B]">&</span> <br />
            Fabrication <span className="text-white/40 font-light">Solutions</span>
          </motion.h1>

          <motion.div
            className="w-20 h-[4px] bg-[#C79A3B] mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          ></motion.div>

          {/* Description: Clean Editorial Style */}
          <motion.p
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl font-light"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Srivruksh Industries Pvt Ltd delivers <span className="text-white font-medium">advanced industrial automation</span>, 
            precision machining, and custom manufacturing designed for 
            modern engineering sectors.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Link
              href="/products"
              className="bg-[#C79A3B] hover:bg-[#b88a2d] text-[#0B2E5B] px-10 py-4 rounded-sm font-bold shadow-xl transition-all hover:tracking-widest"
            >
              VIEW PRODUCTS
            </Link>

            <Link
              href="/contact"
              className="border border-white/30 backdrop-blur-sm hover:bg-white hover:text-[#0B2E5B] px-10 py-4 rounded-sm font-bold transition-all"
            >
              CONTACT US
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </motion.section>
  )
}