"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Shield, Layers, Settings2, Cpu, Activity } from "lucide-react"
import { products } from "@/data/products"

export default function ProcessEquipmentPage() {
  const filteredProducts = products.filter(
    (p) => p.category === "Process Equipment"
  )

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0B2E5B] py-24 sm:py-28 md:py-36 lg:py-48 px-4 sm:px-6 overflow-hidden">

        {/* Responsive circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[800px] h-[300px] sm:h-[500px] md:h-[800px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[350px] md:w-[600px] h-[200px] sm:h-[350px] md:h-[600px] border border-white/5 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] sm:w-[250px] md:w-[400px] h-[120px] sm:h-[250px] md:h-[400px] border border-white/5 rounded-full pointer-events-none" />
        
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none" 
          style={{ 
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
            backgroundSize: '80px 80px md:100px 100px' 
          }} 
        />
        
        {/* BIG TEXT FIX */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[35vw] sm:text-[25vw] md:text-[18vw] font-black tracking-tight leading-none uppercase text-white">
            Systems
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center px-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-sm bg-gradient-to-r from-[#C79A3B] to-[#e6c36a] text-[#0B2E5B] mb-6 sm:mb-8 shadow-xl"
          >
            <Cpu size={12} className="animate-pulse" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">
              Integrated Processing
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[0.9] text-center mb-4 sm:mb-6"
          >
            Process <br />
            <span className="text-[#C79A3B]">Equipment</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-md sm:max-w-xl md:max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed px-2"
          >
            Advanced thermal, chemical, and mechanical processing systems engineered 
            for maximum yield and industrial precision.
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            <AnimatePresence>
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 flex flex-col"
                >

                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                    style={{ backgroundImage: `radial-gradient(#0B2E5B 1.5px, transparent 1.5px)`, backgroundSize: '20px 20px sm:24px 24px' }} 
                  />

                  {/* Top Status */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
                      <span className="text-[8px] sm:text-[9px] font-black text-[#0B2E5B]/40 uppercase tracking-widest">
                        PRC-UNIT-{index + 401}
                      </span>
                    </div>
                    <Shield size={12} className="text-[#0B2E5B]/10 group-hover:text-[#C79A3B]" />
                  </div>

                  {/* IMAGE */}
                  <div className="relative h-[200px] sm:h-[240px] md:h-[300px] w-full mt-6 sm:mt-8">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 sm:p-10 md:p-12 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-8 md:p-10 bg-gradient-to-t from-slate-50/50 to-transparent relative border-t border-slate-50">
                    
                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                      <div className="w-5 sm:w-6 h-[2px] bg-[#C79A3B]" />
                      <span className="text-[#C79A3B] font-black text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                        System Critical Asset
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-[#0B2E5B] mb-3 sm:mb-4 tracking-tight uppercase leading-[1]">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 mb-5 sm:mb-6 leading-relaxed font-medium text-xs sm:text-sm line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={`/products/process-equipment/${item.slug}`}
                        className="relative overflow-hidden group/btn inline-flex items-center gap-2 sm:gap-3 bg-[#0B2E5B] text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl font-black uppercase text-[8px] sm:text-[9px] tracking-widest shadow-lg hover:pr-8 sm:hover:pr-10 transition-all"
                      >
                        <span className="relative z-10">View Detail</span>
                        <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                        <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </a>

                      <div className="flex flex-col items-end opacity-20">
                        <Activity size={14} className="text-[#0B2E5B]" />
                        <span className="text-[6px] sm:text-[7px] font-bold uppercase mt-1">
                          Efficiency+
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[#C79A3B]/5 -mr-8 sm:-mr-10 -mt-8 sm:-mt-10 rotate-45 group-hover:bg-[#C79A3B]/10 transition-colors" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* WATERMARK */}
      <div className="py-8 sm:py-10 text-center opacity-[0.05] pointer-events-none">
        <p className="text-[18vw] sm:text-8xl font-black tracking-tight uppercase">
          Process Systems
        </p>
      </div>

    </main>
  )
}