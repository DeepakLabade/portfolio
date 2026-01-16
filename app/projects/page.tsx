'use client'
import Container from '../components/container'
import ProjectCard from '../components/project-card'
import Footer from '../components/footer'
import { Projects } from '../constants/projects'
import {motion} from "motion/react"
import { BasicVariants } from '../variants/basic-variant'

const ProjectsPage = () => {
  return (
    <div className=''>
        <Container classname={'border-x border-neutral-800border-x border-neutral-800 h-fit '}>
          <div className='pb-10 px-6'>
            <div className='text-neutral-100 pt-20'>
                <motion.h1
                variants={BasicVariants}
                initial="hidden"
                animate="show"
                viewport={{once: true}}
                transition={{duration: 0.3, delay: 0.2}}
                className='text-3xl font-bold'>Projects</motion.h1>
                <motion.p
                variants={BasicVariants}
                initial="hidden"
                animate="show"
                viewport={{once: true}}
                transition={{duration: 0.3, delay: 0.3}}
                className='text-neutral-400 pt-2'>A collection of projects I've worked on.</motion.p>
            </div>
            <div className='flex flex-col gap-4 text-neutral-100 pt-8'>
              {Projects.map((project, idx) => (
                <motion.div
                variants={BasicVariants}
            initial="hidden"
            animate="show"
            viewport={{once: true}}
            transition={{duration: 0.3, delay: 0.4 + (0.1 * idx)}}
                >
                  <ProjectCard key={idx} project={project} />
                </motion.div>
              ))}
            </div>
          </div>
          <Footer />
        </Container>
    </div>
  )
}

export default ProjectsPage