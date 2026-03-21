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
    <main className="bg-[#f8fafc]">
      {/* ================= HEADER ================= */}
      <div className="relative py-24 md:py-32 lg:py-40 px-6 overflow-hidden bg-[#f8fafc]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E5B]/5 via-white to-[#0B2E5B]/5" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <div className="inline-block mb-6 px-6 py-2 rounded-full bg-white border border-gray-200 text-xs text-[#C79A3B] tracking-[0.35em] uppercase font-bold shadow-sm">
              Operational Excellence
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter text-[#0B2E5B]">
              INDUSTRIAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#C79A3B] to-[#e6c36a]">
                SERVICES
              </span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              Delivering high-performance engineering, fabrication, and automation
              solutions tailored for modern industrial infrastructure.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= STACKED SERVICES ================= */}
      <div className="relative pb-32">
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
      <section className="relative py-24 bg-white border-t border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C79A3B] uppercase tracking-[6px] text-xs font-bold mb-4">Let’s Build Together</p>
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-[#0B2E5B] tracking-tighter">
              READY TO START YOUR <br />
              <span className="text-[#C79A3B] italic underline decoration-1 underline-offset-8">INDUSTRIAL PROJECT?</span>
            </h2>
            <a
              href="/contact"
              className="inline-flex items-center px-10 py-5 bg-[#0B2E5B] text-white font-bold rounded-xl shadow-2xl transition hover:scale-105 hover:bg-[#0d3b75]"
            >
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
    offset: ["start end", "start start"]
  })

  // Stacking Scale effect: previous cards shrink slightly as new ones arrive
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 - (total - index) * 0.01])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.9])

  return (
    <div 
      ref={containerRef} 
      className="sticky top-12 md:top-24 w-full flex justify-center px-4 md:px-6 mb-12"
    >
      <motion.div 
        style={{ scale, opacity }}
        className="relative w-full max-w-7xl h-[85vh] md:h-[75vh] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border border-white/20 bg-slate-900"
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover opacity-60 brightness-[0.7] contrast-[1.1]"
          />
          {/* Gradient Mask */}
          <div className={`absolute inset-0 ${
            isEven 
              ? "bg-gradient-to-r from-[#0B2E5B] via-[#0B2E5B]/60 to-transparent" 
              : "bg-gradient-to-l from-[#0B2E5B] via-[#0B2E5B]/60 to-transparent"
          }`} />
        </div>

        {/* CONTENT PANEL */}
        <div className={`relative z-10 w-full h-full flex items-center p-8 md:p-20 ${isEven ? 'justify-start' : 'justify-end'}`}>
          <motion.div 
            initial={{ opacity: 0, x: isEven ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className={`max-w-2xl ${isEven ? 'text-left' : 'text-right'}`}
          >
            {/* ICON & MODULE ID */}
            <div className={`flex items-center gap-4 mb-8 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
              <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center bg-[#C79A3B] text-white rounded-3xl shadow-xl">
                {service.icon}
              </div>
              <div>
                <span className="text-[#C79A3B] font-mono text-xs font-black tracking-widest uppercase block">
                  {service.id}
                </span>
                <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] font-bold">Module {index + 1}</span>
              </div>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl md:text-6xl font-black text-white leading-[1] tracking-tighter uppercase mb-6">
              {service.title}
            </h2>

            {/* DIVIDER */}
            <div className={`h-[3px] w-24 bg-[#C79A3B] mb-8 rounded-full ${isEven ? '' : 'ml-auto'}`} />

            {/* DESCRIPTION */}
            <p className="text-slate-200 text-sm md:text-xl leading-relaxed font-medium mb-10 opacity-90">
              {service.desc}
            </p>

            {/* BUTTON */}
            <button className={`flex items-center gap-3 text-white text-xs md:text-sm font-black uppercase tracking-widest group ${isEven ? '' : 'flex-row-reverse ml-auto'}`}>
              <span className="group-hover:text-[#C79A3B] transition-colors">Technical Specifications</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#C79A3B] group-hover:border-[#C79A3B] transition-all">
                <ArrowRight size={18} className="text-white" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* TOP OVERLAY DECORATION */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C79A3B]/50 to-transparent opacity-30" />
      </motion.div>
    </div>
  )
}