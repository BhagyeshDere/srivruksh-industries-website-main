"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ShieldCheck, Factory, Cpu } from "lucide-react"

export default function WhoWeAre() {
  const targetRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  })

  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40])
  const floatY = useTransform(scrollYProgress, [0, 1], [20, -60])

  const features = [
    { title: "Custom Solutions", icon: <Cpu className="w-5 h-5" />, desc: "Tailored engineering for unique needs." },
    { title: "Precision Scaling", icon: <ShieldCheck className="w-5 h-5" />, desc: "Reliability at every industrial scale." },
    { title: "Advanced Unit", icon: <Factory className="w-5 h-5" />, desc: "MIDC Bhosari's flagship facility." },
  ]

  return (
    <section 
      ref={targetRef}
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-white overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-6 translate-x-12 -z-0 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-24">
          
          {/* IMAGE SIDE */}
          <div className="w-full lg:w-1/2 relative">

            <motion.div 
              style={{ y: imgY }}
              className="relative aspect-[4/5] sm:aspect-[4/5] md:aspect-square w-full rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl z-10"
            >
              <Image
                src="/images/factory/automation.png"
                alt="Srivruksh Industries Factory"
                fill
                className="object-cover scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2E5B]/40 to-transparent" />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              style={{ y: floatY }}
              className="absolute -bottom-6 sm:-bottom-10 -left-4 sm:-left-6 md:-left-10 z-20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-white/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white max-w-[160px] sm:max-w-[200px]"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-black text-[#C79A3B] mb-1">10+</div>
              <div className="text-[#0B2E5B] font-bold text-[10px] sm:text-xs md:text-sm tracking-tighter uppercase leading-none">
                Years of Industrial Mastery
              </div>
              <div className="mt-3 sm:mt-4 w-6 sm:w-8 h-[2px] bg-[#C79A3B]" />
            </motion.div>

            {/* Dots */}
            <div className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-[radial-gradient(#C79A3B_1.5px,transparent_1.5px)] [background-size:10px_10px] sm:[background-size:12px_12px] opacity-30 -z-0" />
          </div>

          {/* TEXT SIDE */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
                <span className="w-6 sm:w-8 h-[1px] bg-[#C79A3B]" />
                <span className="text-[10px] sm:text-xs font-bold text-[#C79A3B] uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                  Establishment
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#0B2E5B] mb-6 sm:mb-8 leading-[0.95]">
                Delivering <br /> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#b0842d]">
                  Industrial Prowess
                </span>
              </h2>

              <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl">
                Strategically located in <span className="text-[#0B2E5B] font-semibold">MIDC Bhosari, Pune</span>, Srivruksh Industries 
                bridges the gap between complex engineering requirements and high-precision execution.
              </p>

              {/* FEATURES */}
              <div className="grid gap-4 sm:gap-6 mb-10 sm:mb-12">
                {features.map((f, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all hover:bg-slate-50 group"
                  >
                    <div className="p-2 sm:p-3 bg-slate-100 rounded-lg text-[#0B2E5B] group-hover:bg-[#C79A3B] group-hover:text-white transition-colors">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0B2E5B] text-sm sm:text-base">{f.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}