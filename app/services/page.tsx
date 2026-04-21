"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
<<<<<<< HEAD
import { Cog, ShieldCheck, Cpu, ArrowRight, Hexagon, Anchor, Layers, Scissors, Truck } from "lucide-react"

const services = [
  {
    title: "Sheet Metal Fabrication",
    desc: "High-precision sheet metal processing including bending, punching, and forming. We work with various gauges to create accurate enclosures, panels, and industrial components tailored to your exact specifications.",
    image: "/images/services/sheet-metal3.png",
    icon: <Layers size={24} />,
    id: "REF-001"
  },
  {
    title: "SS Fabrication",
    desc: "Specialized Stainless Steel fabrication for food, chemical, and pharmaceutical industries. We ensure high-grade finishes and superior corrosion resistance using advanced TIG welding and pickling-passivation processes.",
    image: "/images/services/ss-fab2.png",
=======
import { Cog, ShieldCheck, Cpu, ArrowRight, Hexagon } from "lucide-react"

const services = [
  {
    title: "Industrial Automation & SPM",
    desc: "We specialize in the design and manufacture of high-performance custom industrial automation systems and Special Purpose Machines (SPM). Our solutions are engineered to integrate seamlessly into existing workflows, drastically improving cycle times, reducing human error, and ensuring 100% precision in repetitive manufacturing tasks.",
    image: "/images/services/automation2.jpg",
    icon: <Cpu size={24} />,
    id: "REF-001"
  },
  {
    title: "MS & SS Fabrication",
    desc: "Our fabrication wing delivers heavy-duty Mild Steel (MS) and Stainless Steel (SS) structures with a focus on longevity and structural integrity. From precision-engineered canal gates to complex industrial frameworks, we utilize advanced TIG/MIG welding techniques and corrosion-resistant treatments to meet global safety standards.",
    image: "/images/services/fabrication1.jpg",
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
    icon: <ShieldCheck size={24} />,
    id: "REF-002"
  },
  {
<<<<<<< HEAD
    title: "MS Heavy Fabrication",
    desc: "Heavy-duty Mild Steel structural work for massive industrial frameworks. Our facility is equipped to handle large-scale girders, columns, and heavy machinery bases with strict adherence to load-bearing standards.",
    image: "/images/services/heavy-ms1.png",
    icon: <Anchor size={24} />,
    id: "REF-003"
  },
  {
    title: "Fabrication with Machining",
    desc: "A comprehensive turnkey solution where fabricated structures are precision-machined on VMC/CNC centers. This ensures perfect alignment of mounting holes, bores, and mating surfaces on large welded assemblies.",
    image: "/images/services/machining-fab.png",
    icon: <Cpu size={24} />,
    id: "REF-004"
  },
  {
    title: "MS Fabrication Services",
    desc: "Versatile Mild Steel fabrication for industrial gates, platforms, and secondary structures. We provide end-to-end services from design and material procurement to final coating and installation.",
    image: "/images/services/ms-services.png",
    icon: <Hexagon size={24} />,
    id: "REF-005"
  },
  {
    title: "Crane Manufacturing Services",
    desc: "Design and manufacturing of industrial overhead cranes, gantry cranes, and jib cranes. We focus on mechanical safety, smooth trolley movement, and robust structural integrity for heavy lifting requirements.",
    image: "/images/services/crane-mfg.png",
    icon: <Truck size={24} />,
    id: "REF-006"
  },
  {
    title: "MS Manufacturing Services",
    desc: "Scalable manufacturing solutions for MS products and components. We utilize automated welding and standardized production cycles to deliver high-volume industrial parts with consistent quality.",
    image: "/images/services/ms-mfg.png",
    icon: <Cog size={24} />,
    id: "REF-007"
  },
  {
    title: "Profile Cutting Service",
    desc: "Advanced CNC Plasma and Oxy-fuel profile cutting for intricate shapes in thick plates. We ensure clean edges and high dimensional accuracy for industrial gears, flanges, and custom plate components.",
    image: "/images/services/profile-cut.png",
    icon: <Scissors size={24} />,
    id: "REF-008"
  },
  {
    title: "MS Profile Cutting Service",
    desc: "Specialized high-speed cutting for Mild Steel plates. Our precision nesting software reduces material wastage while delivering high-tolerance parts for structural and mechanical applications.",
    image: "/images/services/ms-profile.png",
    icon: <Scissors size={24} />,
    id: "REF-009"
  },
  {
    title: "Tank Manufacturing",
    desc: "Expert design and fabrication of industrial storage tanks for water, fuel, and chemical processing. We perform rigorous leak testing and pressure checks to ensure long-term containment safety.",
    image: "/images/services/tanks-generic.png",
=======
    title: "Heavy & Pipeline Fabrication",
    desc: "Handling large-scale industrial fluid and gas transport requires robust pipeline engineering. We provide end-to-end pipeline fabrication, including high-pressure testing and heavy structural support, ensuring leak-proof operations for chemical, cement, and distillery plants.",
    image: "/images/services/pipeline1.jpg",
    icon: <Cog size={24} />,
    id: "REF-003"
  },
  {
    title: "Industrial Structure & Plant Erection",
    desc: "Complete turnkey solutions for industrial facility setup. We manage everything from the initial structural skeleton fabrication to the precise erection and alignment of heavy plant machinery, ensuring your facility is operational with minimal downtime and maximum safety compliance.",
    image: "/images/services/industrialstrcture1.jpg",
    icon: <Hexagon size={24} />,
    id: "REF-004"
  },
  {
    title: "Precision Machining & Tool Room",
    desc: "Utilizing state-of-the-art CNC and VMC technology, our tool room produces high-tolerance machine components as per intricate technical drawings. We maintain strict quality control to ensure every micron-level detail is achieved for critical industrial spares.",
    image: "/images/services/machining2.jpg",
    icon: <Cpu size={24} />,
    id: "REF-005"
  },
  {
    title: "Compressor Sales & Service",
    desc: "Reliable air power is the heart of many factories. We offer a curated range of high-efficiency industrial compressors alongside a specialized service team capable of onsite maintenance and rapid component replacement to keep your pneumatic systems running.",
    image: "/images/services/compressive1.jpg",
    icon: <Cog size={24} />,
    id: "REF-006"
  },
  {
    title: "Machine Maintenance & Reconditioning",
    desc: "Don't let aging machinery slow down production. Our reconditioning experts tear down, clean, repair, and upgrade older equipment to modern standards, extending the life of your capital assets and improving overall equipment effectiveness (OEE).",
    image: "/images/services/maintainance1.jpg",
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
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
    icon: <Hexagon size={24} />,
    id: "REF-010"
  },
  {
<<<<<<< HEAD
    title: "MS Tank Manufacturing",
    desc: "Custom Mild Steel tanks for industrial oil storage, silos, and water containment. Includes internal epoxy coatings and external protective paints to prevent oxidation and extend service life.",
    image: "/images/services/ms-tanks.png",
    icon: <Anchor size={24} />,
    id: "REF-011"
  },
  {
    title: "SS Tank Manufacturing",
    desc: "Premium Stainless Steel tanks (SS 304/316) for hygienic storage and chemical processing. Features mirror-finish interiors and high-quality welding to meet stringent sanitary standards.",
    image: "/images/services/ss-tanks.png",
    icon: <ShieldCheck size={24} />,
    id: "REF-012"
  },
  {
    title: "Industries Pilot Manufacturing",
    desc: "Support for prototype development and small-batch pilot runs. We help industries bridge the gap between design and mass production by manufacturing functional industrial prototypes and testing rigs.",
    image: "/images/services/pilot-mfg.png",
    icon: <ArrowRight size={24} />,
    id: "REF-013"
=======
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
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
  }
]

export default function ServicesPage() {
  return (
    <main className="bg-[#f8fafc] overflow-x-hidden">
      {/* ================= HEADER ================= */}
      <div className="relative py-20 md:py-32 lg:py-40 px-4 sm:px-6 overflow-hidden bg-[#f8fafc]">
<<<<<<< HEAD
=======
        {/* Adjusted blue to a lighter slate variant */}
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
        <div className="absolute inset-0 bg-gradient-to-r from-slate-200/50 via-white to-slate-200/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(199,154,59,0.1),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(30,41,59,0.05),transparent_50%)]" />

        <motion.div
          className="absolute -top-20 -left-20 md:-top-40 md:-left-40 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#C79A3B]/10 rounded-full blur-[80px] md:blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        />

        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(90deg,#1e293b_1px,transparent_1px),linear-gradient(180deg,#1e293b_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <div className="inline-block mb-4 md:mb-6 px-4 md:px-6 py-1.5 md:py-2 rounded-full bg-white border border-gray-200 text-[10px] md:text-xs text-[#C79A3B] tracking-[0.2em] md:tracking-[0.35em] uppercase font-bold shadow-sm">
              Operational Excellence
            </div>
<<<<<<< HEAD
=======
            {/* Swapped dark blue for Slate-800 */}
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-4 md:mb-6 leading-[1] md:leading-[0.9] tracking-tighter text-slate-800">
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
            <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 text-slate-800 tracking-tighter">
              READY TO START YOUR <br />
              <span className="text-[#C79A3B] italic underline decoration-1 underline-offset-4 md:underline-offset-8">INDUSTRIAL PROJECT?</span>
            </h2>
            <a href="/contact" className="inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-slate-800 text-white text-sm md:text-base font-bold rounded-xl shadow-2xl transition hover:scale-105 hover:bg-slate-900">
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

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1 - (total - index) * 0.015])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.9], [1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 1], [0, -30])

  return (
    <div 
      ref={containerRef} 
      className="sticky top-20 md:top-24 w-full flex justify-center px-4 md:px-8 lg:px-12 mb-0 h-[70vh] md:h-[80vh]"
    >
      <motion.div 
        style={{ scale, opacity, y }}
<<<<<<< HEAD
        className="group relative w-full max-w-[1300px] h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 bg-slate-900/40 backdrop-blur-sm"
      >
        {/* FULL BLEED IMAGE LAYER */}
=======
        className="group relative w-full max-w-[1300px] h-full rounded-[2rem] md:rounded-[3.5rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 bg-slate-800"
      >
        {/* IMAGE LAYER */}
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            priority={index < 3}
<<<<<<< HEAD
            className="object-cover opacity-80 brightness-[0.7] transition-transform duration-[3s] ease-out group-hover:scale-110"
          />
          
          {/* Gradient Overlay for Readability */}
          <div className={`absolute inset-0 z-10 ${
            isEven 
              ? "bg-gradient-to-r from-slate-900/90 via-slate-900/40 to-transparent" 
              : "bg-gradient-to-l from-slate-900/90 via-slate-900/40 to-transparent"
          }`} />
=======
            className="object-cover opacity-60 brightness-[0.8] contrast-[1.05] transition-transform duration-[3s] ease-out group-hover:scale-105"
          />
          {/* Lightened the overlay gradient from #0B2E5B/90 to slate-900/80 */}
          <div className={`absolute inset-0 z-10 bg-slate-900/60 md:bg-transparent ${
            isEven 
              ? "md:bg-gradient-to-r md:from-slate-900/80 md:via-slate-900/40 md:to-transparent" 
              : "md:bg-gradient-to-l md:from-slate-900/80 md:via-slate-900/40 md:to-transparent"
          }`} />
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay z-10" 
               style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/carbon-fibre.png")` }} />
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
        </div>

        {/* CONTENT PANEL */}
        <div className={`relative z-20 w-full h-full flex items-center p-6 sm:p-10 md:p-16 lg:p-20 ${isEven ? 'md:justify-start' : 'md:justify-end'} justify-center text-center md:text-left`}>
          <motion.div 
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
=======
            initial={{ opacity: 0, y: 10 }}
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
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
<<<<<<< HEAD
                <span className="text-white/60 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">Industrial Module {index + 1}</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-[0.95] tracking-tighter uppercase mb-4">
              {service.title}
            </h2>

            <div className="h-[2px] md:h-[4px] w-12 md:w-20 bg-[#C79A3B] mb-5 md:mb-8 rounded-full shadow-[0_0_15px_rgba(199,154,59,0.5)]" />

            <p className="text-slate-50 text-xs sm:text-sm md:text-xl leading-relaxed font-medium mb-6 md:mb-10 opacity-95 drop-shadow-md line-clamp-4 md:line-clamp-none">
=======
                <span className="text-white/60 text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold">Module {index + 1}</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-white leading-tight md:leading-[1] tracking-tighter uppercase mb-3 md:mb-5">
              {service.title}
            </h2>

            <div className="h-[2px] md:h-[3px] w-12 md:w-20 bg-[#C79A3B] mb-4 md:mb-6 rounded-full shadow-[0_0_15px_rgba(199,154,59,0.5)]" />

            <p className="text-slate-50 text-xs sm:text-sm md:text-lg leading-relaxed font-medium mb-5 md:mb-8 opacity-95 line-clamp-4 md:line-clamp-none">
>>>>>>> 1f2e97152050e7589b05386aaebed61d5c66c0b2
              {service.desc}
            </p>
          </motion.div>
        </div>

        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C79A3B]/50 to-transparent opacity-40 z-20" />
      </motion.div>
    </div>
  )
}