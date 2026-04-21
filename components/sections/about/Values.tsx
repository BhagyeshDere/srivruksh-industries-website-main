"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ShieldCheck, TrendingUp, Handshake, Users, Lightbulb } from "lucide-react"

const values = [
  { 
    title: "Quality", 
    desc: "Rigorous standards in every weld and component, ensuring industrial-grade longevity.", 
    icon: <ShieldCheck className="w-6 h-6" />,
    span: "md:col-span-2 lg:col-span-2" 
  },
  { 
    title: "Innovation", 
    desc: "Implementing state-of-the-art automation and SPM technology.", 
    icon: <Lightbulb className="w-6 h-6" />,
    span: "md:col-span-1 lg:col-span-1" 
  },
  { 
    title: "Integrity", 
    desc: "Transparant communication and ethical engineering at every project stage.", 
    icon: <Handshake className="w-6 h-6" />,
    span: "md:col-span-1 lg:col-span-1" 
  },
  { 
    title: "Value", 
    desc: "Optimizing manufacturing processes to provide cost-effective excellence.", 
    icon: <TrendingUp className="w-6 h-6" />,
    span: "md:col-span-1 lg:col-span-1" 
  },
  { 
    title: "Teamwork", 
    desc: "A collaborative ecosystem where our engineers work as an extension of your team.", 
    icon: <Users className="w-6 h-6" />,
    span: "md:col-span-1 lg:col-span-1" 
  }
]

function ValueCard({ v, i }: { v: any, i: number }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200 overflow-hidden transition-colors hover:bg-white hover:border-[#C79A3B]/30 ${v.span}`}
    >
      {/* Background Number */}
      <span className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 text-[5rem] sm:text-9xl font-black text-slate-200/50 group-hover:text-[#C79A3B]/10 transition-colors pointer-events-none">
        {i + 1}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#0B2E5B] text-white flex items-center justify-center mb-4 sm:mb-6 shadow-lg shadow-[#0B2E5B]/20 group-hover:bg-[#C79A3B] transition-colors duration-500">
          {v.icon}
        </div>
        
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0B2E5B] mb-3 sm:mb-4">
          {v.title}
        </h3>
        
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-full sm:max-w-[280px] group-hover:text-slate-900 transition-colors">
          {v.desc}
        </p>
      </div>

      {/* Glow */}
      <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#C79A3B]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />
    </motion.div>
  )
}

export default function Values() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
          
          <div className="max-w-xl sm:max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-3 sm:mb-4"
            >
              <span className="w-8 sm:w-12 h-[2px] bg-[#C79A3B]" />
              <span className="text-[10px] sm:text-xs font-bold text-[#C79A3B] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                Our DNA
              </span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B2E5B] leading-[1.1]">
              The Core Values <br />
              <span className="text-slate-400">Powering Progress</span>
            </h2>
          </div>
          
          <p className="text-slate-500 max-w-xs sm:max-w-[300px] text-xs sm:text-sm leading-relaxed border-l border-slate-200 pl-4 sm:pl-6">
            We adhere to world-class manufacturing ethics to ensure Srivruksh remains a synonym for reliability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 perspective-1000">
          {values.map((v, i) => (
            <ValueCard key={i} v={v} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}