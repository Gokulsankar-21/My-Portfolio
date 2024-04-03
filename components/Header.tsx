import React from "react"
import {motion }  from 'framer-motion'
export default function Header() {
  return (
      <header>
      <motion.div className="fixed z-[999] top-0 left-1/2 
          -translate-x-1/2 h-[4.5rem] w-full 
          rounded-none border border-white
           border-opacity-40 bg-white bg-opacity-80   
           shalg shadow-black/[0.03] backdrop-blur-[0.5rem]
           sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full
           "
           
      >
            
          </motion.div>
    </header>
  )
}
