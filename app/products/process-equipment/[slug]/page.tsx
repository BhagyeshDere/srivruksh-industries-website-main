"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, Cpu, Cog, Activity, Shield, Microscope, ChevronRight, Settings } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"
import { useRef } from "react"

export default function ProcessEquipmentDetailPage() {
  const { slug } = useParams()
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const product = products.find(
    (p) => p.slug === slug && p.category === "Process Equipment"
  )

  if (!product) {
    return (
      <div className="py-32 sm:py-40 text-center font-black text-[#0B2E5B] uppercase tracking-[0.3em] text-sm sm:text-base">
        Product not found
      </div>
    )
  }

  return (
    <main ref={containerRef} className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white overflow-x-hidden">

      {/* Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

      {/* ================= CONTENT ================= */}
      <section className="py-16 sm:py-24 md:py-36 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 md:gap-20 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[260px] sm:h-[400px] md:h-[550px] lg:h-[600px] group"
          >
            <div className="absolute -inset-3 sm:-inset-4 border border-slate-200 rounded-[2rem] sm:rounded-[3rem] -z-10" />
            <div className="relative h-full w-full bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-xl overflow-hidden flex items-center justify-center border border-slate-100">
               
               <div className="absolute top-4 sm:top-8 left-4 sm:left-8 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-l-2 border-slate-200" />
               <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-r-2 border-slate-200" />
               
               <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-6 sm:p-12 md:p-20 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* DETAILS */}
          <motion.div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C79A3B]">
                Technical Specification
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-[#0B2E5B] mb-6 sm:mb-8 tracking-tight leading-[1]">
              {product.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base md:text-lg lg:text-xl font-medium italic">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 mb-8 sm:mb-12">
              {[
                "High durability industrial design",
                "Precision engineered components",
                "Low maintenance & high efficiency",
                "Optimized for continuous operation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border-l-4 border-[#C79A3B] bg-white shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  <p className="text-xs sm:text-sm font-bold text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group relative inline-flex items-center gap-3 sm:gap-4 bg-[#0B2E5B] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl font-black uppercase text-[9px] sm:text-xs tracking-widest overflow-hidden shadow-xl"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= TECHNICAL SPECS ================= */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
        
        <div className="absolute top-0 right-0 p-10 sm:p-20 opacity-[0.02] pointer-events-none">
          <Microscope size={200} className="sm:w-[400px] sm:h-[400px]" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-10 sm:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0B2E5B] uppercase">
              Technical Specifications
            </h3>
            <div className="h-1.5 w-16 sm:w-24 bg-[#C79A3B] mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-px bg-slate-100 border rounded-2xl sm:rounded-3xl overflow-hidden">
            {[
              ["Operating Capacity", "High Efficiency Output", <Activity key="1" />],
              ["Material", "Industrial Grade Alloy", <Shield key="2" />],
              ["Automation Level", "Semi / Fully Automated", <Cpu key="3" />],
              ["Power Requirement", "Optimized Consumption", <Cog key="4" />],
              ["Maintenance", "Low Maintenance Design", <Settings key="5" />],
            ].map(([title, value, icon], i) => (
              <div key={i} className="bg-white p-6 sm:p-10 hover:bg-slate-50">
                <div className="mb-4 sm:mb-6 text-[#C79A3B]">{icon}</div>
                <h4 className="text-slate-400 font-bold text-[9px] sm:text-[10px] uppercase mb-1">{title}</h4>
                <p className="text-lg sm:text-xl font-black text-[#0B2E5B]">{value as string}</p>
              </div>
            ))}
            <div className="bg-[#0B2E5B] p-6 sm:p-10 flex items-center justify-center">
                <p className="text-white/60 text-xs text-center italic">
                  Compliance with Global Engineering Standards
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS + ADVANTAGES ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-20">

          {/* APPLICATIONS */}
          <motion.div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B2E5B] mb-6 sm:mb-10 uppercase border-b-4 border-[#C79A3B] inline-block">
              Applications
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {[
                "Chemical Processing Plants",
                "Food & Beverage Industry",
                "Pharmaceutical Units",
                "Oil & Gas Processing",
                "Industrial Manufacturing"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-slate-100 flex items-center justify-center">
                    <ChevronRight className="text-[#C79A3B]" size={14} />
                  </div>
                  <p className="text-sm sm:text-lg font-bold text-slate-700">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* BENEFITS */}
          <motion.div className="bg-[#0B2E5B] p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[4rem] text-white shadow-2xl">
            
            <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-10 uppercase">
              Key Advantages
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {[
                "High operational efficiency",
                "Reliable performance under load",
                "Energy-efficient design",
                "Reduced downtime",
                "Advanced engineering precision"
              ].map((text, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 items-center">
                  <div className="h-px w-6 sm:w-8 bg-[#C79A3B]" />
                  <p className="text-sm sm:text-lg text-slate-200">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  )
}