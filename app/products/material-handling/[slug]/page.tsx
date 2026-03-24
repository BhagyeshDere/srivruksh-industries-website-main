"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Cpu, Settings, Factory, CheckCircle2 } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function ProductDetailPage() {
  const { slug } = useParams()
  
  // Reading progress bar
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
      <div className="py-40 text-center font-black text-[#0B2E5B] uppercase tracking-widest">
        Product not found
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white">
      {/* Top Reading Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

     
      {/* ================= CONTENT ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE WITH VIEWPORT ANIMATION */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[350px] md:h-[550px] bg-white rounded-[3rem] shadow-2xl overflow-hidden group border border-slate-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50" />
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-12 md:p-20 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>

          {/* DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black text-xs uppercase tracking-widest text-[#C79A3B]">Product Specification</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-[#0B2E5B] mb-8 tracking-tighter leading-none">
              {product.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium italic">
              {product.description}
            </p>

            {/* FEATURES (ELEVATED STYLE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "High-performance industrial design",
                "Durable & corrosion-resistant materials",
                "Custom-built solutions available",
                "Optimized for long-term use"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-slate-50 shadow-sm">
                  <ShieldCheck className="text-[#C79A3B] mt-0.5 shrink-0" size={18} />
                  <p className="text-sm font-bold text-slate-700 leading-tight">{feature}</p>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${product.title}`}
              className="group relative inline-flex items-center gap-4 mt-12 bg-[#0B2E5B] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-widest overflow-hidden transition-all shadow-xl hover:shadow-[#0B2E5B]/20"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= SPECIFICATIONS (BENTO STYLE) ================= */}
      <section className="bg-white py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-[#0B2E5B] tracking-tight uppercase">
                Technical Details
              </h3>
              <div className="h-1.5 w-20 bg-[#C79A3B] mt-4" />
            </div>
            <Cpu className="text-slate-100 hidden md:block" size={80} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex flex-col justify-between group transition-colors hover:bg-[#0B2E5B] hover:text-white"
              >
                <span className="text-[10px] font-black text-[#C79A3B] uppercase tracking-widest mb-6">Component_{i+1}</span>
                <div>
                  <h4 className="text-slate-400 group-hover:text-slate-300 text-xs font-bold mb-1 uppercase">{title}</h4>
                  <p className="text-xl font-black tracking-tight">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS + BENEFITS ================= */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">

          {/* APPLICATIONS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-10">
              <Factory className="text-[#C79A3B]" size={32} />
              <h3 className="text-3xl font-black text-[#0B2E5B] uppercase tracking-tighter">
                Applications
              </h3>
            </div>

            <div className="space-y-6">
              {[
                "• Manufacturing Industries",
                "• Infrastructure Projects",
                "• Warehousing & Logistics",
                "• Engineering Applications",
                "• Heavy Industrial Usage"
              ].map((text, i) => (
                <p key={i} className="text-xl font-bold text-slate-600 tracking-tight flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  {text.replace("• ", "")}
                </p>
              ))}
            </div>
          </motion.div>

          {/* BENEFITS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B2E5B] p-12 md:p-16 rounded-[3rem] text-white relative shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <ShieldCheck size={120} />
            </div>
            
            <h3 className="text-3xl font-black mb-10 uppercase tracking-tighter relative z-10">
              Key Benefits
            </h3>

            <div className="space-y-6 relative z-10">
              {[
                "High durability & reliability",
                "Low maintenance requirements",
                "Customizable design options",
                "Cost-effective long-term solution",
                "Enhanced operational efficiency"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4">
                  <CheckCircle2 size={20} className="text-[#C79A3B]" />
                  <p className="text-lg font-medium text-slate-200">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      

      
    </main>
  )
}