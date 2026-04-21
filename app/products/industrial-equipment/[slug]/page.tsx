"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Settings2, 
  Zap, 
  Activity, 
  Ruler, 
  ChevronRight,
  Factory,
  CheckCircle2 
} from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function IndustrialEquipmentDetailPage() {
  const { slug } = useParams()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Synchronized with dynamic slug and industrial category
  const product = products.find(
    (p) => p.slug === slug
  )

  if (!product) {
    return (
      <div className="py-40 text-center font-black text-slate-900 uppercase tracking-[0.4em] text-xs">
        System Error: Asset Not Located In Registry
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white overflow-x-hidden">
      
      {/* Industrial Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

      {/* ================= HERO SECTION ================= */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-20 items-center">

          {/* ASSET VISUALIZER (Blueprint Style) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square bg-white rounded-[2.5rem] sm:rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)] overflow-hidden group border border-slate-100"
          >
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#0f172a 1.5px, transparent 1.5px)`, backgroundSize: '30px 30px' }} 
            />
            
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-10 sm:p-20 group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />

            {/* Serial Number Decal */}
            <div className="absolute bottom-10 left-10 flex items-center gap-4">
               <div className="w-12 h-[1px] bg-[#C79A3B]" />
               <span className="text-[10px] font-black text-slate-400 tracking-[0.3em] uppercase">
                 IND_SPEC_{product.slug.slice(0, 4)}
               </span>
            </div>
          </motion.div>

          {/* ASSET DATA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 px-4 py-1.5 bg-slate-900 rounded-full">
              <Activity size={12} className="text-[#C79A3B]" />
              <span className="font-black text-[9px] uppercase tracking-[0.3em] text-white">
                Structural Integrity Verified
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#0f172a] mb-8 tracking-tighter leading-[0.9] uppercase">
              {product.title}
            </h1>

            <p className="text-slate-500 leading-relaxed mb-12 text-base sm:text-lg font-medium border-l-4 border-[#C79A3B] pl-6 max-w-xl italic">
              {product.description}
            </p>

            {/* QUICK STAT GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Durability", text: "Industrial Grade", icon: ShieldCheck },
                { label: "Engineering", text: "Precision Built", icon: Settings2 },
                { label: "Design", text: "Custom Geometry", icon: Ruler },
                { label: "Efficiency", text: "Peak Performance", icon: Zap },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-[#C79A3B]/30 transition-colors">
                  <div className="p-2.5 bg-slate-50 rounded-xl">
                    <item.icon className="text-[#C79A3B]" size={20} />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-0.5">{item.label}</p>
                    <p className="text-xs sm:text-sm font-black text-slate-900 uppercase">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group relative inline-flex items-center gap-6 mt-12 bg-[#0f172a] text-white px-10 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] overflow-hidden transition-all shadow-2xl hover:shadow-[#0f172a]/20 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= TECHNICAL MATRIX (Dark Theme) ================= */}
      <section className="bg-slate-900 py-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-4">
                Engineering <span className="text-[#C79A3B]">Parameters</span>
              </h3>
              <div className="h-1.5 w-24 bg-[#C79A3B]" />
            </div>
            <Cpu className="text-white/5 hidden lg:block" size={120} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Material Composition", "High-Strength Alloy / SS"],
              ["Fabrication Method", "CNC Precision Fabricated"],
              ["Surface Treatment", "Thermal Powder Coating"],
              ["Tolerance Levels", "Military-Grade Precision"],
              ["Operational Load", "Dynamic Industrial Rating"],
              ["Standard Compliance", "ANSI / ASME Certified"],
            ].map(([title, value], i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/10 flex flex-col justify-between group hover:bg-[#C79A3B] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-10">
                  <span className="text-[10px] font-black text-[#C79A3B] group-hover:text-slate-900 uppercase tracking-widest">
                    Data_Point_0{i+1}
                  </span>
                  <ChevronRight size={14} className="text-white/20 group-hover:text-slate-900 transition-colors" />
                </div>
                <div>
                  <h4 className="text-slate-400 group-hover:text-slate-800 text-[10px] font-bold mb-1 uppercase tracking-tighter">
                    {title}
                  </h4>
                  <p className="text-lg sm:text-xl font-black text-white group-hover:text-slate-900 tracking-tight uppercase">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTORS & ADVANTAGE ================= */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-start">

          {/* LEFT: DEPLOYMENT SECTORS */}
          <motion.div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <Factory className="text-[#C79A3B]" size={28} />
              </div>
              <h3 className="text-3xl font-black text-[#0f172a] uppercase tracking-tighter">
                Deployment Sectors
              </h3>
            </div>

            <div className="space-y-8">
              {[
                "Heavy Manufacturing",
                "Automotive Assembly",
                "Aerospace Logistics",
                "Structural Engineering",
                "Chemical Processing"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-6 group cursor-default">
                  <span className="text-2xl font-black text-slate-200 group-hover:text-[#C79A3B] transition-colors">
                    0{i+1}
                  </span>
                  <p className="text-base sm:text-xl font-black text-slate-800 uppercase tracking-tight">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: INDUSTRIAL ADVANTAGE CARD */}
          <motion.div className="bg-[#0f172a] p-10 sm:p-16 rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C79A3B]/10 rounded-full blur-[80px] -mr-32 -mt-32" />
            
            <h3 className="text-3xl font-black mb-12 uppercase tracking-tighter leading-tight">
              Industrial <span className="text-[#C79A3B]">Advantage</span>
            </h3>

            <div className="space-y-8 relative z-10">
              {[
                "Zero-Failure Tolerance Engineering",
                "Advanced Material Traceability",
                "24/7 Continuous Duty Cycle",
                "Modular Maintenance Architecture",
                "Precision Dynamic Load Balancing"
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-5">
                  <CheckCircle2 size={22} className="text-[#C79A3B] shrink-0 mt-1" />
                  <p className="text-base text-slate-300 font-medium leading-relaxed">
                    {point}
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