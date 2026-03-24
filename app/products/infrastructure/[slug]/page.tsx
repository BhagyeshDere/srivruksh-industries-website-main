"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, Building2, HardHat, Compass, BarChart3, CheckCircle2 } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function InfrastructureDetailPage() {
  const { slug } = useParams()
  
  // Scroll progress for the top bar
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
      <div className="py-40 text-center font-black text-[#0B2E5B] uppercase tracking-[0.3em]">
        Product not found
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white">
      {/* Top Reading Progress */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />


      {/* ================= CONTENT ================= */}
      <section className="py-24 md:py-36 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] group"
          >
            {/* Geometric Accent Decoration */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-l-2 border-t-2 border-[#C79A3B]/20" />
            <div className="absolute inset-0 bg-white rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0B2E5B 2px, transparent 2px)', backgroundSize: '20px 20px' }} />
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-12 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C79A3B] rounded-2xl -z-10 opacity-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black text-xs uppercase tracking-[0.3em] text-[#C79A3B]">Technical Asset</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#0B2E5B] mb-8 tracking-tighter leading-none">
              {product.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 text-lg md:text-xl font-medium">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                "High strength structural design",
                "Corrosion-resistant materials",
                "Built for large-scale infrastructure projects",
                "Reliable long-term performance"
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <CheckCircle2 className="text-[#C79A3B] shrink-0" size={20} />
                  <p className="text-sm font-bold text-slate-700 leading-snug">{item}</p>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group relative inline-flex items-center gap-5 mt-12 bg-[#0B2E5B] text-white px-10 py-5 rounded-sm font-black uppercase text-xs tracking-[0.25em] overflow-hidden transition-all shadow-2xl"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= SPECIFICATIONS (MODERN DATA STRIP) ================= */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        {/* Side Watermark */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 opacity-[0.03] select-none pointer-events-none">
          <p className="text-9xl font-black uppercase tracking-widest">DATA_SHEET</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-[#0B2E5B] tracking-tight uppercase">
                Technical Specifications
              </h3>
              <div className="h-1.5 w-24 bg-[#C79A3B] mt-4" />
            </div>
            <BarChart3 className="text-slate-100" size={100} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-4">
            {[
              ["Material Grade", "Structural Steel / Alloy Steel"],
              ["Surface Treatment", "Galvanized / Coated"],
              ["Load Bearing", "High Load Capacity"],
              ["Design Compliance", "As per Industrial Standards"],
              ["Environment", "Suitable for harsh conditions"],
            ].map(([title, value], i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between py-6 border-b border-slate-100 group"
              >
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-[#C79A3B] uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">PARAM_{i+1}</span>
                  <span className="text-slate-500 font-bold uppercase text-xs tracking-wider">{title}</span>
                </div>
                <span className="font-black text-[#0B2E5B] text-right md:text-lg tracking-tight uppercase">{value}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS + ADVANTAGES ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-32">

          <div>
            <div className="flex items-center gap-4 mb-10">
              <Compass className="text-[#C79A3B]" size={32} />
              <h3 className="text-3xl md:text-4xl font-black text-[#0B2E5B] uppercase tracking-tighter">
                Applications
              </h3>
            </div>

            <div className="space-y-6">
              {[
                "Bridges & Flyovers",
                "Industrial Infrastructure",
                "Commercial Complexes",
                "Warehousing Systems",
                "Energy & Utility Projects"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-6 group">
                   <span className="text-slate-200 font-black text-4xl group-hover:text-[#C79A3B] transition-colors">{`0${i+1}`}</span>
                   <p className="text-xl font-bold text-slate-700 tracking-tight group-hover:translate-x-2 transition-transform">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0B2E5B] p-12 md:p-20 rounded-[4rem] text-white relative shadow-2xl overflow-hidden">
             {/* Abstract pattern */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#C79A3B]/10 rounded-full -mr-20 -mt-20 blur-3xl" />
            
            <h3 className="text-3xl md:text-4xl font-black mb-10 uppercase tracking-tighter relative z-10">
              Key Advantages
            </h3>

            <div className="space-y-8 relative z-10">
              {[
                "Superior structural stability",
                "Long service life",
                "Low maintenance",
                "Custom engineered solutions",
                "Efficient installation"
              ].map((item, i) => (
                <div key={i} className="flex gap-5 items-start">
                  <div className="w-6 h-6 rounded-full border-2 border-[#C79A3B] flex items-center justify-center shrink-0 mt-1">
                    <div className="w-2 h-2 bg-[#C79A3B] rounded-full" />
                  </div>
                  <p className="text-lg font-medium text-slate-200 tracking-tight leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

     

      
    </main>
  )
}