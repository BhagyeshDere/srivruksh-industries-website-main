"use client"

import { motion } from "framer-motion"
import { Eye, Target, CheckCircle2, ArrowUpRight } from "lucide-react"

const data = [
  {
    title: "Vision",
    icon: <Eye className="w-6 h-6" />,
    desc: "To be a globally recognized engineering powerhouse, pioneering sustainable automation and high-performance industrial solutions that shape the future.",
    points: [
      "Global Engineering Excellence",
      "Innovation-First DNA",
      "Sustainable Industrial Scaling"
    ],
    color: "from-[#C79A3B] to-[#EBC16D]"
  },
  {
    title: "Mission",
    icon: <Target className="w-6 h-6" />,
    desc: "Delivering precision-engineered fabrication and automation with a focus on reliability, safety, and absolute customer satisfaction.",
    points: [
      "Human-Centric Engineering",
      "Micro-Precision Manufacturing",
      "Continuous Evolution Loop"
    ],
    color: "from-blue-400 to-cyan-300"
  }
]

export default function VisionMission() {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-[#061427] overflow-hidden">
      
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#C79A3B]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16 md:mb-24">
          
          <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <span className="w-8 sm:w-12 h-[1px] bg-[#C79A3B]" />
              <span className="text-[#C79A3B] text-[10px] sm:text-xs font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase">
                The Srivruksh Way
              </span>
            </motion.div>
            
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight">
              Our Compass for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-white">
                Industrial Leadership
              </span>
            </h2>
          </div>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm leading-relaxed border-l border-white/10 pl-4 sm:pl-6 hidden lg:block">
            Engineering solutions isn't just our job—it's a commitment to the precision that moves the world.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 relative">
          
          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Watermark */}
              <span className="absolute -top-8 sm:-top-12 -left-2 sm:-left-4 text-[5rem] sm:text-8xl md:text-9xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-white/[0.04] transition-all duration-700">
                {item.title.toUpperCase()}
              </span>

              <div className="relative p-6 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/20 group-hover:-translate-y-2">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6 sm:mb-8">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br ${item.color} p-[1px]`}>
                    <div className="w-full h-full bg-[#061427] rounded-2xl flex items-center justify-center text-white">
                      {item.icon}
                    </div>
                  </div>
                  <ArrowUpRight className="text-white/20 group-hover:text-[#C79A3B] transition-colors" />
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Our {item.title}
                </h3>
                
                <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 min-h-[80px] sm:min-h-[100px]">
                  {item.desc}
                </p>

                {/* Points */}
                <div className="grid gap-3 sm:gap-4">
                  {item.points.map((point, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (idx * 0.1) }}
                      className="flex items-center gap-3 sm:gap-4 group/item"
                    >
                      <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#C79A3B]/10 flex items-center justify-center border border-[#C79A3B]/20">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C79A3B]" />
                      </div>
                      <span className="text-gray-300 text-xs sm:text-sm md:text-base font-medium group-hover/item:text-white transition-colors">
                        {point}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Bottom Glow */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-30 group-hover:opacity-100 transition-opacity`} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-[#061427] to-transparent pointer-events-none" />
    </section>
  )
}