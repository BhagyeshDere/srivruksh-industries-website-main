"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Box, Layers, Settings, Shield, Cpu, ChevronRight, MousePointer2 } from "lucide-react"
import { useState } from "react"
import { products } from "@/data/products"

export default function ProductsPage() {
  const categories = [
    "All",
    "Material Handling",
    "Process Equipment",
    "Fabrication",
    "Infrastructure"
  ]

  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <main className="bg-[#f8fafc] overflow-hidden">
      {/* ================= ULTRA-LARGE TYPOGRAPHIC HERO ================= */}
      <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden bg-[#0B2E5B]">
        {/* Layered Background Motion Decor */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.06, 0.03] 
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <h1 className="text-[28vw] font-black text-white leading-none select-none tracking-tighter uppercase">
              SRIVRUKSH
            </h1>
          </motion.div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#C79A3B]/10 to-transparent" />
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#C79A3B]/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C79A3B] animate-pulse" />
                <span className="text-[#C79A3B] uppercase tracking-[0.5em] text-[10px] md:text-[12px] font-black">
                  Industrial Catalog 2026
                </span>
              </div>

              {/* HEADING: Refined to match the "Blocky" image style */}
              <h1 className="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-black text-white mb-8 leading-[0.75] tracking-[-0.05em] uppercase">
                PRODUCT <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C79A3B] via-[#e6c36a] to-[#C79A3B]">
                  RANGE
                </span>
              </h1>

              <p className="text-slate-300 max-w-xl md:max-w-2xl text-base md:text-xl font-medium leading-relaxed lg:border-l-2 border-[#C79A3B] lg:pl-10">
                Precision-engineered industrial solutions built for performance,
                durability, and reliability. Explore our elite fabrication standards.
              </p>

              <motion.div 
                animate={{ y: [0, 8, 0] }} 
                transition={{ repeat: Infinity, duration: 2 }}
                className="mt-12 flex items-center gap-4 text-white/20 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]"
              >
                <MousePointer2 size={16} className="text-[#C79A3B]" /> Scroll To Explore
              </motion.div>
            </motion.div>

            {/* Feature Grid Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="lg:col-span-4 hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { label: "Precision", val: "100%", icon: <Shield size={20} /> },
                { label: "Framework", val: "v2.6", icon: <Cpu size={20} /> },
                { label: "Fabrication", val: "Elite", icon: <Layers size={20} /> },
                { label: "Status", val: "Active", icon: <Box size={20} /> }
              ].map((stat, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] flex flex-col justify-between h-44 group hover:bg-[#C79A3B] transition-all duration-500">
                  <div className="text-[#C79A3B] group-hover:text-white transition-colors">{stat.icon}</div>
                  <div>
                    <div className="text-white text-3xl font-black mb-1">{stat.val}</div>
                    <div className="text-white/40 group-hover:text-white/70 uppercase text-[9px] font-black tracking-widest">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STICKY ADVANCED FILTER ================= */}
      <section className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center justify-between min-w-max py-5 gap-8">
             <div className="flex gap-2">
              {categories.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-8 py-3 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-500
                    ${activeCategory === cat ? "text-white" : "text-slate-400 hover:text-[#0B2E5B]"}`}
                >
                  <span className="relative z-10">{cat}</span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeTabLarge"
                      className="absolute inset-0 bg-[#0B2E5B] rounded-xl shadow-lg shadow-[#0B2E5B]/20"
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="hidden md:block text-[#0B2E5B]/30 font-black text-xs tracking-[0.2em] uppercase">
              Total Assets: {filteredProducts.length}
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC GRID ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((item, index) => (
                <motion.div
                  key={item.title}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="relative flex flex-col h-full bg-white rounded-[3rem] md:rounded-[4rem] overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl transition-all duration-700">
                    
                    <div className="relative aspect-[16/11] w-full overflow-hidden bg-white">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-12 md:p-16 group-hover:scale-110 transition-transform duration-1000 ease-out"
                      />
                      <div className="absolute top-8 left-8 flex gap-2 z-20">
                        <span className="px-5 py-2 bg-[#0B2E5B] text-white text-[9px] font-black uppercase tracking-widest rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-10 md:p-16 flex flex-col flex-grow bg-white relative">
                      <div className="w-16 h-1 bg-[#C79A3B] mb-8 rounded-full" />
                      
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="text-3xl md:text-5xl font-black text-[#0B2E5B] leading-[0.85] tracking-tighter uppercase">
                          {item.title}
                        </h3>
                        <Shield size={28} className="text-[#C79A3B] opacity-20 shrink-0" />
                      </div>

                      <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium mb-12">
                        {item.description}
                      </p>

                      <div className="mt-auto">
                        <a
                          href={`/contact?product=${encodeURIComponent(item.title)}`}
                          className="inline-flex items-center gap-6 group/btn"
                        >
                          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0B2E5B] group-hover/btn:bg-[#C79A3B] transition-all duration-500 shadow-lg">
                            <ArrowRight size={22} className="text-white" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Enquire</span>
                            <span className="text-xs font-black uppercase tracking-[0.1em] text-[#0B2E5B]">View Details</span>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ================= REFINED PREMIUM CTA ================= */}
      <section className="relative py-24 px-6 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: `radial-gradient(#0B2E5B 2px, transparent 2px)`, backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Layers className="text-[#C79A3B]" size={28} />
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-[#0B2E5B] mb-6 leading-[0.9] tracking-tighter uppercase">
              Need Custom <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C79A3B] to-[#9c7628]">
                Fabrication?
              </span>
            </h2>

            <p className="text-slate-500 text-sm md:text-lg mb-12 max-w-xl font-medium leading-relaxed">
              We design and manufacture high-quality industrial solutions tailored 
              precisely to your project requirements.
            </p>

            <a
              href="/contact"
              className="group relative inline-flex items-center gap-6 bg-[#0B2E5B] px-10 py-4 rounded-full shadow-xl hover:scale-105 transition-all"
            >
              <span className="text-white font-black uppercase text-[10px] tracking-[0.3em]">Request a Quote</span>
              <ChevronRight size={18} className="text-[#C79A3B]" />
            </a>
          </motion.div>
        </div>
      </section>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </main>
  )
}