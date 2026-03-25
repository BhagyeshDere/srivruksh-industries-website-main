"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, HardHat, Compass, BarChart3, CheckCircle2 } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function InfrastructureDetailPage() {
  const { slug } = useParams()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const product = products.find(
    (p) => p.slug === slug && p.category === "Infrastructure"
  )

  if (!product) {
    return (
      <div className="py-24 sm:py-40 text-center font-black text-[#0B2E5B] uppercase tracking-[0.3em] text-sm sm:text-base">
        Product not found
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white overflow-x-hidden">

      {/* Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

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
            <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-24 sm:w-40 h-24 sm:h-40 border-l-2 border-t-2 border-[#C79A3B]/20" />

            <div className="absolute inset-0 bg-white rounded-[2rem] sm:rounded-3xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0B2E5B 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
              
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-6 sm:p-12 group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-20 sm:w-32 h-20 sm:h-32 bg-[#C79A3B] rounded-xl sm:rounded-2xl opacity-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
          </motion.div>

          {/* DETAILS */}
          <motion.div>
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C79A3B]">
                Technical Asset
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
                "High strength structural design",
                "Corrosion-resistant materials",
                "Built for large-scale infrastructure projects",
                "Reliable long-term performance"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl border border-slate-100 shadow-sm">
                  <CheckCircle2 className="text-[#C79A3B]" size={18} />
                  <p className="text-xs sm:text-sm font-bold text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group inline-flex items-center gap-3 sm:gap-5 mt-8 sm:mt-12 bg-[#0B2E5B] text-white px-6 sm:px-10 py-3 sm:py-5 rounded-lg sm:rounded-sm font-black uppercase text-[9px] sm:text-xs tracking-widest shadow-xl"
            >
              Enquire Now
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= SPECIFICATIONS ================= */}
      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">

        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 opacity-[0.03] pointer-events-none hidden md:block">
          <p className="text-6xl lg:text-9xl font-black uppercase">DATA_SHEET</p>
        </div>

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4">
            <div>
              <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#0B2E5B] uppercase">
                Technical Specifications
              </h3>
              <div className="h-1.5 w-16 sm:w-24 bg-[#C79A3B] mt-3 sm:mt-4" />
            </div>
            <BarChart3 className="text-slate-100 hidden md:block" size={80} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 sm:gap-x-20 gap-y-3 sm:gap-y-4">
            {[
              ["Material Grade", "Structural Steel / Alloy Steel"],
              ["Surface Treatment", "Galvanized / Coated"],
              ["Load Bearing", "High Load Capacity"],
              ["Design Compliance", "As per Industrial Standards"],
              ["Environment", "Suitable for harsh conditions"],
            ].map(([title, value], i) => (
              <motion.div 
                key={i}
                className="flex items-center justify-between py-4 sm:py-6 border-b border-slate-100"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-500 uppercase">
                  {title}
                </span>
                <span className="text-sm sm:text-lg font-black text-[#0B2E5B] text-right">
                  {value}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 lg:gap-32">

          <div>
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-10">
              <Compass className="text-[#C79A3B]" size={26} />
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0B2E5B] uppercase">
                Applications
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                "Bridges & Flyovers",
                "Industrial Infrastructure",
                "Commercial Complexes",
                "Warehousing Systems",
                "Energy & Utility Projects"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-3 sm:gap-6">
                   <span className="text-slate-300 font-black text-xl sm:text-4xl">
                     {`0${i+1}`}
                   </span>
                   <p className="text-sm sm:text-xl font-bold text-slate-700">
                     {text}
                   </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0B2E5B] p-6 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#C79A3B]/10 rounded-full -mr-10 -mt-10 blur-3xl" />
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-6 sm:mb-10 uppercase">
              Key Advantages
            </h3>

            <div className="space-y-4 sm:space-y-8">
              {[
                "Superior structural stability",
                "Long service life",
                "Low maintenance",
                "Custom engineered solutions",
                "Efficient installation"
              ].map((item, i) => (
                <div key={i} className="flex gap-3 sm:gap-5">
                  <div className="w-4 sm:w-6 h-4 sm:h-6 rounded-full border-2 border-[#C79A3B] flex items-center justify-center">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#C79A3B] rounded-full" />
                  </div>
                  <p className="text-sm sm:text-lg text-slate-200">{item}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}