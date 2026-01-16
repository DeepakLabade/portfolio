import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '../lib/utils'
import {motion} from "motion/react"
import { BasicVariants } from '../variants/basic-variant'

const WorkTogetherSection = () => {
  return (
    <motion.div 
    variants={BasicVariants}
            initial="hidden"
            whileInView="show"
            viewport={{once: true}}
            transition={{duration: 0.3, delay: 0.2}}
    className='my-10 border border-neutral-800 relative'>
        <div className='text-neutral-100 '>
          <Dots />
          <Dots className='absolute right-0 top-0' />
          <Dots className='absolute rigth-0 bottom-0' />
          <Dots className='absolute right-0 bottom-0' />
            <div className='w-full text-center py-8 flex items-center flex-col gap-3 relative'>
                <h1 className='text-3xl textneu font-bold'>Let's Work Together</h1>
                <p className='text-neutral-400'>Have a project in mind? Let's create something amazing</p>
                <div className='flex gap-2 text-sm'>
                  <Link href={"mailto:deepaklabade001@gmail.com"}>
                    <button className='border cursor-pointer hover:bg-neutral-800 duration-300 border-neutral-800 bg-neutral-900 py-1.5 px-3 rounded-md'>Email Me</button>
                  </Link>
                  <Link href={"#"}>
                    <button className='flex relative items-center justify-center gap-2 cursor-pointer group border border-neutral-800 text-neutral-800 hover:bg-neutral-300 duration-300 bg-neutral-200 py-1.5 px-3 rounded-md'>Book a Call <ArrowRight className='w-4 h-4 transition-transform duration-300' /></button>
                  </Link>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

const Dots = ({className}: {className?: string}) => {
  return (
    <div className={cn('h-1 w-1 bg-neutral-300', className)}>

    </div>
  )
}

export default WorkTogetherSection