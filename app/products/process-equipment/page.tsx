"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Shield, Cpu, Activity } from "lucide-react"
import { products } from "@/data/products"

export default function ProcessEquipmentPage() {
  const [nodes, setNodes] = useState<any[]>([])

  useEffect(() => {
    const generatedNodes = [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10
    }))
    setNodes(generatedNodes)
  }, [])

  const filteredProducts = products.filter(
    (p) => p.category === "Process Equipment"
  )

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-[#ffffff] py-14 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden border-b border-slate-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(199,154,59,0.04),transparent_70%)]" />
          <div 
            className="absolute inset-0 opacity-[0.15]" 
            style={{ 
              backgroundImage: `linear-gradient(#C79A3B 0.5px, transparent 0.5px), linear-gradient(90deg, #C79A3B 0.5px, transparent 0.5px)`, 
              backgroundSize: '60px 60px' 
            }} 
          />
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute rounded-full bg-[#C79A3B]/30"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: node.size,
                height: node.size,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                y: [0, -40, 0]
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                delay: node.delay,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-[#C79A3B]/20 animate-ping" />
            </motion.div>
          ))}
          <motion.div 
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C79A3B]/40 to-transparent z-0"
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] select-none pointer-events-none">
          <h2 className="text-[30vw] sm:text-[25vw] md:text-[18vw] font-black tracking-tighter leading-none uppercase text-[#0B2E5B]">
            SYSTEMS
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center px-2">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full border border-[#C79A3B]/20 bg-white shadow-sm mb-4 sm:mb-6"
          >
            <div className="relative">
               <Cpu size={14} className="text-[#C79A3B]" />
               <motion.div 
                className="absolute inset-0 bg-[#C79A3B]/40 blur-sm rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
               />
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              Integrated <span className="text-[#C79A3B]">Processing</span>
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#0B2E5B] uppercase tracking-tight leading-[0.9] text-center mb-3 sm:mb-4"
          >
            Process <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] via-[#eec674] to-[#C79A3B]">
              Equipment
            </span>
          </motion.h1>

          <motion.p className="text-slate-500 max-w-md sm:max-w-xl md:max-w-2xl text-center text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-2">
            Engineering advanced thermal and mechanical systems with 
            <span className="text-[#0B2E5B] font-bold"> high-yield precision</span> for complex industrial cycles.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 w-px h-12 bg-gradient-to-b from-[#C79A3B] to-transparent hidden sm:block"
          />
        </div>
      </section>

      {/* ================= PRODUCTS GRID (Layout Corrected) ================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
            <AnimatePresence>
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100 flex flex-col h-full"
                >
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                    style={{ backgroundImage: `radial-gradient(#0B2E5B 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} 
                  />

                  {/* Header Status */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
                      <span className="text-[8px] sm:text-[9px] font-black text-[#0B2E5B]/40 uppercase tracking-widest">
                        PRC-UNIT-{index + 401}
                      </span>
                    </div>
                    <Shield size={12} className="text-[#0B2E5B]/10 group-hover:text-[#C79A3B]" />
                  </div>

                  {/* Image Container (Fixed Height) */}
                  <div className="relative h-[200px] sm:h-[240px] md:h-[280px] w-full mt-6 sm:mt-8 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-6 sm:p-10 group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content Container (Flex-Grow to unify card height) */}
                  <div className="p-6 sm:p-8 md:p-10 flex flex-col flex-grow bg-gradient-to-t from-slate-50/50 to-transparent relative border-t border-slate-50">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3">
                      <div className="w-5 sm:w-6 h-[2px] bg-[#C79A3B]" />
                      <span className="text-[#C79A3B] font-black text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                        System Critical Asset
                      </span>
                    </div>

                    {/* Title with min-height for uniformity */}
                    <h3 className="text-xl sm:text-2xl font-black text-[#0B2E5B] mb-3 tracking-tight uppercase leading-tight min-h-[3rem]">
                      {item.title}
                    </h3>

                    {/* Description with flex-grow */}
                    <p className="text-slate-500 mb-6 leading-relaxed font-medium text-xs sm:text-sm line-clamp-3 flex-grow">
                      {item.description}
                    </p>

                    {/* Footer Actions (Anchored to bottom) */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                      <a
                        href={`/products/process-equipment/${item.slug}`}
                        className="relative overflow-hidden group/btn inline-flex items-center gap-2 sm:gap-3 bg-[#0B2E5B] text-white px-5 py-2.5 sm:py-3 rounded-xl font-black uppercase text-[8px] sm:text-[9px] tracking-widest shadow-lg hover:pr-8 transition-all"
                      >
                        <span className="relative z-10">View Detail</span>
                        <ArrowRight size={14} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                        <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </a>

                      <div className="flex flex-col items-end opacity-20 group-hover:opacity-40 transition-opacity">
                        <Activity size={14} className="text-[#0B2E5B]" />
                        <span className="text-[6px] sm:text-[7px] font-bold uppercase mt-1">
                          Efficiency+
                        </span>
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

      {/* FOOTER WATERMARK */}
      <div className="py-8 sm:py-10 text-center opacity-[0.05] pointer-events-none">
        <p className="text-[18vw] sm:text-8xl font-black tracking-tight uppercase">
          Process Systems
        </p>
      </div>

    </main>
  )
}