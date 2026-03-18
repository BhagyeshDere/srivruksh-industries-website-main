"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function WhyChoose() {

  const features = [
    {
      icon: "⚙",
      title: "Advanced Manufacturing",
      text: "Equipped with modern machines and precision tools to deliver high quality engineering solutions."
    },
    {
      icon: "🏭",
      title: "Industrial Expertise",
      text: "Extensive experience in fabrication, automation and industrial engineering solutions."
    },
    {
      icon: "✔",
      title: "Quality & Reliability",
      text: "Committed to delivering reliable products and services with the highest quality standards."
    }
  ]

  return (
<motion.section
className="relative py-28 w-full overflow-hidden"
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8}}
viewport={{once:true}}
>

      {/* Background Image */}

      <Image
        src="/images/assets/why.png"
        alt="Industrial Manufacturing"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-[#0B2E5B]/95 via-[#0B2E5B]/85 to-[#0B2E5B]/70"></div>

      {/* Decorative Glow */}

<motion.div
className="absolute -top-20 -left-20 w-96 h-96 bg-[#C79A3B]/20 rounded-full blur-3xl"
animate={{scale:[1,1.1,1]}}
transition={{repeat:Infinity,duration:6}}
></motion.div>

<motion.div
className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#0B2E5B]/40 rounded-full blur-3xl"
animate={{scale:[1.1,1,1.1]}}
transition={{repeat:Infinity,duration:6}}
></motion.div>

      {/* Content */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

        {/* Heading */}

<motion.div
className="text-center mb-20"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

          <p className="text-[#C79A3B] uppercase tracking-[4px] font-semibold mb-3">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Why Choose Srivruksh Industries
          </h2>

          <p className="max-w-2xl mx-auto text-gray-200 text-lg">
            We combine engineering expertise with modern manufacturing
            facilities to deliver reliable, high-performance industrial
            solutions tailored to client requirements.
          </p>

</motion.div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-3 gap-10">

          {features.map((item, index) => (

<motion.div
key={index}
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{delay:index * 0.2, duration:0.6}}
viewport={{once:true}}
whileHover={{scale:1.03}}
>

            <div
              className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20 hover:border-[#C79A3B]/50 transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Icon */}

<motion.div
className="mb-6 w-14 h-14 flex items-center justify-center rounded-xl text-2xl bg-gradient-to-br from-[#C79A3B] to-[#e0b85d] text-[#0B2E5B] font-bold shadow-lg group-hover:scale-110 transition"
animate={{y:[0,-4,0]}}
transition={{repeat:Infinity,duration:3}}
>
                {item.icon}
</motion.div>

              {/* Title */}

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* Divider */}

              <div className="w-12 h-[2px] bg-[#C79A3B] mb-4 group-hover:w-20 transition-all duration-300"></div>

              {/* Text */}

              <p className="text-gray-200 text-sm leading-relaxed">
                {item.text}
              </p>

            </div>

</motion.div>

          ))}

        </div>

        {/* CTA */}

<motion.div
className="text-center mt-16"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

          <button className="relative inline-flex items-center gap-2 bg-[#C79A3B] hover:bg-[#b88a2d] px-10 py-3 rounded-lg font-semibold shadow-xl transition">

            Learn More

            <span className="text-lg">→</span>

          </button>

</motion.div>

      </div>

</motion.section>

  )
}