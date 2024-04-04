"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { FaGithub, FaGithubSquare } from 'react-icons/fa'
export default function Intro() {
  return (
    <section className='max-w-[50rem] text-center '>
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
            initial={{opacity:0,x:'40px',scale:0}}
            animate={{opacity:1,x:'40px',scale:1}}
            transition={{
                type:'spring',
                delay:0.1,
                stiffness:125,
                duration:0.7
            }}
            className=' absolute bottom-0 right-1/2'
            >
                <Image src='/hello-img.png' alt='hello' width='100' height='100'  quality={'95'} priority={true}
                 className='w-9 h-9  '/>
            </motion.div>
        </div>
        {/* Text */}
        <motion.p 
        className='mt-4 mb-10 px-4 text-2xl sm:text-3xl  font-medium !leading-[1.5] '
        
        initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}>
            <span className='font-bold'>
                Hello, I'm Gokulsankar.
            </span> I'm a  {' '}
            <span className='font-bold'>
                full-stack-developer
            </span> with {' '}
            <span className='font-bold'>
                hands-on 
            </span> {' '}experience. I enjoy building <span className='italic'>
                web apps and sites
            </span>. My focus is {' '}
            <span className='underline cursor-pointer'>React (Next.js)</span>
        </motion.p>
        {/* Actions */}
        <motion.div className='flex flex-col sm:flex-row
         items-center justify-center gap-2 font-medium text-lg'
         initial={{opacity:0,y:100}}
         animate={{opacity:1,y:0}}
         >
             <Link href='#contact' 
             className='group bg-gray-900 text-white px-7 py-3 rounded-full flex items-center justify-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 transition'>
                Contact me here <BsArrowRight  className='opacity-80 group-hover:translate-x-1' />
             </Link>
             <a className='group text-gray-700 px-7 bg-white py-3 rounded-full flex items-center justify-center gap-2 outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10'
             href='/cv.pdf' 
             download
             >
               Download CV <HiDownload  className='opacity-70 group-hover:translate-y-1'/> 
             </a>

             <a className='text-gray-700 p-4 bg-white rounded-full flex items-center justify-center
             outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950'
             
             href='https://github.com/Gokulsankar-21' target='_blank'>
                <BsLinkedin />
             </a>

             <a className='text-gray-700 p-4 bg-white rounded-full flex items-center justify-center text-[1.35rem]
             outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 hover:text-gray-950'
             href='https://github.com/Gokulsankar-21' target='_blank'>
                <FaGithubSquare  />
             </a>
        </motion.div>
    </section>
  )
}
/***
 * 
 * enaku oru cool ana image ah ready pannanum,
 * cool and stylish ana profile venum
 * Docker la excite ana visyam iruku -  vm oda - cloud host env oda
 * typescript - another god gift ah irukum
 * enaku oru computer venum athu enaku romba payanullatha iruku, athu moolima na athigama visyangala explore pannuven, productivity topnatch ah irukum
 * 
 ennoda manathiraila iT industry pathi na oru visuaalize  panni iruken
 * 
 */
/**
 * @portfolio_ideas
 * en portfolio la cloud ku nu thani oru section 
 */

/**
 * 
 * root route la public um add aguum
 * https://3000-gokulsankar-myportfolio-78hbq4427o5.ws-us110.gitpod.io/cv.pdf
 * 
 * ithu nama route ah manage pannra maari 
 * static files elam root route la access aguthu 
 */
/**
 * nice hover effect m, nice focus effect, nice active effect
 */