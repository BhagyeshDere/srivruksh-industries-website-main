"use client"

import { motion } from "framer-motion"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden bg-[#f8fafc]">

      {/* 🔥 Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B2E5B]/5 via-white to-[#C79A3B]/10" />

      {/* 🔥 Glow Effects */}
      <motion.div
        className="absolute -top-24 sm:-top-32 -left-24 sm:-left-32 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-[#C79A3B]/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-[-100px] sm:bottom-[-150px] right-[-100px] sm:right-[-150px] w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-[#0B2E5B]/20 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]"
        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* 🔥 Grid Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(90deg,#0B2E5B_1px,transparent_1px),linear-gradient(180deg,#0B2E5B_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:50px_50px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Tag */}
          <div className="inline-block mb-5 sm:mb-6 px-4 sm:px-6 py-2 rounded-full bg-white border border-gray-200 text-[10px] sm:text-xs text-[#C79A3B] tracking-[0.25em] sm:tracking-[0.3em] uppercase font-bold shadow-sm">
            Let’s Build Together
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B2E5B] mb-5 sm:mb-6 leading-tight">
            READY TO START YOUR <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">
              INDUSTRIAL PROJECT?
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed px-2">
            We deliver high-performance engineering, fabrication, and automation
            solutions tailored to your business needs with precision and reliability.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full">

            {/* Primary */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-3 bg-[#0B2E5B] text-white w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-xl hover:scale-105 transition overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition" />
              </span>

              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition"></span>
            </Link>

            {/* Secondary */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 border border-[#0B2E5B]/20 text-[#0B2E5B] w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:bg-[#0B2E5B] hover:text-white transition"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Us
            </Link>

          </div>

        </motion.div>
      </div>
    </section>
  )
}