import React from 'react'
import {motion} from 'motion/react'

const projectVariant = {
    hidden: {
        y: 50,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            ease: [0.33, 1, 0.68, 1] as any,
        }
    }
}

const About = () => {
  return (
    <div className='flex flex-col gap-8 mt-30'>
        <motion.div
        variants={projectVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
        className='flex justify-between'>
            <p className='text-3xl tracking-tight font-medium'>about.</p>
            <button className='bg-neutral-100 px-5 py-3 tracking-tight font-medium hover:bg-black hover:text-white cursor-pointer text-center transition duration-300'>Show More</button>
        </motion.div>

        <div className='pt-12 flex flex-col gap-20'>
            <p className='max-w-[730px] text-[47px] tracking-tight font-medium leading-13 whitespace-normal '>
            I work with startups and businesses worldwide, crafting full-stack applications with modern tech.
            </p>
            <div className='flex justify-center gap-20'>
                <div className='w-140 bg-blue-400 h-90'>
                </div>
                <p className='max-w-xs flex items-center font-medium text-lg leading-5'>I build products that are clear, scalable, and user-focused, balancing smart engineering with real-world needs.</p>
            </div>
        </div>
    </div>
  )
}

export default About