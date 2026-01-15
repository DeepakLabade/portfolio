import { ArrowRight } from 'lucide-react'
import React from 'react'

const WorkTogetherSection = () => {
  return (
    <div className='my-10 border border-neutral-800'>
        <div className='text-neutral-100'>
            <div className='w-full text-center py-8 flex items-center flex-col gap-3'>
                <h1 className='text-3xl textneu font-bold'>Let's Work Together</h1>
                <p className='text-neutral-400'>Have a project in mind? Let's create something amazing</p>
                <div className='flex gap-2 text-sm'>
                    <button className='border cursor-pointer hover:bg-neutral-800 duration-300 border-neutral-800 bg-neutral-900 py-1.5 px-3 rounded-md'>Email Me</button>
                    <button className='flex relative items-center justify-center gap-2 cursor-pointer group border border-neutral-800 text-neutral-800 hover:bg-neutral-300 duration-300 bg-neutral-200 py-1.5 px-3 rounded-md'>Book a Call <ArrowRight className='w-4 h-4 transition-transform duration-300' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WorkTogetherSection