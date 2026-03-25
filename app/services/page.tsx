"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Cog, ShieldCheck, Cpu, ArrowRight, Hexagon } from "lucide-react"

const services = [
  {
    title: "Industrial Automation & SPM",
    desc: "We specialize in the design and manufacture of high-performance custom industrial automation systems and Special Purpose Machines (SPM). Our solutions are engineered to integrate seamlessly into existing workflows, drastically improving cycle times, reducing human error, and ensuring 100% precision in repetitive manufacturing tasks.",
    image: "/images/services/automation.jpg",
    icon: <Cpu size={24} />,
    id: "REF-001"
  },
  {
    title: "MS & SS Fabrication",
    desc: "Our fabrication wing delivers heavy-duty Mild Steel (MS) and Stainless Steel (SS) structures with a focus on longevity and structural integrity. From precision-engineered canal gates to complex industrial frameworks, we utilize advanced TIG/MIG welding techniques and corrosion-resistant treatments to meet global safety standards.",
    image: "/images/services/fabrication.jpg",
    icon: <ShieldCheck size={24} />,
    id: "REF-002"
  },
  {
    title: "Heavy & Pipeline Fabrication",
    desc: "Handling large-scale industrial fluid and gas transport requires robust pipeline engineering. We provide end-to-end pipeline fabrication, including high-pressure testing and heavy structural support, ensuring leak-proof operations for chemical, cement, and distillery plants.",
    image: "/images/services/pipeline.jpg",
    icon: <Cog size={24} />,
    id: "REF-003"
  },
  {
    title: "Industrial Structure & Plant Erection",
    desc: "Complete turnkey solutions for industrial facility setup. We manage everything from the initial structural skeleton fabrication to the precise erection and alignment of heavy plant machinery, ensuring your facility is operational with minimal downtime and maximum safety compliance.",
    image: "/images/services/industrialstructure.jpg",
    icon: <Hexagon size={24} />,
    id: "REF-004"
  },
  {
    title: "Precision Machining & Tool Room",
    desc: "Utilizing state-of-the-art CNC and VMC technology, our tool room produces high-tolerance machine components as per intricate technical drawings. We maintain strict quality control to ensure every micron-level detail is achieved for critical industrial spares.",
    image: "/images/services/machining.jpg",
    icon: <Cpu size={24} />,
    id: "REF-005"
  },
  {
    title: "Compressor Sales & Service",
    desc: "Reliable air power is the heart of many factories. We offer a curated range of high-efficiency industrial compressors alongside a specialized service team capable of onsite maintenance and rapid component replacement to keep your pneumatic systems running.",
    image: "/images/services/compressive.jpg",
    icon: <Cog size={24} />,
    id: "REF-006"
  },
  {
    title: "Machine Maintenance & Reconditioning",
    desc: "Don't let aging machinery slow down production. Our reconditioning experts tear down, clean, repair, and upgrade older equipment to modern standards, extending the life of your capital assets and improving overall equipment effectiveness (OEE).",
    image: "/images/services/maintenance.jpg",
    icon: <ShieldCheck size={24} />,
    id: "REF-007"
  },
  {
    title: "Installation & Commissioning",
    desc: "The final step to success. Our engineers manage the end-to-end commissioning process, performing load tests, safety calibrations, and operator training to ensure your new equipment performs exactly as specified in the design phase.",
    image: "/images/services/installation.jpg",
    icon: <ArrowRight size={24} />,
    id: "REF-008"
  },
  {
    title: "Fire Line Systems",
    desc: "Safety is non-negotiable. We design and install high-pressure fire line systems and industrial safety networks tailored to your specific plant layout, meeting all local regulatory requirements and insurance safety benchmarks.",
    image: "/images/services/fireline.jpg",
    icon: <ShieldCheck size={24} />,
    id: "REF-009"
  },
  {
    title: "Industrial Chimney & Tanks",
    desc: "Specialized MS & SS fabrication of exhaust chimneys and chemical storage tanks. Every unit is engineered for thermal expansion, environmental compliance, and pressure-vessel integrity to withstand harsh industrial atmospheres.",
    image: "/images/services/tanks.jpg",
    icon: <Hexagon size={24} />,
    id: "REF-010"
  },
  {
    title: "Boiler Equipment",
    desc: "Manufacturing and critical servicing of industrial boiler components. Our team handles high-temperature structural work and heat exchanger maintenance to ensure maximum thermal efficiency and safe operating pressures.",
    image: "/images/services/boiler.jpg",
    icon: <Cog size={24} />,
    id: "REF-011"
  },
  {
    title: "Heavy Structural Components",
    desc: "Precision components designed for sugar mills, cement plants, and chemical distilleries. We focus on high-load bearing structures and windmill industry components that require extreme mechanical strength and precision alignment.",
    image: "/images/services/heavystrcture.jpg",
    icon: <Cpu size={24} />,
    id: "REF-012"
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-[#f8fafc] overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <div className="relative py-20 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden bg-[#f8fafc]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E5B]/2 via-white to-[#0B2E5B]/2" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(199,154,59,0.1),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(11,46,91,0.05),transparent_50%)]" />

        <motion.div
          className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#C79A3B]/10 rounded-full blur-[80px] md:blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#0B2E5B_1px,transparent_1px),linear-gradient(180deg,#0B2E5B_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-white border border-gray-200 text-[10px] md:text-xs text-[#C79A3B] tracking-[0.2em] md:tracking-[0.35em] uppercase font-bold shadow-sm">
              Operational Excellence
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 leading-[1] md:leading-[0.9] tracking-tighter text-[#0B2E5B]">
              INDUSTRIAL <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">SERVICES</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-medium px-4">
              Delivering high-performance engineering, fabrication, and automation solutions tailored for modern industrial infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= STACKED SERVICES ================= */}
      {/* Container spacing removed to allow cards to overlap immediately */}
      <div className="relative pb-24 md:pb-40">
        {services.map((service, index) => (
          <ServiceCard 
            key={index} 
            service={service} 
            index={index} 
            total={services.length} 
          />
        ))}
      </div>

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden px-6">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <p className="text-[#C79A3B] uppercase tracking-[3px] md:tracking-[6px] text-[10px] md:text-xs font-bold mb-4">Let’s Build Together</p>
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-[#0B2E5B] tracking-tighter">
              READY TO START YOUR <br />
              <span className="text-[#C79A3B] italic underline decoration-1 underline-offset-4 md:underline-offset-8">INDUSTRIAL PROJECT?</span>
            </h2>
            <a href="/contact" className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-[#0B2E5B] text-white text-sm md:text-base font-bold rounded-xl shadow-2xl transition hover:scale-105 hover:bg-[#0d3b75]">
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ service, index, total }: { service: any, index: number, total: number }) {
  const containerRef = useRef(null)
  const isEven = index % 2 === 0
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Smooth transformations for overlapping effect
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1 - (total - index) * 0.015])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <div 
      ref={containerRef} 
      // mb-0 removes extra spacing between sticky cards
      className="sticky top-20 md:top-24 w-full flex justify-center px-4 md:px-8 lg:px-12 mb-0 h-[70vh] md:h-[80vh]"
    >
      <motion.div 
        style={{ scale, opacity, y }}
        className="group relative w-full max-w-[1300px] h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/10 bg-slate-900"
      >
        {/* IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            priority={index < 3}
            className="object-cover opacity-50 brightness-[0.7] contrast-[1.1] transition-transform duration-[3s] ease-out group-hover:scale-110"
          />
          <div className={`absolute inset-0 z-10 bg-[#0B2E5B]/60 md:bg-transparent ${
            isEven 
              ? "md:bg-gradient-to-r md:from-[#0B2E5B]/90 md:via-[#0B2E5B]/60 md:to-transparent" 
              : "md:bg-gradient-to-l md:from-[#0B2E5B]/90 md:via-[#0B2E5B]/60 md:to-transparent"
          }`} />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-10" 
               style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
        </div>

        {/* CONTENT PANEL */}
        <div className={`relative z-20 w-full h-full flex items-center p-6 sm:p-10 md:p-16 lg:p-20 ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center text-center md:text-left`}>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`max-w-2xl flex flex-col items-center ${isEven ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}
          >
            <div className={`flex items-center gap-3 md:gap-4 mb-3 md:mb-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}>
              <div className="w-10 h-10 md:w-16 md:h-16 flex-shrink-0 flex items-center justify-center bg-[#C79A3B] text-white rounded-xl md:rounded-2xl shadow-xl transform group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
              <div className="flex flex-col items-center md:items-inherit">
                <span className="text-[#C79A3B] font-mono text-[9px] md:text-[11px] font-black tracking-widest uppercase">{service.id}</span>
                <span className="text-white/40 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">Module {index + 1}</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white leading-tight md:leading-[1] tracking-tighter uppercase mb-3 md:mb-5">
              {service.title}
            </h2>

            <div className="h-[2px] md:h-[3px] w-12 md:w-20 bg-[#C79A3B] mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(199,154,59,0.5)]" />

            <p className="text-slate-100 text-xs sm:text-sm md:text-lg leading-relaxed font-medium mb-5 md:mb-8 opacity-95 line-clamp-4 md:line-clamp-none">
              {service.desc}
            </p>
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C79A3B]/50 to-transparent opacity-40 z-20" />
      </motion.div>
    </div>
  )
}