"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Products() {

const products = [
{
title:"Conveyor Systems",
image:"/images/products/conveyor1.jpg",
desc:"Industrial conveyor systems designed for material handling and automation."
},
{
title:"Automation Machines",
image:"/images/products/automation.jpg",
desc:"Custom SPM and automation machines built for industrial productivity."
},
{
title:"Industrial Fabrication",
image:"/images/products/fabrication.jpg",
desc:"Heavy structural fabrication and precision engineering solutions."
}
]

return (

<motion.section
className="py-28 bg-white"
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<motion.div
className="text-center mb-20"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

<p className="text-[#C79A3B] uppercase tracking-[4px] font-semibold mb-3">
Our Products
</p>

<h2 className="text-4xl md:text-5xl font-bold text-[#0B2E5B] mb-5">
Engineering Products & Solutions
</h2>

<p className="text-gray-600 max-w-2xl mx-auto text-lg">
We design and manufacture industrial machines and fabrication components 
tailored for modern engineering and manufacturing industries.
</p>

</motion.div>


{/* Products Layout */}

<div className="grid lg:grid-cols-3 gap-8">

{/* Featured Product */}

<motion.div
className="lg:col-span-2 group relative h-[420px] rounded-2xl overflow-hidden shadow-lg"
initial={{opacity:0,x:-40}}
whileInView={{opacity:1,x:0}}
transition={{duration:0.7}}
viewport={{once:true}}
whileHover={{scale:1.02}}
>

<Image
src={products[0].image}
alt={products[0].title}
fill
className="object-cover group-hover:scale-110 transition duration-700"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B]/90 via-[#0B2E5B]/40 to-transparent"></div>

{/* Content */}

<div className="absolute bottom-8 left-8 right-8 text-white">

<h3 className="text-2xl md:text-3xl font-bold mb-3">
{products[0].title}
</h3>

<p className="text-gray-200 mb-4 max-w-md">
{products[0].desc}
</p>

<Link
href="/products"
className="inline-flex items-center text-[#C79A3B] font-semibold"
>

View Details

<span className="ml-2 transform group-hover:translate-x-1 transition">
→
</span>

</Link>

</div>

</motion.div>


{/* Side Products */}

<div className="flex flex-col gap-8">

{products.slice(1).map((product,index)=>(

<motion.div
key={index}
initial={{opacity:0,x:40}}
whileInView={{opacity:1,x:0}}
transition={{delay:index * 0.2, duration:0.6}}
viewport={{once:true}}
whileHover={{scale:1.02}}
>

<div
className="group relative h-[200px] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
>

<Image
src={product.image}
alt={product.title}
fill
className="object-cover group-hover:scale-110 transition duration-700"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-gradient-to-t from-[#0B2E5B]/90 via-[#0B2E5B]/40 to-transparent"></div>

{/* Content */}

<div className="absolute bottom-6 left-6 right-6 text-white">

<h3 className="text-lg font-semibold mb-2">
{product.title}
</h3>

<Link
href="/products"
className="text-[#C79A3B] font-semibold text-sm"
>

View Details →

</Link>

</div>

</div>

</motion.div>

))}

</div>

</div>


{/* CTA */}

<motion.div
className="text-center mt-20"
initial={{opacity:0,y:30}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
viewport={{once:true}}
>

<Link
href="/products"
className="inline-flex items-center gap-2 bg-[#C79A3B] hover:bg-[#b88a2d] text-white px-10 py-3 rounded-lg font-semibold shadow-xl transition hover:scale-105"
>

View All Products

<span className="text-lg">→</span>

</Link>

</motion.div>

</div>

</motion.section>

)
}