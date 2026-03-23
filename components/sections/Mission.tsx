"use client"

import { motion } from "framer-motion"
import { Handshake, Settings, Rocket, ChevronRight } from "lucide-react"

export default function Mission() {
  const missions = [
    {
      icon: <Handshake className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />,
      title: "Customer Commitment",
      text: "Providing long-term commitment and reliable engineering support to all our customers.",
      color: "#0B2E5B"
    },
    {
      icon: <Settings className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />,
      title: "Engineering Excellence",
      text: "Combining technical knowledge with the highest standards of manufacturing practices.",
      color: "#C79A3B"
    },
    {
      icon: <Rocket className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8" />,
      title: "Innovation & Growth",
      text: "Achieving the highest level of innovation, skill and competence in engineering solutions.",
      color: "#0B2E5B"
    }
  ]

  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-16 sm:top-20 left-6 sm:left-10 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 border-[20px] sm:border-[30px] md:border-[40px] border-[#0B2E5B] rounded-full" />
        <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 border-[10px] sm:border-[15px] md:border-[20px] border-[#C79A3B] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 lg:mb-24 gap-6 sm:gap-8">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl sm:max-w-2xl"
          >
            <span className="text-[9px] sm:text-[10px] font-black tracking-[0.4em] sm:tracking-[0.6em] text-[#C79A3B] uppercase mb-3 sm:mb-4 block">
              Our Visionary Path
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0B2E5B] leading-[0.95] tracking-tight">
              WORKING <br />
              TOGETHER <span className="text-transparent stroke-text">SUCCESSFULLY</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-sm font-medium leading-relaxed border-l-2 border-[#C79A3B] pl-4 sm:pl-6"
          >
            Maintaining the highest standards of quality, integrity and customer satisfaction.
          </motion.p>
        </div>

        {/* MISSION FLOW */}
        <div className="relative">

          {/* SVG PATH */}
          <svg className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 h-24 z-0" fill="none" preserveAspectRatio="none">
            <motion.path
              d="M 100 50 Q 300 100 600 50 T 1100 50"
              stroke="#0B2E5B"
              strokeWidth="1"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.2 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 md:gap-14 lg:gap-8 relative z-10">

            {missions.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >

                {/* NUMBER */}
                <span className="absolute -top-6 sm:-top-8 md:-top-10 -left-2 sm:-left-4 text-6xl sm:text-7xl md:text-9xl font-black text-slate-100/50 group-hover:text-[#C79A3B]/10 transition-colors">
                  0{index + 1}
                </span>

                <div className="relative pt-6 sm:pt-8">

                  {/* ICON */}
                  <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.1)] rounded-2xl sm:rounded-3xl flex items-center justify-center text-[#0B2E5B] mb-6 sm:mb-8 group-hover:bg-[#0B2E5B] group-hover:text-white transition-all duration-500 group-hover:-translate-y-2 sm:group-hover:-translate-y-3">
                    {item.icon}
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-[#0B2E5B] mb-3 sm:mb-4 flex items-center gap-2">
                    {item.title}
                    <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5 text-[#C79A3B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </h3>

                  {/* TEXT */}
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                    {item.text}
                  </p>

                  {/* LINE */}
                  <div className="mt-6 sm:mt-8 h-[1px] w-full bg-slate-100 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-[#C79A3B]"
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "0%" }}
                      transition={{ delay: 0.5 + (index * 0.2), duration: 0.8 }}
                    />
                  </div>

                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #0B2E5B;
        }
      `}</style>
    </section>
  )
}