import ProjectCard from './project-card'
import {motion} from 'motion/react'
import ShowMoreBtn from './showmoreBtn'
import { projects } from '../constants/project'

const projectVariant = {
    hidden: {
        y: 50,
        opacity: 0,
        filter: 'blur(10px)'
    },
    visible: {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.5,
            delay: 0.3,
            ease: [0.33, 1, 0.68, 1] as any,
        }
    }
}

const Projects = () => {
  return (
    <motion.div
    variants={projectVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{once: true}}
    className='flex flex-col gap-8 mt-30'>
        <div
        
        className='flex justify-between'>
            <p className='text-3xl tracking-tight font-medium'>work.</p>
            <ShowMoreBtn />
        </div>
        <div className='grid grid-cols-2 gap-6'>
            {projects.map((project,idx) => (
                <ProjectCard src={project.src} key={idx} title={project.title} />
            ))}   
        </div>
    </motion.div>
  )
}

export default Projects