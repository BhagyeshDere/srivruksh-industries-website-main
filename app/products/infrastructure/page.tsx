"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Shield, Layers, Settings2, HardHat, Construction } from "lucide-react"
import { products } from "@/data/products"

export default function InfrastructurePage() {
  const filteredProducts = products.filter(
    (p) => p.category === "Infrastructure"
  )

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#0B2E5B] py-20 sm:py-28 md:py-40 px-4 sm:px-6 overflow-hidden">

        {/* Vertical lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
        </div>

        {/* Glow */}
        <div className="absolute -top-20 sm:-top-24 -right-20 sm:-right-24 w-60 sm:w-96 h-60 sm:h-96 bg-[#C79A3B] opacity-10 rounded-full blur-3xl" />
        
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
          <h2 className="text-[22vw] sm:text-[18vw] md:text-[14vw] lg:text-[12vw] font-black tracking-tighter leading-none">
            STRUCTURAL
          </h2>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-[#C79A3B] text-[#0B2E5B] mb-6 sm:mb-8"
          >
            <Construction size={14} />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Core Infrastructure
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tight leading-[1] sm:leading-[0.9] mb-4 sm:mb-6"
          >
            Building the <br />
            <span className="text-[#C79A3B]">Foundation</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed"
          >
            Providing high-end structural engineering components and industrial 
            foundations for large-scale development projects.
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

            <AnimatePresence>
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg sm:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 flex flex-col"
                >

                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                    style={{ backgroundImage: `radial-gradient(#0B2E5B 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} 
                  />

                  {/* Top Status */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
                      <span className="text-[8px] sm:text-[9px] font-black text-[#0B2E5B]/40 uppercase tracking-widest">
                        INFRA-{index + 201}
                      </span>
                    </div>
                    <Shield size={12} className="sm:w-[14px] sm:h-[14px] text-[#0B2E5B]/10 group-hover:text-[#C79A3B]" />
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
                  <div className="p-5 sm:p-8 md:p-10 bg-gradient-to-t from-slate-50/50 to-transparent border-t border-slate-50">
                    
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-5 sm:w-6 h-[2px] bg-[#C79A3B]" />
                      <span className="text-[#C79A3B] font-black text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                        Infrastructure Grade
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-[#0B2E5B] mb-3 sm:mb-4 tracking-tight leading-[1]">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto">
                      <a
                        href={`/products/infrastructure/${item.slug}`}
                        className="relative inline-flex items-center gap-2 sm:gap-3 bg-[#0B2E5B] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-black uppercase text-[8px] sm:text-[9px] tracking-widest shadow-lg"
                      >
                        View Detail
                        <ArrowRight size={14} />
                      </a>

                      <div className="flex flex-col items-end opacity-20">
                        <HardHat size={14} />
                        <span className="text-[6px] sm:text-[7px] font-bold uppercase mt-1">
                          S-LEVEL
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[#C79A3B]/5 -mr-8 sm:-mr-10 -mt-8 sm:-mt-10 rotate-45" />
                </motion.div>
              ))}
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* Watermark */}
      <div className="py-6 sm:py-10 text-center opacity-[0.05] pointer-events-none">
        <p className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight uppercase">
          Infrastructure
        </p>
      </div>

    </main>
  )
}