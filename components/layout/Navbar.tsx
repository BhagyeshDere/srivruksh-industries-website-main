"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown } from "lucide-react"

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

  // ✅ PRODUCTS BACK IN POSITION
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Products", link: "#" }, // ❌ NO ROUTE
    { name: "Gallery", link: "/gallery" },
    { name: "Contact", link: "/contact" }
  ]

  const productCategories = [
    { name: "Material Handling", link: "/products/material-handling" },
    { name: "Process Equipment", link: "/products/process-equipment" },
    { name: "Fabrication", link: "/products/fabrication" },
    { name: "Infrastructure", link: "/products/infrastructure" }
  ]

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500
      ${scrolled ? "backdrop-blur-xl bg-white/80 shadow-sm border-b border-gray-100" : "bg-white"}
    `}>

      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C79A3B]/50 to-transparent opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className={`flex justify-between items-center transition-all duration-500
          ${scrolled ? "h-[65px] sm:h-[70px]" : "h-[70px] sm:h-[80px] md:h-[95px]"}`}>

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
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
              <span className="text-lg sm:text-xl md:text-2xl font-black text-[#0B2E5B] uppercase italic">
                Srivruksh
              </span>
              <span className="text-[9px] sm:text-xs font-bold text-[#C79A3B] tracking-[0.4em] uppercase -mt-1">
                Industries
              </span>
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">

            {navLinks.map((item) => {

              // ✅ PRODUCTS DROPDOWN IN SAME POSITION
              if (item.name === "Products") {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setProductOpen(true)}
                    onMouseLeave={() => setProductOpen(false)}
                  >
                    <button
                      className="flex items-center gap-1 text-sm font-bold uppercase tracking-[0.12em] text-gray-500 hover:text-[#0B2E5B]"
                    >
                      Products
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${productOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* DROPDOWN */}
                    <div className={`absolute top-full left-0 mt-4 w-[260px] bg-white rounded-2xl shadow-xl border border-gray-100 p-4 transition-all duration-300
                      ${productOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}
                    `}>
                      {productCategories.map((cat, i) => {
                        const isActive = pathname === cat.link
                        return (
                          <Link
                            key={i}
                            href={cat.link}
                            className={`block px-4 py-3 text-sm font-bold rounded-xl transition
                              ${isActive ? "text-[#0B2E5B] bg-gray-50" : "text-gray-600 hover:text-[#0B2E5B] hover:bg-gray-50"}
                            `}
                          >
                            {cat.name}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              const isActive = pathname === item.link

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`relative text-sm font-bold uppercase tracking-[0.12em] group
                    ${isActive ? "text-[#0B2E5B]" : "text-gray-500 hover:text-[#0B2E5B]"}`}
                >
                  {item.name}
                  <span className={`absolute left-0 -bottom-1 h-[2px] bg-[#C79A3B] transition-all duration-500
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>
              )
            })}

            {/* CTA */}
            <Link
              href="/contact"
              className="bg-[#C79A3B] text-white px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest hover:scale-105 transition"
            >
              Get Quote
            </Link>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 border"
          >
            <div className="flex flex-col gap-1.5">
              <span className={`${menuOpen ? "rotate-45 translate-y-2" : ""} h-[2px] w-6 bg-[#0B2E5B]`} />
              <span className={`${menuOpen ? "opacity-0" : ""} h-[2px] w-4 bg-[#0B2E5B]`} />
              <span className={`${menuOpen ? "-rotate-45 -translate-y-2" : ""} h-[2px] w-5 bg-[#0B2E5B]`} />
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div className={`md:hidden transition-all duration-500 ${
        menuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="mx-4 my-4 rounded-2xl bg-white shadow-xl border p-6 flex flex-col gap-5">

          {navLinks.map((item) => {
            if (item.name === "Products") {
              return (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileProductOpen(!mobileProductOpen)}
                    className="flex justify-between w-full text-lg font-black text-[#0B2E5B] uppercase border-b pb-2"
                  >
                    Products
                    <ChevronDown className={`${mobileProductOpen ? "rotate-180" : ""}`} />
                  </button>

                  {mobileProductOpen && (
                    <div className="pl-4 mt-2">
                      {productCategories.map((cat, i) => (
                        <Link
                          key={i}
                          href={cat.link}
                          onClick={() => setMenuOpen(false)}
                          className="block text-sm font-bold text-gray-600 py-2 uppercase"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            }

            return (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-black text-[#0B2E5B] uppercase border-b pb-2"
              >
                {item.name}
              </Link>
            )
          })}

          <Link
            href="/contact"
            className="bg-[#0B2E5B] text-white py-3 rounded-xl text-center font-black uppercase"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </header>
  )
}