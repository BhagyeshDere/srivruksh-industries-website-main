"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Cpu, Settings, Factory, CheckCircle2 } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function ProductDetailPage() {
  const { slug } = useParams()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const product = products.find(
    (p) => p.slug === slug
  )

  if (!product) {
    return (
      <div className="py-32 sm:py-40 text-center font-black text-[#0B2E5B] uppercase tracking-widest text-sm sm:text-base">
        Product not found
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white overflow-x-hidden">

      {/* Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

      {/* ================= CONTENT ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">

          {/* IMAGE */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[260px] sm:h-[350px] md:h-[500px] lg:h-[550px] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden group border border-slate-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50" />
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-6 sm:p-10 md:p-20 group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black text-[10px] sm:text-xs uppercase tracking-widest text-[#C79A3B]">
                Product Specification
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-[#0B2E5B] mb-6 sm:mb-8 tracking-tight leading-tight">
              {product.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base md:text-lg font-medium italic">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "High-performance industrial design",
                "Durable & corrosion-resistant materials",
                "Custom-built solutions available",
                "Optimized for long-term use"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl border border-slate-50 shadow-sm">
                  <ShieldCheck className="text-[#C79A3B] mt-0.5 shrink-0" size={16} />
                  <p className="text-xs sm:text-sm font-bold text-slate-700 leading-tight">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${product.title}`}
              className="group relative inline-flex items-center gap-3 sm:gap-4 mt-8 sm:mt-12 bg-[#0B2E5B] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-xl sm:rounded-2xl font-black uppercase text-[9px] sm:text-xs tracking-widest overflow-hidden transition-all shadow-xl hover:shadow-[#0B2E5B]/20"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= SPECIFICATIONS ================= */}
      <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-16 gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2E5B] uppercase">
                Technical Details
              </h3>
              <div className="h-1.5 w-16 sm:w-20 bg-[#C79A3B] mt-3 sm:mt-4" />
            </div>
            <Cpu className="text-slate-100 hidden md:block" size={80} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              ["Material", "Industrial Grade Steel"],
              ["Surface Finish", "Coated / Painted"],
              ["Design", "Custom Engineered"],
              ["Durability", "High Strength Performance"],
              ["Application Type", "Multi-purpose Industrial Use"],
            ].map(([title, value], i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-slate-50 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] border border-slate-100 flex flex-col justify-between group hover:bg-[#0B2E5B] hover:text-white transition"
              >
                <span className="text-[9px] sm:text-[10px] font-black text-[#C79A3B] uppercase tracking-widest mb-4 sm:mb-6">
                  Component_{i+1}
                </span>
                <div>
                  <h4 className="text-slate-400 group-hover:text-slate-300 text-[10px] sm:text-xs font-bold mb-1 uppercase">
                    {title}
                  </h4>
                  <p className="text-lg sm:text-xl font-black tracking-tight">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS + BENEFITS ================= */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">

          {/* APPLICATIONS */}
          <motion.div>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <Factory className="text-[#C79A3B]" size={26} />
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B2E5B] uppercase">
                Applications
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                "Manufacturing Industries",
                "Infrastructure Projects",
                "Warehousing & Logistics",
                "Engineering Applications",
                "Heavy Industrial Usage"
              ].map((text, i) => (
                <p key={i} className="text-base sm:text-xl font-bold text-slate-600 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  {text}
                </p>
              ))}
            </div>
          </motion.div>

          {/* BENEFITS */}
          <motion.div className="bg-[#0B2E5B] p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] text-white shadow-2xl">
            
            <h3 className="text-2xl sm:text-3xl font-black mb-6 sm:mb-10 uppercase">
              Key Benefits
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {[
                "High durability & reliability",
                "Low maintenance requirements",
                "Customizable design options",
                "Cost-effective long-term solution",
                "Enhanced operational efficiency"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <CheckCircle2 size={18} className="text-[#C79A3B]" />
                  <p className="text-sm sm:text-lg text-slate-200">
                    {benefit}
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