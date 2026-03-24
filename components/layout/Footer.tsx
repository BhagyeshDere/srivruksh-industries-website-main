"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Instagram,
  Globe,
  Phone,
  Mail
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0B2E5B] text-white relative overflow-hidden font-sans">

      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 bg-[#C79A3B]/20 blur-3xl rounded-full" />
      <div className="absolute -bottom-20 -right-20 w-60 sm:w-72 md:w-96 h-60 sm:h-72 md:h-96 bg-white/10 blur-3xl rounded-full" />

      {/* Main */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-16 md:py-20">
        <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-black leading-tight tracking-tight uppercase italic">
                Srivruksh <br/>
                <span className="text-[#C79A3B] text-[9px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] font-bold block mt-1">
                  Industries
                </span>
              </h3>
            </div>

            <p className="text-gray-300 text-sm sm:text-[15px] leading-relaxed mb-6 sm:mb-8 max-w-sm font-medium opacity-80">
              Engineering & Fabrication Works delivering industrial automation,
              heavy fabrication, and custom manufacturing solutions.
            </p>

            <div className="flex gap-2 sm:gap-3 flex-wrap">

              <a
                href="#"
                className="bg-white/5 hover:bg-[#C79A3B] transition-all p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:scale-105 border border-white/10"
              >
                <Instagram size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>

              <a
                href="#"
                className="bg-white/5 hover:bg-[#C79A3B] transition-all p-2 sm:p-2.5 rounded-lg sm:rounded-xl hover:scale-105 border border-white/10"
              >
                <Globe size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>

            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] sm:text-xs md:text-sm font-black mb-5 sm:mb-7 text-[#C79A3B] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Sitemap
            </h4>

            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-300 font-semibold">
              {[
                { name: "Home", link: "/" },
                { name: "About Us", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Products", link: "/products" },
                { name: "Gallery", link: "/gallery" },
                { name: "Contact", link: "/contact" }
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.link}
                    className="hover:text-white transition flex items-center gap-2 sm:gap-3 group"
                  >
                    <span className="w-0 group-hover:w-3 sm:group-hover:w-4 h-[2px] bg-[#C79A3B] transition-all"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] sm:text-xs md:text-sm font-black mb-5 sm:mb-7 text-[#C79A3B] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Expertise
            </h4>

            <ul className="space-y-3 sm:space-y-4 text-sm text-gray-300 font-semibold">
              {[
                "Industrial Automation",
                "Structural Fabrication",
                "Precision Machining",
                "Pipeline Fabrication",
                "Machine Maintenance",
                "Boiler Manufacturing"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2 sm:gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C79A3B] rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (UPDATED 🔥) */}
          <div>
            <h4 className="text-[10px] sm:text-xs md:text-sm font-black mb-5 sm:mb-7 text-[#C79A3B] uppercase tracking-[0.2em] sm:tracking-[0.3em]">
              Connect
            </h4>

            <ul className="space-y-4 sm:space-y-5 text-sm text-gray-300 font-semibold">
              
              <li className="flex items-start gap-3 leading-relaxed">
                <span>📍</span>
                <span>
                  M/S. SRIVRUKSH INDUSTRIES PVT LTD <br/>
                  Sr. No. 117/2, Gangai Nagar Nashik Road, <br/>
                  Wakhar Mahamandal, Bhosari Pune - 411039 <br/>
                  (Maharashtra) India
                </span>
              </li>

              <li className="flex items-center gap-2 sm:gap-3 hover:text-white transition">
                <Phone size={14} className="text-[#C79A3B]" /> +91 9420925126
              </li>

              <li className="flex items-center gap-2 sm:gap-3 hover:text-white transition">
                <Mail size={14} className="text-[#C79A3B]" /> infosrivruksh@gmail.com
              </li>

              <li className="flex items-center gap-2 sm:gap-3 hover:text-white transition">
                <Mail size={14} className="text-[#C79A3B]" /> srivruksh0052@gmail.com
              </li>

              <li className="pt-3 mt-2 border-t border-white/5">
                <span className="text-[9px] text-[#C79A3B] block font-black tracking-widest uppercase mb-1">
                  Registration
                </span>
                <span className="text-xs font-mono opacity-90">
                  GSTIN: 27ABJCS7257E1ZO
                </span>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Bottom */}
      <div className="py-5 px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-gray-400 max-w-7xl mx-auto gap-3 sm:gap-4">
        
        <p className="text-center md:text-left">
          © {new Date().getFullYear()} Srivruksh Industries all rights reserved.
        </p>

        <p className="text-center md:text-right">
          Developed by{" "}
          <span className="text-[#C79A3B] hover:text-white transition">
            QIRO TECH INNOVATION PVT. LTD.
          </span>
        </p>

      </div>
    </footer>
  )
}