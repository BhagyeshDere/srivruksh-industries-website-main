"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Zap, Cog, Award } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function FabricationDetailPage() {
  const { slug } = useParams()
  const { scrollYProgress } = useScroll()

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const product = products.find(
    (p) => p.slug === slug && p.category === "Fabrication"
  )

  if (!product) {
    return (
      <div className="py-24 sm:py-40 text-center font-black text-[#0B2E5B] uppercase tracking-widest text-sm sm:text-base">
        Product not found
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white overflow-x-hidden">

      {/* Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

      {/* ================= IMAGE + INTRO ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[260px] sm:h-[400px] md:h-[550px] bg-white rounded-[2rem] sm:rounded-[3rem] shadow-xl overflow-hidden group border border-slate-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-6 sm:p-12 group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black uppercase text-[9px] sm:text-xs tracking-widest text-[#C79A3B]">
                Technical Overview
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-[#0B2E5B] mb-6 sm:mb-8 tracking-tight leading-[1]">
              {product.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-6 sm:mb-10 text-sm sm:text-base md:text-lg font-medium">
              {product.description}
            </p>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {[
                "Heavy-duty steel construction",
                "Custom fabrication as per requirement",
                "Long-lasting industrial performance",
                "Precision engineered components"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl shadow-sm border border-slate-50">
                  <ShieldCheck className="text-[#C79A3B]" size={18} />
                  <span className="text-xs sm:text-sm font-bold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group relative inline-flex items-center gap-3 sm:gap-4 mt-8 sm:mt-12 bg-[#0B2E5B] text-white px-6 sm:px-10 py-3 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase text-[9px] sm:text-xs tracking-widest overflow-hidden shadow-xl"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={16} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= SPECIFICATIONS ================= */}
      <section className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4">
            <div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0B2E5B] uppercase">
                Specifications
              </h3>
              <p className="text-slate-500 mt-2 text-sm sm:text-base font-medium">
                Technical performance parameters
              </p>
            </div>
            <Cog className="text-[#C79A3B]/20 hidden md:block" size={80} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              ["Material", "Mild Steel / Stainless Steel"],
              ["Thickness", "Customizable"],
              ["Finish", "Powder Coated / Painted"],
              ["Design", "As per drawing"],
              ["Load Capacity", "Industrial Grade"],
              ["Usage", "Indoor / Outdoor"],
            ].map(([title, value], i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-sm"
              >
                <span className="text-[9px] sm:text-[10px] font-black text-[#C79A3B] uppercase tracking-widest mb-3 block">
                  Parameter {i+1}
                </span>
                <h4 className="text-slate-400 text-xs sm:text-sm font-bold mb-1">{title}</h4>
                <p className="text-lg sm:text-xl font-black text-[#0B2E5B]">{value}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-20">
          
          <motion.div>
            <h3 className="text-2xl sm:text-4xl font-black text-[#0B2E5B] mb-6 sm:mb-10 uppercase">
              Applications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-6 sm:gap-x-12">
              {[
                "Industrial Plants",
                "Construction Sites",
                "Warehouses",
                "Infrastructure Projects",
                "Manufacturing Units",
                "Heavy Engineering"
              ].map((app, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-2 h-2 rounded-full bg-[#C79A3B]" />
                  <p className="text-sm sm:text-lg font-bold text-slate-600">{app}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="bg-[#0B2E5B] p-6 sm:p-12 rounded-[2rem] sm:rounded-[3rem] text-white shadow-2xl relative">
            
            <Award className="absolute top-6 sm:top-10 right-6 sm:right-10 text-white/5" size={80} />

            <h3 className="text-2xl sm:text-4xl font-black mb-6 sm:mb-10 uppercase">
              Why Choose Us
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {[
                "Experienced fabrication team",
                "Advanced machinery & tools",
                "Strict quality control",
                "Timely delivery",
                "Custom solutions",
                "Competitive pricing"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-4">
                  <Zap size={16} className="text-[#C79A3B]" />
                  <p className="text-sm sm:text-base text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  )
}