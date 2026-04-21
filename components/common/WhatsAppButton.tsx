"use client"

import { motion } from "framer-motion"
import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppButton() {

  const phoneNumber = "919420925126"
  const message = "Hello Srivruksh Industries, I want to know more about your services."
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <div className="fixed bottom-5 right-5 z-50">

      {/* 🔥 Tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:block absolute right-16 bottom-3 bg-white text-gray-800 text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
      >
        Chat on WhatsApp
      </motion.div>

      {/* 🔥 Button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.1 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_25px_rgba(37,211,102,0.5)]"
      >

        {/* 🔥 Pulse */}
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>

        {/* ✅ REAL WHATSAPP LOGO */}
        <FaWhatsapp size={28} className="text-white relative z-10" />

      </motion.a>

    </div>
  )
}