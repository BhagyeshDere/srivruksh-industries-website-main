"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Shield, Layers, Settings2, Hammer } from "lucide-react"
import { products } from "@/data/products"

export default function FabricationPage() {
  const [sparks, setSparks] = useState<any[]>([])

  useEffect(() => {
    // Spark animation particles for Fabrication theme
    const generatedSparks = [...Array(20)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5
    }))
    setSparks(generatedSparks)
  }, [])

  const filteredProducts = products.filter(
    (p) => p.category === "Fabrication"
  )

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION (MATCHED TO IMAGE COLOR) ================= */}
      <section className="relative bg-[#0a0e1c] py-14 sm:py-20 md:py-24 lg:py-28 text-center text-white px-4 sm:px-6 overflow-hidden border-b-4 border-[#C79A3B]">
        
        {/* Spark & Steel Background Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Moving Blueprint Grid */}
          <motion.div 
            initial={{ backgroundPosition: "0% 0%" }}
            animate={{ backgroundPosition: "100% 100%" }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 opacity-[0.07]" 
            style={{ 
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, 
              backgroundSize: '60px 60px' 
            }} 
          />

          {/* Floating Fabrication Sparks */}
          {sparks.map((spark) => (
            <motion.div
              key={spark.id}
              className="absolute rounded-full bg-[#C79A3B]"
              style={{
                left: `${spark.x}%`,
                top: `${spark.y}%`,
                width: spark.size,
                height: spark.size,
                boxShadow: '0 0 8px #C79A3B'
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                y: [0, -30]
              }}
              transition={{
                duration: spark.duration,
                repeat: Infinity,
                delay: spark.delay,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Structural Beams Animation */}
          <motion.div 
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-0 w-64 h-[1px] bg-gradient-to-r from-transparent via-[#C79A3B]/20 to-transparent"
          />
          <motion.div 
            animate={{ x: ['100%', '-100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-0 w-80 h-[1px] bg-gradient-to-r from-transparent via-[#C79A3B]/20 to-transparent"
          />
        </div>

        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <h2 className="text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[12vw] font-black tracking-tighter leading-none">
            FABRICATION
          </h2>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-[#C79A3B]/30 bg-[#C79A3B]/10 backdrop-blur-md mb-6"
          >
            <Hammer size={14} className="text-[#C79A3B]" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#C79A3B]">
              Heavy Engineering Excellence
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[1] sm:leading-[0.9] mb-4 sm:mb-6"
          >
            Industrial <span className="text-[#C79A3B] block sm:inline">Fabrication</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-light leading-relaxed px-4"
          >
            Precision-engineered fabrication solutions built for strength, durability, 
            and high-performance industrial applications.
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-stretch">

            <AnimatePresence>
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-lg sm:shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 flex flex-col h-full transition-all duration-500 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                    style={{ backgroundImage: `radial-gradient(#0a0e1c 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} 
                  />

                  {/* Top Status */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
                      <span className="text-[8px] sm:text-[9px] font-black text-[#0a0e1c]/40 uppercase tracking-widest">
                        SI-FB-{index + 201}
                      </span>
                    </div>
                    <Shield size={12} className="sm:w-[14px] sm:h-[14px] text-[#0a0e1c]/10 group-hover:text-[#C79A3B] transition-colors" />
                  </div>

                  {/* IMAGE */}
                  <div className="relative h-[200px] sm:h-[240px] md:h-[300px] w-full mt-6 sm:mt-8 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 sm:p-10 md:p-12 group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-grow bg-gradient-to-t from-slate-50/50 to-transparent relative border-t border-slate-50">
                    
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-5 sm:w-6 h-[2px] bg-[#C79A3B]" />
                      <span className="text-[#C79A3B] font-black text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                        Heavy Duty Asset
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-[#0a0e1c] mb-3 sm:mb-4 tracking-tight leading-[1]">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 mb-6 leading-relaxed font-medium text-xs sm:text-sm line-clamp-3 flex-grow">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                      <a
                        href={`/products/fabrication/${item.slug}`}
                        className="relative overflow-hidden group/btn inline-flex items-center gap-2 sm:gap-3 bg-[#0a0e1c] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-black uppercase text-[8px] sm:text-[9px] tracking-widest shadow-lg transition-all"
                      >
                        <span className="relative z-10">View Detail</span>
                        <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-1.5 transition-transform" />
                        <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </a>

                      <div className="flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                        <Layers size={14} className="text-[#0a0e1c]" />
                        <span className="text-[6px] sm:text-[7px] font-bold uppercase mt-1">ISO-9001</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[#C79A3B]/5 -mr-8 -mt-8 rotate-45 group-hover:bg-[#C79A3B]/10 transition-colors" />
                </motion.div>
              ))}
            </AnimatePresence>

          </div>
        </div>
      </section>

      {/* Watermark */}
      <div className="py-12 sm:py-20 text-center opacity-[0.05] pointer-events-none">
        <p className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tight text-[#0a0e1c]">
          SRIVRUKSH
        </p>
      </div>

    </main>
  )
}