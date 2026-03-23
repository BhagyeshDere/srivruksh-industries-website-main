"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { productGallery } from "@/data/productGallery"
import { ArrowUpRight, Search, Layers, Hammer, MousePointer2 } from "lucide-react"

export default function GalleryPage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <main ref={containerRef} className="bg-[#f8fafc] min-h-screen overflow-hidden">
      
      {/* ================= STICKY PROGRESS INDICATOR ================= */}
      <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-slate-200 z-50 hidden md:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#C79A3B] origin-top"
          style={{ scaleY }}
        />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-[0.2em] rotate-90">Start</div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-[0.2em] rotate-90">End</div>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-[#0B2E5B]">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />
        
        {/* Decorative Background Text */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]) }}
          className="absolute top-0 right-0 pointer-events-none opacity-10 select-none"
        >
          <h1 className="text-[25vw] font-black text-white leading-none translate-x-1/4 tracking-tighter">PROD</h1>
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Tagline Capsule */}
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-10">
              <span className="h-2 w-2 rounded-full bg-[#C79A3B] animate-pulse" />
              <span className="text-[#C79A3B] uppercase tracking-[0.5em] text-[10px] md:text-[12px] font-black">Operational Excellence</span>
            </div>

            {/* Main Heading: Refined size to match professional image */}
            <h1 className="text-5xl sm:text-7xl md:text-[7rem] lg:text-[8.5rem] font-black text-white mb-8 leading-[0.8] tracking-[-0.04em] uppercase">
              PRODUCTS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C79A3B] via-[#e6c36a] to-[#C79A3B]">GALLERY</span>
            </h1>

            {/* Balanced Description */}
            <p className="text-slate-300 max-w-xl md:max-w-2xl text-base md:text-xl font-medium leading-relaxed border-[#C79A3B] lg:border-l-2 lg:pl-10">
              Delivering high-performance engineering, fabrication, and automation solutions 
              tailored for modern industrial infrastructure.
            </p>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 2 }}
              className="mt-16 flex items-center gap-4 text-white/30 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]"
            >
              <MousePointer2 size={16} className="text-[#C79A3B]" /> Scroll To Explore
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= SHOWCASE ================= */}
      <section className="max-w-[1600px] mx-auto px-4 md:px-10 py-24 relative">
        <div className="space-y-32 md:space-y-64">
          {productGallery.map((item, index) => (
            <ProductRow key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#F8FAFC]">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#0B2E5B 2px, transparent 2px)`, backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="w-16 h-16 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Hammer className="text-[#C79A3B]" size={30} />
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0B2E5B] mb-6 leading-[0.9] tracking-tighter uppercase">
            Need Custom <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#C79A3B] to-[#9c7628]">Product?</span>
          </h2>

          <p className="text-slate-500 text-sm md:text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            We manufacture as per your requirements and drawings. Experience elite industrial fabrication.
          </p>

          <div className="flex justify-center">
            <a href="/contact" className="group relative inline-flex items-center gap-6 bg-[#0B2E5B] px-10 py-4 rounded-full overflow-hidden shadow-xl transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 text-white font-black uppercase text-[10px] tracking-[0.3em]">Contact Us</span>
              <div className="relative z-10 w-8 h-8 rounded-full bg-[#C79A3B] flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowUpRight size={18} className="text-white" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProductRow({ item, index }: { item: any; index: number }) {
  const rowRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.85])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <motion.div
      ref={rowRef}
      style={{ opacity }}
      className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 md:gap-24 items-center`}
    >
      {/* IMAGE COLUMN */}
      <motion.div style={{ scale }} className="w-full lg:w-[65%] group relative">
        <div className="relative aspect-[16/10] md:aspect-[4/3] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-white shadow-2xl border border-slate-100">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain p-10 md:p-24 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
          />
          <div className="absolute top-8 left-8 md:top-16 md:left-16 text-7xl md:text-[11rem] font-black text-[#0B2E5B]/5 select-none tracking-tighter">
            0{index + 1}
          </div>
          <div className="absolute bottom-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-[#0B2E5B] flex items-center justify-center rounded-tl-[2.5rem] md:rounded-tl-[4rem] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out">
             <Search size={32} className="text-white" />
          </div>
        </div>
      </motion.div>

      {/* INFO COLUMN */}
      <motion.div style={{ y }} className="w-full lg:w-[35%] space-y-6 md:space-y-10 text-center lg:text-left">
        <div className="space-y-4">
          <span className="text-[#C79A3B] font-black text-[10px] md:text-xs uppercase tracking-[0.4em] block">
            Industrial Asset
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0B2E5B] leading-[0.9] uppercase tracking-tighter">
            {item.title}
          </h2>
        </div>
        <div className="h-[3px] w-24 bg-gradient-to-r from-[#C79A3B] to-transparent mx-auto lg:mx-0 rounded-full" />
        <div className="flex items-center justify-center lg:justify-start gap-4 text-[#0B2E5B]/40">
           <Layers size={20} className="text-[#C79A3B]" />
           <span className="text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">ISO Certified Quality</span>
        </div>
      </motion.div>
    </motion.div>
  )
}