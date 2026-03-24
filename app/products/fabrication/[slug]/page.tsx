"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, Hammer, ShieldCheck, Zap, Cog, Award } from "lucide-react"
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
      <div className="py-40 text-center font-black text-[#0B2E5B] uppercase tracking-widest">
        Product not found
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white">
      {/* Top Reading Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />


      {/* ================= IMAGE + INTRO ================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] bg-white rounded-[3rem] shadow-2xl overflow-hidden group border border-slate-100"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-12 group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-[#C79A3B]" />
              <span className="font-black uppercase text-xs tracking-widest text-[#C79A3B]">Technical Overview</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-[#0B2E5B] mb-8 tracking-tighter leading-none">
              {product.title}
            </h2>

            <p className="text-slate-600 leading-relaxed mb-10 text-lg font-medium">
              {product.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Heavy-duty steel construction",
                "Custom fabrication as per requirement",
                "Long-lasting industrial performance",
                "Precision engineered components"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm border border-slate-50">
                  <ShieldCheck className="text-[#C79A3B]" size={20} />
                  <span className="text-sm font-bold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group relative inline-flex items-center gap-4 mt-12 bg-[#0B2E5B] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] overflow-hidden transition-all shadow-xl hover:shadow-[#0B2E5B]/20"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ================= SPECIFICATIONS (MODERN BENTO STYLE) ================= */}
      <section className="bg-slate-50 py-24 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-[#0B2E5B] tracking-tight uppercase">
                Specifications
              </h3>
              <p className="text-slate-500 mt-2 font-medium">Technical performance parameters</p>
            </div>
            <Cog className="text-[#C79A3B]/20" size={80} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between"
              >
                <span className="text-[10px] font-black text-[#C79A3B] uppercase tracking-[0.3em] mb-4 block">Parameter {i+1}</span>
                <div>
                  <h4 className="text-slate-400 text-sm font-bold mb-1">{title}</h4>
                  <p className="text-xl font-black text-[#0B2E5B] tracking-tight">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-black text-[#0B2E5B] mb-10 tracking-tight uppercase">
              Applications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              {[
                "Industrial Plants",
                "Construction Sites",
                "Warehouses",
                "Infrastructure Projects",
                "Manufacturing Units",
                "Heavy Engineering"
              ].map((app, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-2 h-2 rounded-full bg-[#C79A3B] group-hover:scale-150 transition-transform" />
                  <p className="text-lg font-bold text-slate-600 tracking-tight">{app}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#0B2E5B] p-12 rounded-[3rem] text-white relative shadow-2xl"
          >
            <Award className="absolute top-10 right-10 text-white/5" size={120} />
            <h3 className="text-4xl font-black mb-10 tracking-tight uppercase">
              Why Choose Us
            </h3>
            <div className="space-y-6">
              {[
                "Experienced fabrication team",
                "Advanced machinery & tools",
                "Strict quality control",
                "Timely delivery",
                "Custom solutions",
                "Competitive pricing"
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Zap size={18} className="text-[#C79A3B]" />
                  <p className="text-base font-medium text-slate-200">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>


      
    </main>
  )
}