'use client'
import {motion} from 'motion/react'
import { useState } from 'react'

const smoothEase = [0.42, 0.21, 0.0, 0.97]

const navVariants = {
    hidden: {
        y: -70,
        opacity: 0.3
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1.2, 
            ease: smoothEase as any
        }
    },
}

const Header = () => {

    const [showLinks, setShowLinks] = useState(false)

  return (
    <div className='fixed w-full border-b border-neutral-100 h-[93px]'>
        <div className='w-full h-full flex justify-between px-9 items-center'>
            <motion.p
            variants={navVariants}
            initial='hidden'
            animate='visible'
            className='text-3xl font-semibold'>DEEPAK</motion.p>
            <div className='flex gap-8 items-center'>
                <div  className={`${showLinks ? 'text-black' : 'text-white'} transition flex gap-8 font-medium tracking-tighter text-lg`}>
                    <p>Works</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className='flex items-center justify-center w-5 h-5'>
                <motion.div
                layout
                onClick={() => {
                    setShowLinks(x => !x)
                }}
                variants={navVariants}
                initial='hidden'
                animate='visible'
                className={`${showLinks ? 'w-4 h-4 relative' : 'w-5 h-5 relative'}`}>
                    <motion.div layout className={`${showLinks ? 'w-[5.5px] h-[6px]' : 'w-[6px] h-[6px]'} right-0 absolute bg-black`}></motion.div>
                    <motion.div layout className={`${showLinks ? 'w-[6px] h-[5.5px]' : 'w-[6px] h-[5px]'} bg-black`}></motion.div>
                    <motion.div layout className={`${showLinks ? 'w-[6px] h-[5.5px]' : 'w-[5px] h-[5px]'} bottom-0 bg-black absolute `}></motion.div>
                    <motion.div layout className={`${showLinks ? 'w-[5.5px] h-[5.7px]' : 'w-[5px] h-[6px]'} bottom-0 right-0  bg-black absolute`}></motion.div>
                    <motion.div className={`${showLinks ? 'bg-black' : 'bg-white'} transition flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px]`}></motion.div>
                </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

const SquareDot = () => {
    return (
        <div className='bg-black h-1 w-1'></div>
    )
}

export default Header