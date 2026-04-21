"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, X, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [productOpen, setProductOpen] = useState(false)
  const [mobileProductOpen, setMobileProductOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "#" }, 
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" }
  ]

  const productCategories = [
    { name: "Material Handling", link: "/products/material-handling" },
    { name: "Storage Systems", link: "/products/storage-systems" },
    { name: "Industrial Equipment", link: "/products/industrial-equipment" },
    { name: "Structural Systems", link: "/products/structural-systems" },
    { name: "Process Equipment", link: "/products/process-equipment" },
    { name: "Fabrication", link: "/products/fabrication" },
    { name: "Infrastructure", link: "/products/infrastructure" }
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500
      ${scrolled ? "backdrop-blur-xl bg-white/80 shadow-sm border-b border-gray-100" : "bg-white"}
    `}>

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C79A3B]/50 to-transparent opacity-70" />

      <div className="max-w-[100vw] px-4 sm:px-6 md:px-10 lg:px-12">
        <div className={`flex items-center transition-all duration-500
          ${scrolled ? "h-[65px] sm:h-[70px]" : "h-[70px] sm:h-[80px] md:h-[95px]"}`}>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
            <div className="relative">
              <Image
                src="/images/assets/logo1.png"
                width={60}
                height={60}
                alt="logo"
                className="sm:w-[65px] md:w-[70px] h-auto"
              />
              <div className="absolute inset-0 rounded-full bg-[#C79A3B]/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            <span className="flex flex-col leading-tight">
              <span className="text-lg sm:text-xl md:text-2xl font-black text-[#0B2E5B] uppercase tracking-tight">
                Srivruksh
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold text-[#C79A3B] tracking-[0.2em] md:tracking-[0.3em] uppercase -mt-1">
                Industries Pvt. Ltd.
              </span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex flex-grow items-center justify-center gap-6 lg:gap-10">
            {navLinks.map((item) => {
              if (item.name === "Products") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setProductOpen(true)}
                    onMouseLeave={() => setProductOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm font-bold uppercase tracking-[0.12em] text-gray-500 hover:text-[#0B2E5B]">
                      Products
                      <ChevronDown size={16} className={`transition-transform duration-300 ${productOpen ? "rotate-180" : ""}`} />
                    </button>

                    <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[260px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 transition-all duration-300
                      ${productOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                    `}>
                      {productCategories.map((cat, i) => (
                        <Link
                          key={i}
                          href={cat.link}
                          className={`block px-4 py-3 text-sm font-bold rounded-xl transition ${pathname === cat.link ? "text-[#0B2E5B] bg-gray-50" : "text-gray-600 hover:text-[#0B2E5B] hover:bg-gray-50"}`}
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }

              const isActive = pathname === item.link
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`relative text-sm font-bold uppercase tracking-[0.12em] group ${isActive ? "text-[#0B2E5B]" : "text-gray-500 hover:text-[#0B2E5B]"}`}
                >
                  {item.name}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#C79A3B] transition-all duration-500 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="bg-[#C79A3B] text-white px-7 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:scale-105 transition shadow-lg shadow-[#C79A3B]/20"
            >
              Get Quote
            </Link>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 border ml-auto text-[#0B2E5B]"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* MOBILE SIDE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60] md:hidden"
            />

            {/* Sidebar Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-[70] md:hidden shadow-2xl flex flex-col"
            >
              <div className="p-6 flex items-center justify-between border-b">
                <span className="text-xl font-black text-[#0B2E5B] uppercase tracking-tight">Srivruksh</span>
                <button 
                  onClick={() => setMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-[#0B2E5B]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {navLinks.map((item) => {
                  if (item.name === "Products") {
                    return (
                      <div key={item.name} className="flex flex-col">
                        <button
                          onClick={() => setMobileProductOpen(!mobileProductOpen)}
                          className="flex justify-between items-center w-full text-lg font-black text-[#0B2E5B] uppercase py-2"
                        >
                          {item.name}
                          <ChevronDown className={`transition-transform ${mobileProductOpen ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {mobileProductOpen && (
                            <motion.div 
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-4 flex flex-col gap-2"
                            >
                              {productCategories.map((cat, i) => (
                                <Link
                                  key={i}
                                  href={cat.link}
                                  className="text-sm font-bold text-gray-500 py-2 uppercase"
                                >
                                  {cat.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  }

                  return (
                    <Link
                      key={item.name}
                      href={item.link}
                      className={`text-lg font-black uppercase py-2 border-b border-gray-50 ${pathname === item.link ? "text-[#C79A3B]" : "text-[#0B2E5B]"}`}
                    >
                      {item.name}
                    </Link>
                  )
                })}
              </div>

              <div className="p-6 border-t">
                <Link
                  href="/contact"
                  className="block w-full bg-[#0B2E5B] text-white py-4 rounded-xl text-center font-black uppercase tracking-widest"
                >
                  Request Quote
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}