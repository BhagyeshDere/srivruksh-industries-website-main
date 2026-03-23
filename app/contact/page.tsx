"use client"

export const dynamic = "force-dynamic"  // ✅ ADD THIS

import { Suspense } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Globe, ArrowRight, Activity } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <Contact />
    </Suspense>
  )
}

function Contact() {
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

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const phoneNumber = "919420925126"
    const text = `📩 New Enquiry\n\n👤 Name: ${name}\n📧 Email: ${email}\n🏢 Company: ${company}\n📦 Product: ${product}\n\n📝 Message:\n${message}`
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
    window.open(url, "_blank")
  }

  return (
    <section className="bg-[#f8fafc] text-[#0B2E5B] overflow-hidden min-h-screen">
      
      {/* ================= HERO SECTION ================= */}
      <div className="relative h-[450px] md:h-[600px] flex items-center justify-center overflow-hidden bg-[#0B2E5B]">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
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
        
        {/* Decorative Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
          <h1 className="text-[20vw] font-black text-white tracking-tighter">CONNECT</h1>
        </div>

        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C79A3B]/20 border border-[#C79A3B]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C79A3B] animate-pulse" />
            <span className="text-[#C79A3B] text-[10px] font-black uppercase tracking-[0.3em]">Global Operations</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 uppercase text-white tracking-tighter">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">Us</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto font-medium opacity-80">
            Strategic industrial partnerships start with a conversation. Let’s engineer the future.
          </p>
        </motion.div>
      </div>

      {/* ================= MAIN CONTENT AREA ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-32 md:-mt-48 relative z-20 pb-24">
        
        <div className="grid lg:grid-cols-12 bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(11,46,91,0.15)] overflow-hidden border border-slate-100">
          
          {/* ================= FORM SIDE (7 Cols) ================= */}
          <div className="lg:col-span-7 p-8 md:p-16 lg:p-20">
            <div className="max-w-md">
              <h2 className="text-3xl font-black mb-2 uppercase tracking-tight">Send Enquiry</h2>
              <p className="text-slate-400 mb-10 font-medium">Complete the form below for a technical consultation.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white transition-all font-medium"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white transition-all font-medium"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Company</label>
                  <input
                    type="text"
                    placeholder="Organization Name"
                    value={company}
                    onChange={(e)=>setCompany(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Product Interest</label>
                  <input
                    type="text"
                    placeholder="Select Product"
                    value={product}
                    onChange={(e)=>setProduct(e.target.value)}
                    className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea
                  placeholder="Describe your requirements..."
                  rows={4}
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  className="w-full p-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none focus:border-[#C79A3B] focus:bg-white transition-all font-medium resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0B2E5B] text-white py-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-xl shadow-[#0B2E5B]/20 hover:bg-[#C79A3B] transition-colors"
              >
                Submit Enquiry
                <ArrowRight size={20} />
              </motion.button>
            </form>
          </div>

          {/* ================= DETAILS SIDE (5 Cols) ================= */}
          <div className="lg:col-span-5 bg-[#0B2E5B] text-white p-8 md:p-16 flex flex-col relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C79A3B] opacity-10 blur-[100px]" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="w-16 h-1.5 bg-[#C79A3B] mb-12 rounded-full" />
                
                <div className="space-y-12">
                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <MapPin size={24} className="text-[#C79A3B]" />
                      </div>
                      <h2 className="text-xl font-black uppercase tracking-tight">Work Address</h2>
                    </div>
                    <p className="text-slate-300 text-lg leading-relaxed font-medium">
                      M/S. SRIVRUKSH INDUSTRIES PVT LTD<br/>
                      Sr. No. 117/2, Gagai Nagar Nashik Road,<br/>
                      Wakhar Mahamandal Bhosari Pune- 411039<br/>
                      <span className="text-white font-black">(Maharashtra) India.</span>
                    </p>
                  </section>

                  <section>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/10 rounded-xl">
                        <Globe size={24} className="text-[#C79A3B]" />
                      </div>
                      <h2 className="text-xl font-black uppercase tracking-tight">Direct Lines</h2>
                    </div>
                    <div className="space-y-4">
                      <a href="tel:+919420925126" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C79A3B] transition-all">
                          <Phone size={18} />
                        </div>
                        <span className="text-lg font-bold">+91 9420925126</span>
                      </a>
                      <a href="mailto:infosrivruksh@gmail.com" className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#C79A3B] transition-all">
                          <Mail size={18} />
                        </div>
                        <span className="text-lg font-bold">infosrivruksh@gmail.com</span>
                      </a>
                    </div>
                  </section>
                </div>
              </div>

              <div className="mt-20 pt-10 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-2">Tax Registration</p>
                    <p className="text-sm font-black tracking-widest text-[#C79A3B]">GSTIN: 27ABJCS7257E1ZO</p>
                  </div>
                  <Activity className="text-white/10" size={48} />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= MAP SECTION ================= */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white relative group"
        >
          <div className="absolute top-8 left-8 z-10">
            <div className="bg-white/90 backdrop-blur px-6 py-3 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[#0B2E5B] font-black text-xs uppercase tracking-widest">Live Site Location</span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.27329437016!2d73.83445!3d18.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA2LjEiTiA3M8KwNTAnMDQuMCJF!5e0!3m2!1sen!2sin!4v1711180000000!5m2!1sen!2sin"
            className="w-full h-[500px] border-0 grayscale contrast-125 filter group-hover:grayscale-0 transition-all duration-1000"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

      </div>
    </section>
  )
}