"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, ZoomIn, Award, ShieldCheck, Zap } from "lucide-react"

const certificates = [
  {
    title: "Startup India",
    subtitle: "DPIIT Recognized",
    image: "/images/certificates/cert5.png",
    desc: "Officially recognized as a startup by the Department for Promotion of Industry and Internal Trade, Government of India, incorporated in 2022 for innovation in the Automotive industry."
  },
  {
    title: "ISO 9001:2015",
    subtitle: "Quality Management",
    image: "/images/certificates/cert1.png",
    desc: "Global standard for quality management systems and operational excellence."
  },
  {
    title: "Safety First",
    subtitle: "OSHA Compliance",
    image: "/images/certificates/cert2.png",
    desc: "Adherence to rigorous industrial safety standards and worker protection."
  },
  {
    title: "MSME Registered",
    subtitle: "Industrial Growth",
    image: "/images/certificates/cert3.png",
    desc: "Recognized by the Ministry of Micro, Small and Medium Enterprises."
  },
  {
    title: "D&B Certified",
    subtitle: "Business Trust",
    image: "/images/certificates/cert4.png",
    desc: "Verified business credibility and financial transparency standards."
  }
]

export default function CertificationsPage() {
  const [activeCert, setActiveCert] = useState<typeof certificates[0] | null>(null)

  return (
    <section className="relative bg-[#020617] py-10 sm:py-14 md:py-18 lg:py-20 overflow-hidden">

      {/* BACKGROUND TEXT */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none overflow-hidden opacity-[0.02] whitespace-nowrap">
        <motion.p
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
          className="text-[6rem] sm:text-[10rem] md:text-[16rem] lg:text-[20rem] font-black text-white tracking-tight"
        >
          PRECISION • COMPLIANCE • QUALITY • STANDARDS • EXCELLENCE • SAFETY •
        </motion.p>
      </div>

      {/* BLOBS */}
      <div className="absolute top-0 right-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-[#C79A3B]/5 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[250px] sm:w-[400px] md:w-[500px] h-[250px] sm:h-[400px] md:h-[500px] bg-[#0B2E5B]/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <div className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(#ffffff 0.5px, transparent 0.5px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-10 sm:mb-14 md:mb-16">

          <div className="max-w-xl sm:max-w-2xl md:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-3 sm:mb-4"
            >
              <div className="h-[1px] w-8 sm:w-12 bg-[#C79A3B]" />
              <span className="text-[#C79A3B] text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">
                Quality Verified
              </span>
            </motion.div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight uppercase">
              Commitment to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">
                World-Class Quality
              </span>
            </h2>
          </div>

          <p className="text-slate-400 max-w-xs sm:max-w-sm text-xs sm:text-sm md:text-base leading-relaxed border-l border-white/10 pl-4 sm:pl-6">
            Ensuring every component we fabricate meets elite industrial benchmarks and strict global certifications.
          </p>
        </div>

        {/* CAROUSEL */}
        <div className="relative">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="flex gap-4 sm:gap-6 py-4 sm:py-6"
            >
              {[...certificates, ...certificates].map((cert, i) => (
                <div
                  key={i}
                  className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[400px] flex-shrink-0 cursor-pointer"
                  onClick={() => setActiveCert(cert)}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -6 }}
                    className="relative group bg-gradient-to-b from-slate-800/50 to-slate-900/80 rounded-[1.2rem] sm:rounded-[1.5rem] p-3 sm:p-4 border border-white/5 backdrop-blur-sm overflow-hidden"
                  >

                    <div className="relative aspect-[4/5] bg-white rounded-lg sm:rounded-xl overflow-hidden">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-4 sm:p-6 grayscale group-hover:grayscale-0 transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C79A3B] flex items-center justify-center">
                          <ZoomIn className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6 flex justify-between items-end">
                      <div>
                        <span className="text-[#C79A3B] font-mono text-[8px] sm:text-[9px] tracking-widest uppercase font-bold block mb-1">
                          {cert.subtitle}
                        </span>
                        <h3 className="text-white text-sm sm:text-lg font-black uppercase tracking-tight">
                          {cert.title}
                        </h3>
                      </div>

                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10">
                        <Zap className="text-white/20 w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 p-2 sm:p-3 opacity-10">
                      <Award size={36} className="text-white sm:w-12 sm:h-12" />
                    </div>

                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
{/* MODAL */}
<AnimatePresence>
  {activeCert && (
    <motion.div
      className="fixed inset-0 bg-[#020617]/95 backdrop-blur-2xl z-[100] overflow-y-auto"
    >

      {/* CLOSE BUTTON */}
      <button
        onClick={() => setActiveCert(null)}
        className="fixed top-4 sm:top-8 right-4 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white z-20"
      >
        <X size={20} />
      </button>

      {/* MAIN WRAPPER */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-10">

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-6xl w-full items-center">

          {/* ✅ IMAGE (NO CUT, NO SCROLLBAR) */}
          <div className="w-full flex justify-center">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-2 sm:p-4 max-w-[500px] w-full">
              
              <Image
                src={activeCert.image}
                alt="Certificate"
                width={800}
                height={1200}
                className="w-full h-auto object-contain"
              />

            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="mt-6 lg:mt-0 text-left">
            <ShieldCheck className="text-[#C79A3B] mb-4 sm:mb-6" size={40} />

            <span className="text-[#C79A3B] font-mono text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase font-black block mb-3 sm:mb-4">
              Official Verification
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 sm:mb-6 uppercase">
              {activeCert.title}
            </h2>

            <div className="w-14 sm:w-20 h-1 bg-[#C79A3B] mb-6 sm:mb-8" />

            <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-10">
              {activeCert.desc}
            </p>

            <button
              onClick={() => setActiveCert(null)}
              className="px-6 sm:px-8 md:px-10 py-3 sm:py-4 bg-[#C79A3B] text-white font-black uppercase text-[10px] sm:text-xs tracking-widest rounded-full"
            >
              Return to Gallery
            </button>
          </div>

        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </section>
  )
}