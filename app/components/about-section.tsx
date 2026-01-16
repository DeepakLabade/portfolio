import {motion} from 'motion/react'
import { BasicVariants } from '../variants/basic-variant'

const AboutSection = () => {
  return (
    <div className='text-neutral-100 mt-10'>
        <div>
            <div>
                <motion.h1
                variants={BasicVariants}
                initial="hidden"
                animate="show"
                transition={{duration: 0.3, delay: 0.7}}
                className='text-xl font-bold'>About</motion.h1>
                <motion.p
                variants={BasicVariants}
                initial="hidden"
                animate="show"
                transition={{duration: 0.3, delay:0.8}}
                className='text-neutral-400 font-mono text-sm tracking-wide mt-4'>Turning 'what if' into 'it's live.' I specialize in building full-stack software that prioritizes clarity over complexity and reliability over hype. Whether it’s a seamless frontend or a robust backend, I build tools that people actually use.</motion.p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection