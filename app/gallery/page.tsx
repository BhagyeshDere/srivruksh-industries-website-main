"use client"

import Image from "next/image"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { productGallery } from "@/data/productGallery"
import { ArrowUpRight, Layers, Hammer, MousePointer2 } from "lucide-react"

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
      
      {/* ================= PROGRESS ================= */}
      <div className="fixed right-4 md:right-10 top-1/2 -translate-y-1/2 h-64 w-[2px] bg-slate-200 z-50 hidden md:block">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-[#C79A3B] origin-top"
          style={{ scaleY }}
        />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-[0.2em] rotate-90">Start</div>
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[10px] font-black text-[#0B2E5B] uppercase tracking-[0.2em] rotate-90">End</div>
      </div>
{/* ================= HERO (UNCHANGED) ================= */}
<section className="relative min-h-[75vh] sm:min-h-[85vh] flex items-center pt-32 pb-20 px-6 overflow-hidden bg-[#0B2E5B]">
  <div
    className="absolute inset-0 opacity-10 pointer-events-none"
    style={{
      backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
      backgroundSize: "100px 100px"
    }}
  />

  <motion.div
    style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]) }}
    className="absolute top-0 right-0 pointer-events-none opacity-10 select-none"
  >
    <h1 className="text-[28vw] sm:text-[24vw] md:text-[20vw] lg:text-[16vw] font-black text-white leading-none translate-x-1/4 tracking-tighter">
      PROD
    </h1>
  </motion.div>

  <div className="relative z-10 max-w-7xl mx-auto w-full">
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center text-center lg:items-start lg:text-left"
    >

      <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
        <span className="h-2 w-2 rounded-full bg-[#C79A3B] animate-pulse" />
        <span className="text-[#C79A3B] uppercase text-xs font-black tracking-widest">
          Operational Excellence
        </span>
      </div>

      {/* ✅ FIXED HEADING SPACING */}
      <h1 className="text-[10vw] md:text-[6vw] font-black text-white mb-6 uppercase leading-[0.85] tracking-tight">
        PRODUCTS
        <br />
        <span className="text-[#C79A3B] block -mt-2">
          GALLERY
        </span>
      </h1>

      <p className="text-slate-300 max-w-xl text-lg">
        Delivering high-performance engineering and fabrication solutions.
      </p>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="mt-10 flex items-center gap-3 text-white/40 text-xs uppercase"
      >
        <MousePointer2 size={16} className="text-[#C79A3B]" />
        Scroll
      </motion.div>

    </motion.div>
  </div>
</section>

      {/* ================= GRID ================= */}
      <section className="max-w-[1500px] mx-auto px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {productGallery.map((item, index) => (
            <ProductCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">

          <div className="w-16 h-16 bg-white border rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm">
            <Hammer className="text-[#C79A3B]" size={30} />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-[#0B2E5B] mb-6 uppercase">
            Need Custom Product?
          </h2>

          <p className="text-slate-500 mb-10">
            We manufacture as per your requirements.
          </p>

          <a href="/contact" className="inline-flex items-center gap-4 bg-[#0B2E5B] text-white px-8 py-3 rounded-full">
            Contact <ArrowUpRight size={16} />
          </a>

        </div>
      </section>

    </main>
  )
}

/* ================= CARD ================= */
function ProductCard({ item, index }: { item: any; index: number }) {

  // ✅ Slightly smaller card
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8 }}
      className="group relative h-[420px] md:h-[500px] rounded-[2rem] overflow-hidden bg-white shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100 cursor-pointer"
    >

      {/* Top Accessory */}
      <div className="absolute top-5 left-6 flex items-center gap-2 z-10 opacity-40 group-hover:opacity-100 transition-opacity">
        <div className="w-1 h-4 bg-[#C79A3B]" />
        <span className="text-[9px] font-black text-[#0B2E5B] uppercase tracking-widest">
          SI-PRD-0{index + 1}
        </span>
      </div>

      {/* IMAGE */}
      <div className="absolute inset-0 p-10 md:p-12 flex items-center justify-center">
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain transition-all duration-700 ease-[0.16,1,0.3,1] group-hover:scale-110 group-hover:-translate-y-10"
          />
        </div>
      </div>

      {/* HOVER PANEL */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] z-20">
        <div className="bg-[#0B2E5B]/95 backdrop-blur-2xl border border-white/10 p-6 md:p-7 rounded-[2rem] shadow-2xl relative overflow-hidden">

          <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 -mr-8 -mt-8 rotate-45" />

          <span className="text-[#C79A3B] font-black text-[10px] uppercase tracking-[0.4em] block mb-2">
            Industrial Portfolio
          </span>

          <h2 className="text-xl md:text-2xl font-black text-white leading-tight uppercase tracking-tighter mb-4">
            {item.title}
          </h2>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/60">
              <Layers size={14} className="text-[#C79A3B]" />
              <span className="text-[9px] font-black uppercase tracking-widest">
                Certified Quality
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* BORDER */}
      <div className="absolute inset-0 border-2 border-[#C79A3B] rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-30" />

      {/* LIGHT EFFECT */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B]/5 to-transparent group-hover:opacity-0 transition-opacity" />

    </motion.div>
  )
}