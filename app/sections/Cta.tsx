'use client'
import { motion } from 'framer-motion'
import React from 'react'

const Cta = () => {

  return (
    <section className="py-24 lg:py-24 overflow-x-hidden">
     <div className="px-5">
     <div className="flex overflow-hidden mt-12" style={{ WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)', maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)' }}>
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          className="flex flex-none gap-24 pr-24"
        >
            <div className="flex flex-none gap-16 pr-16 text-7xl font-medium group">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div key={index} className="flex justify-center gap-16">
                        <span className='text-lime-400' >&#10038;</span>
                        <p className="ml-3 group-hover:text-lime-400 cursor-pointer">Try It For Free</p>
                    </div>
                ))}
            </div>
        </motion.div>
        </div>
        </div>
        
    </section>
  )
}

export default Cta
