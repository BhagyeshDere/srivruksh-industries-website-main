"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, Send, Building2, Activity } from "lucide-react"

export default function Contact() {
  return (
    <section className="bg-[#FAFBFD] text-[#0B2E5B] overflow-hidden">
      
      {/* HERO SECTION */}
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center text-center overflow-hidden bg-[#0B2E5B]">
        
        <motion.div 
          initial={{ scale: 1.2, opacity: 0.6 }}
          animate={{ scale: 1.05, opacity: 0.4 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/factory/automation.png"
            alt="Industrial Background"
            fill
            className="object-cover"
          />
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E5B]/90 via-[#0B2E5B]/80 to-transparent"></div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#C79A3B 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

        <motion.div
          className="relative z-10 text-white px-4 sm:px-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <span className="w-6 sm:w-8 h-[2px] bg-[#C79A3B]" />
            <span className="text-[#C79A3B] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[9px] sm:text-[10px] font-black">
              Connection Hub
            </span>
            <span className="w-6 sm:w-8 h-[2px] bg-[#C79A3B]" />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 tracking-tight uppercase">
            Contact Us
          </h1>

          <p className="text-gray-300 max-w-md sm:max-w-lg mx-auto font-light tracking-wide sm:tracking-widest text-xs sm:text-sm uppercase">
            Let’s connect for engineering & fabrication solutions
          </p>
        </motion.div>
      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 md:-mt-24 relative z-20 pb-20 sm:pb-24">
        
        <motion.div
          className="grid lg:grid-cols-2 bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(11,46,91,0.15)] overflow-hidden border border-slate-100"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* FORM */}
          <div className="p-6 sm:p-8 md:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-slate-50">

            <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="p-2 sm:p-3 bg-[#0B2E5B]/5 rounded-2xl">
                <Send size={20} className="text-[#0B2E5B]" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase">
                Send Us a Message
              </h2>
            </div>

            <form className="space-y-4 sm:space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:bg-white focus:border-[#C79A3B]/30 outline-none text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:bg-white focus:border-[#C79A3B]/30 outline-none text-sm sm:text-base"
              />

              <input
                type="text"
                placeholder="Company (Optional)"
                className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:bg-white focus:border-[#C79A3B]/30 outline-none text-sm sm:text-base"
              />

              <textarea
                placeholder="Project Details"
                rows={4}
                className="w-full bg-slate-50 border-2 border-transparent rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 focus:bg-white focus:border-[#C79A3B]/30 outline-none resize-none text-sm sm:text-base"
              />

              <button className="w-full bg-[#0B2E5B] text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] hover:shadow-xl transition">
                Submit Inquiry
              </button>

            </form>
          </div>

          {/* DETAILS */}
          <div className="bg-[#0B2E5B] p-6 sm:p-8 md:p-12 lg:p-14 text-white relative flex flex-col justify-between">

            <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-5 pointer-events-none">
              <Activity size={120} className="sm:size-[200px]" />
            </div>

            <div className="relative z-10 space-y-8 sm:space-y-12">

              {/* ADDRESS */}
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-2xl">
                    <Building2 size={20} className="text-[#C79A3B]" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-black uppercase">
                    Work Address
                  </h2>
                </div>

                <div className="pl-3 border-l-2 border-[#C79A3B]/50 text-sm sm:text-base">
                  <p className="font-bold mb-2">
                    M/S. SRIVRUKSH INDUSTRIES PVT LTD
                  </p>
                  <p className="text-slate-400">
                    Sr. No. 117/2, Gagai Nagar Nashik Road,<br/>
                    Wakhar Mahamandal Bhosari Pune - 411039<br/>
                    (Maharashtra) India
                  </p>
                </div>
              </div>

              {/* CONTACT */}
              <div className="space-y-6">

                <div className="flex items-center gap-4">
                  <div className="bg-[#C79A3B] p-2 sm:p-3 rounded-xl">
                    <Phone size={18} />
                  </div>
                  <p className="text-base sm:text-lg font-bold">
                    +91 9420925126
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#C79A3B] p-2 sm:p-3 rounded-xl">
                    <Mail size={18} />
                  </div>
                  <div className="text-sm sm:text-base">
                    <p>infosrivruksh@gmail.com</p>
                    <p className="text-[#C79A3B]/80 text-xs sm:text-sm">
                      srivruksh0052@gmail.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* GST */}
            <div className="pt-6 mt-6 sm:pt-10 sm:mt-10 border-t border-white/10 text-sm sm:text-base">
              <p className="text-xs text-slate-400 uppercase mb-1">GSTIN</p>
              <p className="text-lg sm:text-xl md:text-2xl font-mono text-[#C79A3B]">
                27ABJCS7257E1ZO
              </p>
            </div>

          </div>
        </motion.div>

        {/* MAP */}
        <motion.div
          className="mt-14 sm:mt-20 rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-lg border-4 sm:border-8 border-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            src="https://www.google.com/maps?q=Bhosari%20Pune&output=embed"
            className="w-full h-[300px] sm:h-[400px] md:h-[550px] border-0"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  )
}