"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Boxes, MoveRight } from "lucide-react"

export default function Products() {
  const products = [
    {
      title: "Conveyor Systems",
      image: "/images/products/conveyor2.jpg",
      desc: "Industrial conveyor systems designed for material handling and automation."
    },
    {
      title: "Automation Machines",
      image: "/images/products/automation2.jpg",
      desc: "Custom SPM and automation machines built for industrial productivity."
    },
    {
      title: "Industrial Fabrication",
      image: "/images/products/fabrication1.jpg",
      desc: "Heavy structural fabrication and precision engineering solutions."
    }
  ]

  return (
    <motion.section
      className="py-16 sm:py-24 md:py-32 bg-slate-50 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-xl sm:max-w-2xl"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <span className="w-6 sm:w-8 h-[2px] bg-[#C79A3B]" />
              <p className="text-[#C79A3B] uppercase tracking-[0.25em] sm:tracking-[0.4em] font-black text-[9px] sm:text-[10px] md:text-xs">
                Our Products
              </p>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#0B2E5B] tracking-tight leading-[0.9]">
              ENGINEERING <br />
              <span className="text-slate-300">PRODUCTS</span> & SOLUTIONS
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-500 max-w-xs sm:max-w-sm text-sm sm:text-base md:text-lg font-medium leading-relaxed italic border-l-4 border-[#C79A3B] pl-4 sm:pl-6"
          >
            We design and manufacture industrial machines and fabrication components 
            tailored for modern engineering and manufacturing industries.
          </motion.p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 h-auto lg:h-[700px]">

          {/* LEFT MAIN */}
          <motion.div
            className="lg:col-span-7 group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.5rem] bg-[#0B2E5B] shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src={products[0].image}
              alt={products[0].title}
              fill
              className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700"
            />

            {/* BADGE */}
            <div className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-[#C79A3B] group-hover:text-black transition-colors duration-500">
              <Boxes size={20} />
            </div>

            {/* CONTENT */}
            <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8 md:p-10 bg-gradient-to-t from-[#0B2E5B] via-[#0B2E5B]/60 to-transparent">

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
                {products[0].title}
              </h3>

              <p className="text-slate-300 mb-5 sm:mb-6 md:mb-8 max-w-md text-sm sm:text-base md:text-lg leading-relaxed font-light">
                {products[0].desc}
              </p>

             
               
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-6">
            {products.slice(1).map((product, index) => (
              <motion.div
                key={index}
                className="flex-1 group relative overflow-hidden rounded-[1.8rem] sm:rounded-[2.5rem] bg-slate-900 shadow-xl min-h-[220px] sm:min-h-[260px]"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-30 group-hover:scale-110 transition-all duration-1000"
                />

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 md:p-8">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white mb-2 tracking-tight">
                    {product.title}
                  </h3>

                 
                </div>

                <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 rounded-[1.5rem] transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="flex justify-center mt-10 sm:mt-12 md:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
       
        </motion.div>

      </div>
    </motion.section>
  )
}