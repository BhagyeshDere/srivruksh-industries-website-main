"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 20])

  return (
    <section ref={containerRef} className="relative py-14 sm:py-16 lg:py-28 bg-[#FBFBFC] overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 md:w-1/3 h-full bg-[#0B2E5B]/[0.02] -skew-x-12 translate-x-1/2" />
      <div className="absolute -top-20 sm:-top-24 left-2 sm:left-4 w-52 sm:w-64 md:w-80 h-52 sm:h-64 md:h-80 bg-[#C79A3B]/10 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ================= HERO CONTENT ================= */}
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#C79A3B]" />
                <p className="text-[#C79A3B] uppercase tracking-[2px] sm:tracking-[3px] text-[9px] sm:text-[10px] font-bold">
                  Legacy of Excellence
                </p>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#0B2E5B] leading-[1.1] mb-4 sm:mb-6">
                Engineering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e2bd74]">
                  Precision
                </span>{" "}
                for the Future.
              </h2>

              <div className="space-y-3 sm:space-y-4 text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
                <p>
                  Srivruksh Industries Pvt Ltd sits at the intersection of robust 
                  manufacturing and digital-age engineering. We architect efficiency.
                </p>

                <p className="text-xs sm:text-sm italic border-l-4 border-[#C79A3B] pl-3 sm:pl-4 bg-slate-50 py-2 sm:py-3 rounded-r-lg">
                  "Specializing in bespoke SPM units and high-tolerance fabrication."
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 py-4 sm:py-6 border-y border-gray-100">
                {[
                  { value: "10+", label: "Years" },
                  { value: "250+", label: "Units" },
                  { value: "100%", label: "Precision" }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-lg sm:text-xl md:text-2xl font-black text-[#0B2E5B]">
                      {stat.value}
                    </p>
                    <p className="text-[8px] sm:text-[9px] uppercase tracking-widest text-gray-400 font-bold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative h-[280px] sm:h-[350px] md:h-[450px] lg:h-[550px] w-full">

            <motion.div
              style={{ y: y2 }}
              className="absolute right-0 top-0 w-[95%] h-[85%] rounded-xl md:rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/factory/abouthome.jpg"
                alt="Industrial Site"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2E5B]/30 to-transparent" />
            </motion.div>

            <motion.div
              style={{ y: y1 }}
              className="absolute left-0 bottom-2 sm:bottom-4 w-[45%] h-[40%] rounded-lg md:rounded-xl overflow-hidden border-[4px] md:border-[6px] border-white shadow-xl hidden md:block"
            >
              <Image
                src="/images/assets/why.jpg"
                alt="Machine Detail"
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 lg:-left-4 bg-[#C79A3B] text-white px-3 sm:px-4 py-4 sm:py-6 rounded-lg md:rounded-xl shadow-lg z-20 hidden lg:flex flex-col items-center">
              <p className="text-lg sm:text-2xl font-black italic">ISO</p>
              <p className="text-[7px] sm:text-[8px] uppercase font-bold text-center">
                Certified
              </p>
            </div>

          </div>
        </div>

        {/* ================= GRID ================= */}
        <div className="mt-12 sm:mt-16 lg:mt-24">

          <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <div className="h-[2px] w-8 sm:w-10 bg-[#C79A3B]" />
            <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-[#0B2E5B] font-bold">
              Technical Specification //
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-2xl md:rounded-[2rem] overflow-hidden bg-white shadow-xl">

            {[
              {
                title: "Smart Fabrication",
                desc: "IoT sensors and automated workflows in steel fabrication for real-time tracking.",
                tag: "Digital Core"
              },
              {
                title: "Custom SPM",
                desc: "Special Purpose Machines engineered for extreme mechanical precision.",
                tag: "R&D Engine"
              },
              {
                title: "Rapid Deployment",
                desc: "Lean processes ensuring your project hits the floor on schedule.",
                tag: "Agile Flow"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(11, 46, 91, 1)" }}
                className={`group relative p-6 sm:p-8 lg:p-12 transition-all duration-300
                  ${i !== 2 ? "md:border-r border-slate-100" : ""} 
                  ${i !== 0 ? "border-t md:border-t-0 border-slate-100" : ""}`}
              >

                <span className="absolute top-4 sm:top-6 right-4 sm:right-6 font-mono text-3xl sm:text-4xl font-black text-slate-100 group-hover:text-white/10">
                  0{i + 1}
                </span>

                <div className="inline-block mb-3 sm:mb-4 px-2 sm:px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:bg-[#C79A3B] group-hover:text-white">
                  {feature.tag}
                </div>

                <div className="relative z-10">
                  <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-[#0B2E5B] mb-2 sm:mb-3 group-hover:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed group-hover:text-white/70">
                    {feature.desc}
                  </p>
                </div>

                <div className="mt-6 sm:mt-8 flex gap-1 opacity-20 group-hover:opacity-100">
                  <div className="w-8 sm:w-10 h-[2px] bg-[#C79A3B]" />
                  <div className="w-2 h-[2px] bg-[#C79A3B]/50" />
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}