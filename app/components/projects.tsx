import ProjectCard from './project-card'
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
            delay: 0.2
        }
    }
}

const Projects = () => {
  return (
    <motion.div
    variants={projectVariant}
        initial='hidden'
        whileInView='visible'
    className='flex flex-col gap-8 mt-30'>
        <div
        
        className='flex justify-between'>
            <p className='text-3xl tracking-tight font-medium'>work.</p>
            <button className='bg-neutral-100 px-5 py-3 tracking-tight font-medium hover:bg-black hover:text-white cursor-pointer text-center transition'>Show More</button>
        </div>
        <div className='grid grid-cols-2 gap-6'>
            <ProjectCard src='https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600' title="Something" />
            <ProjectCard src='/avatar.png' title="Another project" />
            <ProjectCard src='/avatar.png' title='Another One' />
        </div>
    </motion.div>
  )
}

export default Projects