"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Settings2, Database, ShieldCheck, Box, Cpu } from "lucide-react"
import { products } from "@/data/products"

export default function StorageSystemsPage() {
  const [particles, setParticles] = useState<any[]>([])

  useEffect(() => {
    const generated = [...Array(12)].map((_, i) => ({
      id: i,
      width: Math.random() * 60 + 20,
      height: Math.random() * 60 + 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 15 + Math.random() * 10,
      rotate: Math.random() * 360,
    }))
    setParticles(generated)
  }, [])

  const filteredProducts = products.filter(
    (p) => p.category === "Storage Systems"
  )

  return (
    <main className="bg-[#f8fafc] min-h-screen overflow-x-hidden">

      {/* ================= HERO SECTION (LIGHT THEME) ================= */}
      <section className="relative bg-white py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 overflow-hidden border-b border-slate-100">
        
        {/* Animated Background Elements - Improved Visibility */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`beam-${i}`}
              initial={{ rotate: -45, x: "-100%", y: "-100%" }}
              animate={{ x: "100%", y: "100%" }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
              className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#C79A3B]/40 to-transparent"
              style={{ top: `${i * 25}%` }}
            />
          ))}

          {particles.map((p) => (
            <motion.div
              key={`orbit-${p.id}`}
              className="absolute border border-[#C79A3B]/30 rounded-xl"
              style={{
                width: p.width,
                height: p.height,
                left: p.left,
                top: p.top,
              }}
              animate={{
                rotate: [p.rotate, p.rotate + 360],
                opacity: [0.08, 0.2, 0.08],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* Cinematic Watermark - IMPROVED VISIBILITY */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] select-none pointer-events-none z-0">
          <h2 className="text-[35vw] sm:text-[25vw] md:text-[18vw] font-black tracking-tighter leading-none text-slate-300 uppercase">
            CONTAIN
          </h2>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center px-2 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 bg-slate-50/50 backdrop-blur-sm mb-6"
          >
            <Database size={14} className="text-[#C79A3B]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              High-Volume Containment
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 uppercase tracking-tight leading-[0.9] mb-4"
          >
            Storage <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] via-[#eec674] to-[#C79A3B]">
              Systems
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 max-w-md sm:max-w-xl md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-light px-2 leading-relaxed"
          >
            Premium MS and Stainless Steel containment solutions engineered for 
            volumetric efficiency and industrial-grade structural integrity.
          </motion.p>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <AnimatePresence>
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative bg-white rounded-[2rem] shadow-[0_20px_50px_-20px_rgba(15,23,42,0.1)] overflow-hidden border border-slate-100 flex flex-col h-full transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(199,154,59,0.15)]"
                >
                  <div className="absolute inset-0 opacity-[0.015] pointer-events-none group-hover:opacity-[0.04] transition-opacity" 
                    style={{ backgroundImage: `radial-gradient(#C79A3B 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }} 
                  />

                  <div className="absolute top-6 left-8 right-8 flex justify-between items-center z-10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#C79A3B] shadow-[0_0_10px_rgba(199,154,59,0.8)]" />
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        SYS-{index + 201}
                      </span>
                    </div>
                    <Box size={16} className="text-slate-200 group-hover:text-[#C79A3B] transition-colors" />
                  </div>

                  <div className="relative h-[250px] sm:h-[300px] w-full mt-10 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-8 sm:p-12 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  <div className="p-8 sm:p-10 bg-gradient-to-t from-slate-50 to-transparent relative border-t border-slate-50 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[2px] bg-[#C79A3B]" />
                      <span className="text-[#C79A3B] font-bold text-[10px] uppercase tracking-[0.3em]">
                        Volumetric Grade
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-4 tracking-tight uppercase leading-[1.1]">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 mb-8 leading-relaxed font-medium text-sm line-clamp-3 flex-grow">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-100/50">
                      <a
                        href={`/products/storage-systems/${item.slug}`}
                        className="relative overflow-hidden group/btn inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl font-bold uppercase text-[10px] tracking-[0.15em] shadow-xl transition-all duration-300"
                      >
                        <span className="relative z-10">VIEW DETAILS</span>
                        <ArrowRight size={16} className="relative z-10 group-hover/btn:translate-x-1.5 transition-transform" />
                        <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                      </a>

                      <div className="flex flex-col items-end opacity-20 group-hover:opacity-40">
                        <Settings2 size={18} className="text-slate-900" />
                        <span className="text-[7px] font-bold uppercase mt-1">Leak-Proof</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* FOOTER WATERMARK ACCENT */}
      <div className="py-12 text-center opacity-[0.04] pointer-events-none select-none">
        <p className="text-[15vw] sm:text-9xl font-black tracking-tighter uppercase text-slate-900">
          Containment
        </p>
      </div>

    </main>
  )
}