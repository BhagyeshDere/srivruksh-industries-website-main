"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Mail, MapPin, Globe, ArrowRight, Activity } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"

export default function ContactClient() {
  const searchParams = useSearchParams()

  const [product, setProduct] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const [toast, setToast] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)

  useEffect(() => {
    emailjs.init("ssFZ5lWWq1_8C0WCk")
  }, [])

  useEffect(() => {
    const p = searchParams.get("product")
    if (p) setProduct(p)
  }, [searchParams])

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 3500)
      return () => clearTimeout(timer)
    }
  }, [toast])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    if (!name || !email) {
      setToast({ type: "error", message: "Please fill required fields ❗" })
      return
    }
    setLoading(true)

    try {
      await emailjs.send(
        "service_8h9nyqp",
        "template_8bewe2q",
        {
          user_name: name,
          user_email: email,
          product_name: product || "N/A",
          message: `Company: ${company || "N/A"}\n\n${message || "N/A"}`,
        }
      )
      setToast({ type: "success", message: "Enquiry sent successfully ✅" })
      setName("")
      setEmail("")
      setCompany("")
      setMessage("")
      setProduct("")
    } catch (error: any) {
      console.error(error)
      setToast({
        type: "error",
        message: error?.text || "Failed to send ❌",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#f8fafc] text-slate-900 overflow-hidden min-h-screen">

      {/* HERO */}
      <div className="relative h-[320px] sm:h-[400px] md:h-[550px] flex items-center justify-center overflow-hidden bg-slate-900">

        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-40"
        >
          <Image
            src="/images/factory/about.jpg"
            alt="Industrial"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent" />

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

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-slate-200 font-medium opacity-90 px-2">
            Strategic industrial partnerships start with a conversation. Let’s engineer the future.
          </p>
        </motion.div>
      </div>

      {/* MAIN CONTENT CARD */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 md:-mt-32 relative z-20 pb-14 sm:pb-16 md:pb-20">

        <div className="grid lg:grid-cols-12 bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(15,23,42,0.15)] overflow-hidden border border-slate-100">

          {/* FORM */}
          <div className="lg:col-span-7 p-6 sm:p-10 md:p-14 lg:p-16">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-black mb-2 uppercase tracking-tight text-slate-900">Send Enquiry</h2>
              <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base font-medium">
                Complete the form below for a technical consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C79A3B] outline-none transition-all" required />
                <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C79A3B] outline-none transition-all" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <input type="text" placeholder="Company" value={company} onChange={(e)=>setCompany(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C79A3B] outline-none transition-all" />
                <input type="text" placeholder="Product Interest" value={product} onChange={(e)=>setProduct(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C79A3B] outline-none transition-all" />
              </div>

              <textarea rows={4} placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#C79A3B] outline-none transition-all resize-none" />

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#C79A3B] transition-colors shadow-lg"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
                <ArrowRight size={18} />
              </motion.button>
            </form>
          </div>

          {/* DETAILS */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 md:p-14 flex flex-col justify-between gap-10">

            <div className="space-y-10 sm:space-y-12">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <MapPin size={18} className="text-[#C79A3B]" />
                  </div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Work Address</h2>
                </div>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                  M/S. SRIVRUKSH INDUSTRIES PVT LTD<br/>
                  Sr. No. 117/2, Gangai Nagar Nashik Road,<br/>
                  Wakhar Mahamandal Bhosari Pune- 411039<br/>
                  <span className="text-white font-bold">(Maharashtra) India.</span>
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <Globe size={18} className="text-[#C79A3B]" />
                  </div>
                  <h2 className="text-lg font-black uppercase tracking-tight">Direct Lines</h2>
                </div>
                <div className="space-y-4">
                  <a href="tel:+919420925126" className="flex items-center gap-3 group">
                    <Phone size={16} className="text-[#C79A3B]" />
                    <span className="text-sm font-bold group-hover:text-[#C79A3B] transition-colors">+91 9420925126</span>
                  </a>
                  <a href="mailto:infosrivruksh@gmail.com" className="flex items-center gap-3 group">
                    <Mail size={16} className="text-[#C79A3B]" />
                    <span className="text-sm font-bold group-hover:text-[#C79A3B] transition-colors">infosrivruksh@gmail.com</span>
                  </a>
                </div>
              </section>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/40 mb-1 font-bold">Tax Registration</p>
                <p className="text-xs font-bold text-[#C79A3B] font-mono">GSTIN: 27ABJCS7257E1ZO</p>
              </div>
              <Activity className="text-white/5" size={40} />
            </div>
          </div>

        </div>

        {/* MAP SECTION - Full Color View */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-10 md:mt-12 rounded-[2rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white relative"
        >
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white/95 backdrop-blur px-4 py-2 rounded-xl shadow-lg flex items-center gap-2 border border-slate-100">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-slate-900 text-[10px] font-black uppercase tracking-wider">Live Site Location</span>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.490074697924!2d73.8398188!3d18.6419445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b8004f298813%3A0xc66699a779183424!2sWakhar%20Mahamandal%2C%20Bhosari%2C%20Pune%2C%20Maharashtra%20411039!5e0!3m2!1sen!2sin!4v1713512345678!5m2!1sen!2sin"
            className="w-full h-[300px] sm:h-[450px] md:h-[550px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>

      {/* TOAST NOTIFICATION */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-6 right-6 z-[9999]"
          >
            <div
              className={`relative backdrop-blur-xl border border-white/20 shadow-2xl px-6 py-4 rounded-2xl text-white min-w-[280px]
              ${toast.type === "success" ? "bg-emerald-600/90" : "bg-rose-600/90"}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  {toast.type === "success" ? "✅" : "❌"}
                </span>
                <span className="font-bold tracking-tight">{toast.message}</span>
              </div>
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-white/40 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}