"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
export default function Intro() {
  return (
    <section>
        <div className="relative flex items-center justify-center">
            <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                type:'tween',
                duration:0.2,
            }}
            >
                <Image src='/mypic.jpg' width='192' height='192' alt='Gokulsankar Thangaraj' quality={'95'} priority={true}
                
                className='w-24 h-24 rounded-full object-cover shadow-xl
                 border-[0.35rem] border-white'/>
            </motion.div>
            <motion.div 
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            transition={{
                type:'spring',
                delay:0.1,
                stiffness:125,
                duration:0.7
            }}
            className=' absolute bottom-1 right-2'
            >
                <Image src='/hello-img.png' alt='hello' width='100' height='100'  quality={'95'} priority={true}
                 className='w-9 h-9  '/>
            </motion.div>
        </div>
    </section>
  )
}
/***
 * 
 * enaku oru cool ana image ah ready pannanum,
 * cool and stylish ana profile venum
 */
