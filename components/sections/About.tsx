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

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <section ref={containerRef} className="relative py-16 sm:py-20 md:py-24 lg:py-40 bg-[#FBFBFC] overflow-hidden">

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 lg:w-1/3 h-full bg-[#0B2E5B]/[0.02] -skew-x-12 translate-x-1/2" />
      <div className="absolute -top-32 sm:-top-40 left-4 sm:left-10 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-[#C79A3B]/10 blur-[100px] sm:blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-5 order-2 lg:order-1">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="w-8 sm:w-12 h-[1px] bg-[#C79A3B]" />
                <p className="text-[#C79A3B] uppercase tracking-[3px] sm:tracking-[4px] text-[10px] sm:text-xs font-bold">
                  Legacy of Excellence
                </p>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0B2E5B] leading-[1.1] mb-6 sm:mb-8">
                Engineering{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e2bd74]">
                  Precision
                </span>{" "}
                for the Future.
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-600 text-base sm:text-lg leading-relaxed mb-8 sm:mb-12">
                <p>
                  Srivruksh Industries Pvt Ltd sits at the intersection of robust 
                  manufacturing and digital-age engineering. We don't just build machines; 
                  we architect efficiency.
                </p>

                <p className="text-sm sm:text-base italic border-l-4 border-[#C79A3B] pl-4 sm:pl-6">
                  "Specializing in bespoke SPM units and high-tolerance fabrication 
                  that redefines industrial benchmarks."
                </p>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 py-6 sm:py-8 border-y border-gray-200">
                {[
                  { value: "10+", label: "Years" },
                  { value: "250+", label: "Units" },
                  { value: "100%", label: "Precision" }
                ].map((stat, i) => (
                  <div key={i}>
                    <p className="text-lg sm:text-2xl font-bold text-[#0B2E5B]">
                      {stat.value}
                    </p>
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

          {/* RIGHT IMAGES */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative h-[320px] sm:h-[420px] md:h-[550px] lg:h-[650px]">

            {/* Main Image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute right-0 top-0 w-[90%] sm:w-[85%] h-[75%] sm:h-[80%] rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/factory/automation.png"
                alt="Industrial Site"
                fill
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0B2E5B]/40 to-transparent" />
            </motion.div>

            {/* Secondary Image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute left-0 bottom-6 sm:bottom-10 w-[55%] sm:w-[45%] h-[35%] sm:h-[40%] rounded-xl sm:rounded-2xl overflow-hidden border-4 sm:border-8 border-white shadow-2xl hidden sm:block"
            >
              <Image
                src="/images/assets/why.png"
                alt="Machine Detail"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              className="absolute top-6 sm:top-12 left-6 sm:left-12 bg-[#C79A3B] text-white p-4 sm:p-6 rounded-xl shadow-xl z-20 hidden md:block"
            >
              <p className="text-2xl sm:text-4xl font-black italic">ISO</p>
              <p className="text-[8px] sm:text-[10px] uppercase tracking-tight">
                Certified Quality
              </p>
            </motion.div>

          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-16 sm:mt-24 lg:mt-32 grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {[
            {
              title: "Smart Fabrication",
              desc: "Integrating IoT and automated workflows into traditional steel fabrication."
            },
            {
              title: "Custom SPM",
              desc: "Special Purpose Machines engineered from the ground up for unique constraints."
            },
            {
              title: "Rapid Deployment",
              desc: "Lean manufacturing processes ensuring your project hits the floor on schedule."
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="relative p-6 sm:p-8 md:p-10 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="absolute top-0 left-0 w-1 sm:w-2 h-0 bg-[#C79A3B] group-hover:h-full transition-all duration-500 rounded-l-xl sm:rounded-l-2xl" />

              <h4 className="text-lg sm:text-xl font-bold text-[#0B2E5B] mb-3 sm:mb-4 group-hover:text-[#C79A3B]">
                {feature.title}
              </h4>

              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                {feature.desc}
              </p>

              <div className="mt-4 sm:mt-6 flex items-center gap-2 text-[#C79A3B] font-bold text-[10px] sm:text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition">
                Learn More →
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}