"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, Cpu, Cog, Activity, Shield, Microscope, ChevronRight, Settings } from "lucide-react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
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
      <div className="py-40 text-center font-black text-[#0B2E5B] uppercase tracking-[0.3em]">
        Product not found
      </div>
    )
  }

  return (
    <main ref={containerRef} className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white">
      {/* Progress Tracker */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

      

      {/* ================= CONTENT ================= */}
      <section className="py-24 md:py-36 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE WITH MECHANICAL FRAME */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] group"
          >
            <div className="absolute -inset-4 border border-slate-200 rounded-[3rem] -z-10 group-hover:border-[#C79A3B]/50 transition-colors duration-500" />
            <div className="relative h-full w-full bg-white rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)] overflow-hidden flex items-center justify-center border border-slate-100">
               {/* Decorative corner marks */}
               <div className="absolute top-8 left-8 w-8 h-8 border-t-2 border-l-2 border-slate-200" />
               <div className="absolute bottom-8 right-8 w-8 h-8 border-b-2 border-r-2 border-slate-200" />
               
               <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-12 md:p-20 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black text-[10px] uppercase tracking-[0.3em] text-[#C79A3B]">Technical Specification</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#0B2E5B] mb-8 tracking-tighter leading-[0.9]">
              {product.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 text-lg md:text-xl font-medium italic">
              {product.description}
            </p>

            {/* LINE STYLE FEATURES (IMPROVED) */}
            <div className="grid grid-cols-1 gap-4 mb-12">
              {[
                "High durability industrial design",
                "Precision engineered components",
                "Low maintenance & high efficiency",
                "Optimized for continuous operation"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border-l-4 border-[#C79A3B] bg-white shadow-sm hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  <p className="text-sm font-bold text-slate-700 tracking-tight">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group relative inline-flex items-center gap-4 bg-[#0B2E5B] text-white px-10 py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] overflow-hidden transition-all shadow-2xl"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= TECHNICAL SPECS (ADVANCED DATA GRID) ================= */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none rotate-12">
          <Microscope size={400} />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-[#0B2E5B] tracking-tighter uppercase">
              Technical Specifications
            </h3>
            <div className="h-2 w-24 bg-[#C79A3B] mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 overflow-hidden rounded-3xl">
            {[
              ["Operating Capacity", "High Efficiency Output", <Activity key="1" className="text-[#C79A3B]" />],
              ["Material", "Industrial Grade Alloy", <Shield key="2" className="text-[#C79A3B]" />],
              ["Automation Level", "Semi / Fully Automated", <Cpu key="3" className="text-[#C79A3B]" />],
              ["Power Requirement", "Optimized Consumption", <Cog key="4" className="text-[#C79A3B]" />],
              ["Maintenance", "Low Maintenance Design", <Settings key="5" className="text-[#C79A3B]" />],
            ].map(([title, value, icon], i) => (
              <div key={i} className="bg-white p-10 hover:bg-slate-50 transition-colors group">
                <div className="mb-6">{icon}</div>
                <h4 className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-2">{title}</h4>
                <p className="text-xl font-black text-[#0B2E5B] tracking-tight">{value as string}</p>
              </div>
            ))}
            <div className="bg-[#0B2E5B] p-10 flex items-center justify-center">
                <p className="text-white/50 text-xs font-black uppercase tracking-widest text-center italic leading-relaxed">
                  Compliance with Global <br /> Engineering Standards
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS + ADVANTAGES ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-[#0B2E5B] mb-10 uppercase tracking-tighter border-b-4 border-[#C79A3B] inline-block">
              Applications
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {[
                "Chemical Processing Plants",
                "Food & Beverage Industry",
                "Pharmaceutical Units",
                "Oil & Gas Processing",
                "Industrial Manufacturing"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#0B2E5B] transition-colors">
                    <ChevronRight className="text-[#C79A3B]" size={16} />
                  </div>
                  <p className="text-lg font-bold text-slate-700 tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B2E5B] p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden"
          >
            {/* Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            
            <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter relative z-10">
              Key Advantages
            </h3>

            <div className="space-y-6 relative z-10">
              {[
                "High operational efficiency",
                "Reliable performance under load",
                "Energy-efficient design",
                "Reduced downtime",
                "Advanced engineering precision"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-center">
                  <div className="h-px w-8 bg-[#C79A3B]" />
                  <p className="text-lg font-medium text-slate-200 tracking-tight">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      

      
    </main>
  )
}