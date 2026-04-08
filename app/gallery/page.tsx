"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { productGallery } from "@/data/productGallery"
import { ArrowUpRight, Layers, Hammer, MousePointer2 } from "lucide-react"

export default function GalleryPage() {
  const containerRef = useRef(null)
  
  // State to handle random geometry to prevent hydration mismatch
  const [geometries, setGeometries] = useState<any[]>([])

  useEffect(() => {
    // Generate random values only on the client side
    const items = [...Array(6)].map((_, i) => ({
      width: Math.random() * 200 + 100,
      height: Math.random() * 200 + 100,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      borderRadius: i % 2 === 0 ? '0%' : '50%',
      duration: 20 + i,
      moveX: [Math.random() * 20, Math.random() * -20],
      moveY: [Math.random() * 20, Math.random() * -20]
    }))
    setGeometries(items)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const rotateHero = useTransform(scrollYProgress, [0, 0.5], [0, 5])

  return (
    <main ref={containerRef} className="bg-[#fcfdfe] min-h-screen overflow-x-hidden">
      
      {/* ================= PROGRESS ================= */}
      <div className="fixed right-3 sm:right-4 md:right-10 top-1/2 -translate-y-1/2 h-48 sm:h-56 md:h-64 w-[2px] bg-slate-200 z-50 hidden md:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#C79A3B] origin-top"
          style={{ scaleY }}
        />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-[0.2em] rotate-90">Start</div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-[0.2em] rotate-90">End</div>
      </div>

      {/* ================= ADVANCED HERO ================= */}
      <section className="relative min-h-[80vh] sm:min-h-[85vh] flex items-center pt-24 pb-16 px-4 sm:px-6 overflow-hidden bg-[#0B2E5B]">
        
        {/* Layer 1: Structural Grid */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }} />
        </div>

        {/* Layer 2: Animated Beams */}
        <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
          <motion.path
            d="M-100 100 L1000 800 M-100 400 L1000 1100"
            stroke="#C79A3B"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          />
        </svg>

        {/* Layer 3: Floating Geometry Particles (Fixed Hydration) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {geometries.map((geo, i) => (
            <motion.div
              key={i}
              style={{ y: bgY }}
              animate={{ 
                rotate: [0, 360],
                x: geo.moveX,
                y: geo.moveY
              }}
              transition={{ duration: geo.duration, repeat: Infinity, ease: "linear" }}
              className="absolute border border-white/5 bg-white/[0.02] backdrop-blur-3xl"
              style={{
                width: geo.width,
                height: geo.height,
                left: geo.left,
                top: geo.top,
                borderRadius: geo.borderRadius
              }}
            />
          ))}
        </div>

        {/* Big Background Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none z-0 w-full text-center">
          <motion.h1 
            style={{ rotate: rotateHero }}
            className="text-[30vw] font-black text-white leading-none tracking-tighter"
          >
            PRECISION
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 mb-8 overflow-hidden cursor-default">
              <span className="h-2 w-2 rounded-full bg-[#C79A3B] shadow-[0_0_15px_#C79A3B]" />
              <span className="text-white/80 uppercase text-[10px] font-black tracking-[0.3em] relative z-10">
                Operational Excellence
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>

            <h1 className="text-[13vw] sm:text-[11vw] md:text-[8vw] lg:text-[7vw] font-black text-white mb-6 uppercase leading-[0.85] tracking-tighter">
              <span className="relative inline-block">
                PRODUCTS
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="absolute -bottom-2 left-0 h-2 md:h-4 bg-[#C79A3B] -z-10" 
                />
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 block mt-2">
                GALLERY
              </span>
            </h1>

            <p className="text-slate-400 max-w-md sm:max-w-xl text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Merging structural integrity with advanced fabrication. 
              Explore our portfolio of industrial-grade engineering solutions.
            </p>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="mt-12 flex flex-col items-center lg:items-start gap-4"
            >
              <div className="flex items-center gap-3 text-[#C79A3B] text-[10px] font-black uppercase tracking-widest">
                <div className="p-3 rounded-full border border-[#C79A3B]/30">
                  <MousePointer2 size={16} />
                </div>
                Discover Quality
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= GRID ================= */}
      <section className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {productGallery.map((item, index) => (
            <ProductCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `linear-gradient(#0B2E5B 1px, transparent 1px), linear-gradient(90deg, #0B2E5B 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white border border-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <Hammer className="text-[#C79A3B]" size={32} />
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0B2E5B] mb-6 uppercase tracking-tighter">
            Need Custom <br className="md:hidden" /> <span className="text-[#C79A3B]">Product?</span>
          </h2>

          <p className="text-slate-500 mb-12 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            From precision laser cutting to heavy-duty structural steel, we manufacture 
            exactly as per your blueprints and technical specifications.
          </p>

          <a href="/contact" className="group relative inline-flex items-center gap-4 bg-[#0B2E5B] text-white px-10 py-5 rounded-full text-sm font-black uppercase tracking-widest overflow-hidden shadow-2xl transition-all hover:pr-14">
            <span className="relative z-10">Start Project</span>
            <ArrowUpRight size={18} className="relative z-10" />
            <div className="absolute inset-0 bg-[#C79A3B] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>
        </div>
      </section>
    </main>
  )
}

function ProductCard({ item, index }: { item: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-[400px] sm:h-[450px] md:h-[520px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 cursor-pointer"
    >
      <div className="absolute top-6 left-8 flex items-center gap-3 z-10 opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="w-1.5 h-6 bg-[#C79A3B] rounded-full" />
        <span className="text-[10px] font-black text-[#0B2E5B] uppercase tracking-widest">
          SI-PRD-0{index + 1}
        </span>
      </div>

      <div className="absolute inset-0 p-10 md:p-14 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:-translate-y-12"
          />
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 translate-y-0 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20">
        <div className="bg-[#0B2E5B] backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 -mr-10 -mt-10 rotate-45" />
          <span className="text-[#C79A3B] font-black text-[10px] uppercase tracking-[0.4em] block mb-3">
            Industrial Portfolio
          </span>
          <h2 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tight mb-4">
            {item.title}
          </h2>
          <div className="pt-5 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white/60">
              <Layers size={14} className="text-[#C79A3B]" />
              <span className="text-[9px] font-black uppercase tracking-widest">
                Certified Quality
              </span>
            </div>
            <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#C79A3B] transition-colors">
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border-4 border-[#C79A3B] rounded-[2rem] md:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-100/50 to-transparent group-hover:opacity-0 transition-opacity" />
    </motion.div>
  )
}