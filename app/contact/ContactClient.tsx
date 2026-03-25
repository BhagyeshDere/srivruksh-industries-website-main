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
    <section className="bg-[#f8fafc] text-[#0B2E5B] overflow-hidden min-h-screen">

      {/* HERO */}
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

          <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto text-slate-300 font-medium opacity-80 px-2">
            Strategic industrial partnerships start with a conversation. Let’s engineer the future.
          </p>
        </motion.div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20 md:-mt-32 relative z-20 pb-14 sm:pb-16 md:pb-20">

        <div className="grid lg:grid-cols-12 bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_30px_60px_-20px_rgba(11,46,91,0.15)] overflow-hidden border border-slate-100">

          {/* FORM */}
          <div className="lg:col-span-7 p-5 sm:p-8 md:p-12 lg:p-14 xl:p-16">
            <div className="max-w-md">
              <h2 className="text-2xl sm:text-3xl font-black mb-2 uppercase tracking-tight">Send Enquiry</h2>
              <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base font-medium">
                Complete the form below for a technical consultation.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

              {/* YOUR UI EXACTLY SAME — NO CHANGE */}

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border rounded-xl" required />
                <input type="email" placeholder="Email Address" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border rounded-xl" required />
              </div>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                <input type="text" placeholder="Company" value={company} onChange={(e)=>setCompany(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border rounded-xl" />
                <input type="text" placeholder="Product Interest" value={product} onChange={(e)=>setProduct(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border rounded-xl" />
              </div>

              <textarea rows={4} placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full p-3 sm:p-4 bg-slate-50 border rounded-xl" />

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-[#0B2E5B] text-white py-3 sm:py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#C79A3B]"
              >
                {loading ? "Sending..." : "Submit Enquiry"}
                <ArrowRight size={18} />
              </motion.button>

            </form>
          </div>

          {/* DETAILS */}
          <div className="lg:col-span-5 bg-[#0B2E5B] text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between gap-10">

            <div className="space-y-10 sm:space-y-12">

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <MapPin size={18} className="text-[#C79A3B]" />
                  </div>
                  <h2 className="text-lg font-black uppercase">Work Address</h2>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  M/S. SRIVRUKSH INDUSTRIES PVT LTD<br/>
                  Sr. No. 117/2, Gangai Nagar Nashik Road,<br/>
                  Wakhar Mahamandal Bhosari Pune- 411039<br/>
                  <span className="text-white font-bold">(Maharashtra) India.</span>
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/10 rounded-xl">
                    <Globe size={18} className="text-[#C79A3B]" />
                  </div>
                  <h2 className="text-lg font-black uppercase">Direct Lines</h2>
                </div>

                <div className="space-y-3">
                  <a href="tel:+919420925126" className="flex items-center gap-3">
                    <Phone size={16} />
                    <span className="text-sm font-bold">+91 9420925126</span>
                  </a>

                  <a href="mailto:infosrivruksh@gmail.com" className="flex items-center gap-3">
                    <Mail size={16} />
                    <span className="text-sm font-bold">infosrivruksh@gmail.com</span>
                  </a>
                </div>
              </section>

            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[9px] uppercase tracking-wider text-white/40 mb-1">Tax Registration</p>
                <p className="text-xs font-bold text-[#C79A3B]">GSTIN: 27ABJCS7257E1ZO</p>
              </div>
              <Activity className="text-white/10" size={32} />
            </div>

          </div>

        </div>
        {/* MAP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-6 sm:mt-8 md:mt-10 rounded-[2rem] overflow-hidden shadow-xl border-4 sm:border-6 border-white relative"
        >
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[#0B2E5B] text-[10px] font-black uppercase">Live Site Location</span>
            </div>
          </div>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.27329437016!2d73.83445!3d18.6517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM5JzA2LjEiTiA3M8KwNTAnMDQuMCJF!5e0!3m2!1sen!2sin!4v1711180000000!5m2!1sen!2sin"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
            loading="lazy"
          />
        </motion.div>

      </div>

      {/* 🔥 MODERN TOAST (NOW CORRECT POSITION) */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 right-6 z-[9999]"
          >
            <div
              className={`relative backdrop-blur-xl border border-white/20 shadow-2xl px-6 py-4 rounded-2xl text-white min-w-[280px]
              ${toast.type === "success" ? "bg-green-600/80" : "bg-red-600/80"}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">
                  {toast.type === "success" ? "✅" : "❌"}
                </span>
                <span className="font-semibold">{toast.message}</span>
              </div>

              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3.5, ease: "linear" }}
                className="absolute bottom-0 left-0 h-1 bg-white/80 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  )
}
  
