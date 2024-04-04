'use client'

import React from 'react'
import SectionHeading from './Section-Heading'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <motion.section className='max-w-[45rem] text-center mb-28 sm:mb-40 mt-16 sm:mt-0 leading-8' 
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{
        delay:0.175
    }}>
        <SectionHeading>
            About me
        </SectionHeading>
        <p className='mb-3 '>
            After granduating with a degree in {' '}
            <span className='font-medium'>Computer Science</span>, I decided to pursue my passion for Web Development and Programming. I I enrolled coding bootcamp and learned {' '}  <span className='font-medium'>full-stack development</span>,. {' '}
            <span className='italic'>My favourite part of programming</span> is the develping modern web apps and building stunning websites. I <span className="underline">love</span> the feeling of finally figuring out a solution to a problem. My core stack is { ' '}
            <span className='font-medium'>React.js, Next.js, Node.js and MongoDB</span>. I am also familiar with TypeScript and Cloud Architect. I am always looking to learn new technologies. I am currently looking for a {' '}
            <span className='font-medium'>full-time  position as a software developer</span>

        </p>
        <p>When I'm not coding,
        <span className='italic'> I am being  proud son of my mother.</span>{' '} I also enjoy
        <span className='font-medium'> learning new things</span>. I am currently learning about <span className='underline font-medium'>next.js.</span> 
        </p>
    </motion.section>
  )
}
/**make it simple and fast */
/**
 * cloud architect alt
 * 
 */