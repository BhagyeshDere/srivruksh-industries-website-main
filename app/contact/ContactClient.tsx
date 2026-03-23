"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Globe, ArrowRight, Activity } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ContactClient() {
  const searchParams = useSearchParams()

  const [product, setProduct] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    const p = searchParams.get("product")
    if (p) setProduct(p)
  }, [searchParams])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const phoneNumber = "919420925126"

    const text = `📩 New Enquiry\n\n👤 Name: ${name}\n📧 Email: ${email}\n🏢 Company: ${company}\n📦 Product: ${product}\n\n📝 Message:\n${message}`

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section className="bg-[#f8fafc] text-[#0B2E5B] overflow-hidden min-h-screen">

      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[320px] sm:h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden bg-[#0B2E5B]">

        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-20"
        >
          <Image
            src="/images/factory/automation.png"
            alt="Industrial"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B2E5B] via-[#0B2E5B]/80 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <h1 className="text-[28vw] sm:text-[20vw] font-black text-white tracking-tighter">CONNECT</h1>
        </div>

        <motion.div
          className="relative z-10 text-center px-4 sm:px-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-[#C79A3B]/20 border border-[#C79A3B]/30 mb-4 sm:mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
            <span className="text-[#C79A3B] text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Global Operations
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-4 sm:mb-6 uppercase text-white tracking-tight">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">Us</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-slate-300 font-medium opacity-80">
            Strategic industrial partnerships start with a conversation. Let’s engineer the future.
          </p>
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-20 sm:-mt-24 md:-mt-40 relative z-20 pb-16 sm:pb-20 md:pb-24">

        <div className="grid lg:grid-cols-12 bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(11,46,91,0.15)] overflow-hidden border border-slate-100">

          {/* ================= FORM SIDE ================= */}
          <div className="lg:col-span-7 p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-black mb-2 uppercase tracking-tight">Send Enquiry</h2>
              <p className="text-slate-400 mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base font-medium">
                Complete the form below for a technical consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1 sm:ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1 sm:ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1 sm:ml-2">Company</label>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={company}
                    onChange={(e)=>setCompany(e.target.value)}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1 sm:ml-2">Product Interest</label>
                  <input
                    type="text"
                    placeholder="Select Product"
                    value={product}
                    onChange={(e)=>setProduct(e.target.value)}
                    className="w-full p-3 sm:p-4 text-sm sm:text-base bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-400 ml-1 sm:ml-2">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="w-full p-3 sm:p-4 text-sm sm:text-base bg-slate-50 border border-slate-100 rounded-xl sm:rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0B2E5B] text-white py-3 sm:py-4 md:py-5 text-sm sm:text-base rounded-xl sm:rounded-2xl font-black uppercase tracking-wider flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:bg-[#C79A3B]"
              >
                Submit Enquiry
                <ArrowRight size={18} />
              </motion.button>

            </form>
          </div>

          {/* ================= DETAILS SIDE ================= */}
          <div className="lg:col-span-5 bg-[#0B2E5B] text-white p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between relative">

            <div>
              <div className="w-12 sm:w-16 h-1 bg-[#C79A3B] mb-8 sm:mb-12 rounded-full" />

              <div className="space-y-8 sm:space-y-12">

                <section>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-xl">
                      <MapPin size={20} className="text-[#C79A3B]" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-black uppercase">Work Address</h2>
                  </div>

                  <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed">
                    M/S. SRIVRUKSH INDUSTRIES PVT LTD<br/>
                    Sr. No. 117/2, Gagai Nagar Nashik Road,<br/>
                    Wakhar Mahamandal Bhosari Pune- 411039<br/>
                    <span className="text-white font-bold">(Maharashtra) India.</span>
                  </p>
                </section>

                <section>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="p-2 sm:p-3 bg-white/10 rounded-xl">
                      <Globe size={20} className="text-[#C79A3B]" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-black uppercase">Direct Lines</h2>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <a href="tel:+919420925126" className="flex items-center gap-3 sm:gap-4">
                      <Phone size={16} />
                      <span className="text-sm sm:text-base font-bold">+91 9420925126</span>
                    </a>

                    <a href="mailto:infosrivruksh@gmail.com" className="flex items-center gap-3 sm:gap-4">
                      <Mail size={16} />
                      <span className="text-sm sm:text-base font-bold">infosrivruksh@gmail.com</span>
                    </a>
                  </div>
                </section>

              </div>
            </div>

            <div className="mt-10 sm:mt-16 pt-6 sm:pt-10 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-white/40 mb-1 sm:mb-2">Tax Registration</p>
                <p className="text-xs sm:text-sm font-bold text-[#C79A3B]">GSTIN: 27ABJCS7257E1ZO</p>
              </div>
              <Activity className="text-white/10" size={36} />
            </div>

          </div>

        </div>

        {/* ================= MAP ================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-8 sm:mt-10 md:mt-12 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-xl border-4 sm:border-8 border-white relative"
        >
          <div className="absolute top-4 sm:top-6 md:top-8 left-4 sm:left-6 md:left-8 z-10">
            <div className="bg-white/90 backdrop-blur px-4 sm:px-5 md:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl shadow-lg flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[#0B2E5B] text-[10px] sm:text-xs font-black uppercase">Live Site Location</span>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.27329437016!2d73.83445!3d18.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA2LjEiTiA3M8KwNTAnMDQuMCJF!5e0!3m2!1sen!2sin!4v1711180000000!5m2!1sen!2sin"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  )
}