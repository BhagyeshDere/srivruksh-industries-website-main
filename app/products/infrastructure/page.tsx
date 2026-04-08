"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Shield, Layers, Settings2, HardHat, Construction } from "lucide-react"
import { products } from "@/data/products"

export default function InfrastructurePage() {
  const [nodes, setNodes] = useState<any[]>([])

  useEffect(() => {
    // Generate architectural "nodes" for the background
    const generated = [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: 10 + Math.random() * 20
    }))
    setNodes(generated)
  }, [])

  const filteredProducts = products.filter(
    (p) => p.category === "Infrastructure"
  )

  return (
    <main className="bg-[#fcfdfe] min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION (LIGHT THEME & REDUCED HEIGHT) ================= */}
      <section className="relative bg-white py-14 sm:py-20 md:py-24 lg:py-28 px-4 sm:px-6 overflow-hidden border-b border-slate-100">
        
        {/* Animated Blueprint Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Subtle Grid */}
          <div 
            className="absolute inset-0 opacity-[0.4]" 
            style={{ 
              backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`, 
              backgroundSize: '40px 40px' 
            }} 
          />

          {/* Scanning Beam Animation */}
          <motion.div 
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-[#C79A3B]/5 to-transparent z-0"
          />

          {/* Drifting Architectural Nodes */}
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              className="absolute rounded-full border border-slate-200 bg-white shadow-sm"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                width: node.size,
                height: node.size,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: node.duration,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none">
          <h2 className="text-[22vw] sm:text-[18vw] md:text-[14vw] lg:text-[12vw] font-black tracking-tighter leading-none text-[#0B2E5B]">
            STRUCTURAL
          </h2>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm bg-[#0B2E5B] text-white mb-6"
          >
            <Construction size={14} className="text-[#C79A3B]" />
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Core Infrastructure
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#0B2E5B] uppercase tracking-tight leading-[1] sm:leading-[0.9] mb-4 sm:mb-6"
          >
            Building the <br />
            <span className="text-[#C79A3B]">Foundation</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed px-4"
          >
            Providing high-end structural engineering components and industrial 
            foundations for large-scale development projects.
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
                  className="group relative bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-sm hover:shadow-xl border border-slate-100 flex flex-col h-full transition-all duration-500"
                >

                  {/* Pattern */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity" 
                    style={{ backgroundImage: `radial-gradient(#0B2E5B 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} 
                  />

                  {/* Top Status */}
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C79A3B]" />
                      <span className="text-[8px] sm:text-[9px] font-black text-[#0B2E5B]/40 uppercase tracking-widest">
                        INFRA-{index + 401}
                      </span>
                    </div>
                    <Shield size={12} className="sm:w-[14px] sm:h-[14px] text-slate-200 group-hover:text-[#C79A3B] transition-colors" />
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
                  <div className="p-5 sm:p-8 md:p-10 flex flex-col flex-grow bg-gradient-to-t from-slate-50/50 to-transparent border-t border-slate-50">
                    
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <div className="w-5 sm:w-6 h-[2px] bg-[#C79A3B]" />
                      <span className="text-[#C79A3B] font-black text-[8px] sm:text-[9px] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
                        Infrastructure Grade
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-[#0B2E5B] mb-3 sm:mb-4 tracking-tight leading-[1]">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 mb-6 text-xs sm:text-sm leading-relaxed font-medium line-clamp-3 flex-grow">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100/50">
                      <a
                        href={`/products/infrastructure/${item.slug}`}
                        className="relative inline-flex items-center gap-2 sm:gap-3 bg-[#0B2E5B] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-black uppercase text-[8px] sm:text-[9px] tracking-widest shadow-md hover:bg-[#C79A3B] transition-colors duration-300"
                      >
                        View Detail
                        <ArrowRight size={14} />
                      </a>

                      <div className="flex flex-col items-end opacity-20 group-hover:opacity-100 transition-opacity">
                        <HardHat size={14} className="text-[#0B2E5B]" />
                        <span className="text-[6px] sm:text-[7px] font-bold uppercase mt-1">S-LEVEL</span>
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
      <div className="py-12 sm:py-16 text-center opacity-[0.06] pointer-events-none">
        <p className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase text-[#0B2E5B]">
          Infrastructure
        </p>
      </div>

    </main>
  )
}