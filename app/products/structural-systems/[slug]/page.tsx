"use client"

import { useParams } from "next/navigation"
import { products } from "@/data/products"
import Image from "next/image"
import { ArrowRight, ShieldCheck, Ruler, Settings2, Construction, CheckCircle2, Activity, Cpu, Box, HardHat } from "lucide-react"
import { motion, useScroll, useSpring } from "framer-motion"

export default function StructuralSystemsDetailPage() {
  const { slug } = useParams()
  
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Logical Filter: Specifically target Structural/Infrastructure items
  const product = products.find(
    (p) => p.slug === slug && (p.category === "Infrastructure" || p.category === "Structural Systems")
  )

  if (!product) {
    return (
      <div className="py-40 text-center font-black text-[#0f172a] uppercase tracking-[0.5em] text-xs">
        System Registry Error: Asset_{slug} Not Found
      </div>
    )
  }

  return (
    <main className="bg-[#f8fafc] min-h-screen selection:bg-[#C79A3B] selection:text-white overflow-x-hidden font-sans">

      {/* Industrial Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-[#C79A3B] z-50 origin-left" style={{ scaleX }} />

      {/* ================= HERO / ASSET VISUALIZER ================= */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
        
       

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 sm:gap-24 items-center">

          {/* ASSET IMAGE - BLUEPRINT VISUALIZER */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-square bg-white rounded-[3rem] sm:rounded-[4.5rem] shadow-[0_50px_100px_-20px_rgba(15,23,42,0.12)] overflow-hidden group border border-slate-100"
          >
            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#0f172a 1.5px, transparent 1.5px)`, backgroundSize: '32px 32px' }} 
            />
            
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain p-12 sm:p-24 group-hover:scale-105 transition-transform duration-1000 ease-out"
              priority
            />

            {/* Asset ID Tag */}
            <div className="absolute bottom-12 left-12 flex items-center gap-4">
               <div className="h-px w-12 bg-[#C79A3B]" />
               <span className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase">
                 Serial_Ref: {product.slug.toUpperCase()}
               </span>
            </div>
          </motion.div>

          {/* ASSET DATA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-10 px-4 py-1.5 bg-slate-900 rounded-full">
              <Activity size={12} className="text-[#C79A3B]" />
              <span className="font-black text-[9px] uppercase tracking-[0.3em] text-white">
                Certified Engineering Asset
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#0f172a] mb-10 tracking-tighter leading-[0.85] uppercase">
              {product.title}
            </h1>

            <p className="text-slate-500 leading-relaxed mb-14 text-base sm:text-xl font-medium border-l-[6px] border-[#C79A3B] pl-8 max-w-xl italic">
              {product.description}
            </p>

            {/* TECHNICAL GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { label: "Durability", text: "Heavy Gauge Structural Steel", icon: ShieldCheck },
                { label: "Engineering", text: "Precision CAD Alignment", icon: Settings2 },
                { label: "Metrics", text: "Static & Dynamic Stability", icon: Ruler },
                { label: "Safety", text: "ISO Industrial Compliant", icon: HardHat },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm group hover:border-[#C79A3B]/40 transition-all">
                  <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-[#C79A3B]/10 transition-colors">
                    <item.icon className="text-[#C79A3B]" size={22} />
                  </div>
                  <div>
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                    <p className="text-xs sm:text-sm font-black text-slate-900 uppercase">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`/contact?product=${encodeURIComponent(product.title)}`}
              className="group relative inline-flex items-center gap-8 mt-14 bg-[#0f172a] text-white px-12 py-6 rounded-2xl font-black uppercase text-[10px] tracking-[0.3em] overflow-hidden transition-all shadow-2xl hover:shadow-[#0f172a]/30 w-full sm:w-auto justify-center"
            >
              <span className="relative z-10">Enquire Now</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#C79A3B] translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out" />
            </a>
          </motion.div>

        </div>
      </section>

      {/* ================= TECHNICAL MATRIX (DARK BLUEPRINT) ================= */}
      <section className="bg-slate-900 py-28 px-4 sm:px-6 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-xl">
              <h3 className="text-4xl sm:text-6xl font-black text-white uppercase tracking-tighter mb-6">
                Technical <span className="text-[#C79A3B]">Matrix</span>
              </h3>
              <div className="h-2 w-32 bg-[#C79A3B]" />
            </div>
            <Cpu className="text-white/5 hidden lg:block animate-pulse" size={140} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ["Material Grade", "IS 2062 Structural Steel"],
              ["Finish System", "Epoxy Coated / Galvanized"],
              ["Loading Spec", "PSI Rated per Footprint"],
              ["Connection Type", "Precision Bolt / Specialized Weld"],
              ["Service Life", "Zero-Maintenance Lifecycle"],
              ["Installation", "Modular Rapid Assembly"],
            ].map(([title, value], i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] border border-white/10 flex flex-col justify-between group hover:bg-[#C79A3B] transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-12">
                   <span className="text-[10px] font-black text-[#C79A3B] group-hover:text-slate-900 uppercase tracking-widest">
                     Metric_0{i+1}
                   </span>
                   <Box size={16} className="text-white/20 group-hover:text-slate-900 transition-colors" />
                </div>
                <div>
                  <h4 className="text-slate-400 group-hover:text-slate-800 text-[10px] font-bold mb-2 uppercase tracking-widest">
                    {title}
                  </h4>
                  <p className="text-xl sm:text-2xl font-black text-white group-hover:text-slate-900 tracking-tight uppercase">
                    {value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTOR APPLICATIONS ================= */}
      <section className="py-24 sm:py-36 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-start">

          {/* LEFT CONTENT */}
          <motion.div>
            <div className="flex items-center gap-5 mb-14">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <Construction className="text-[#0f172a]" size={32} />
              </div>
              <h3 className="text-4xl font-black text-[#0f172a] uppercase tracking-tighter">
                Sector Applications
              </h3>
            </div>

            <div className="space-y-10">
              {[
                "Heavy-Duty Industrial Platforms",
                "Infrastructure Mezzanines",
                "Specialized Support Girders",
                "Logistics Distribution Skeletons",
                "Advanced Manufacturing Bases"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-8 group cursor-default">
                  <span className="text-3xl font-black text-slate-100 group-hover:text-[#C79A3B] transition-colors duration-300">
                    0{i+1}
                  </span>
                  <p className="text-lg sm:text-2xl font-black text-slate-800 uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: CORE BENEFITS */}
          <motion.div className="bg-[#0f172a] p-12 sm:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C79A3B]/10 rounded-full blur-[100px] -mr-40 -mt-40" />
            
            <h3 className="text-4xl font-black mb-14 uppercase tracking-tighter leading-tight">
              The <span className="text-[#C79A3B]">Foundational</span> Edge
            </h3>

            <div className="space-y-10 relative z-10">
              {[
                "Maximum stability under seismic conditions",
                "Long-term structural integrity with low wear",
                "Modular designs for rapid onsite execution",
                "Optimized weight-to-strength engineering",
                "Custom configurations for unique footprints"
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-6">
                  <CheckCircle2 size={24} className="text-[#C79A3B] shrink-0 mt-1" />
                  <p className="text-lg text-slate-300 font-medium leading-relaxed">
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