import React from 'react'
import ProjectCard from './project-card'
import { ChevronRight } from 'lucide-react'
import { Projects } from '../constants/projects'
import Link from 'next/link'
import {motion} from 'motion/react'
import { BasicVariants } from '../variants/basic-variant'

const ProjectSection = () => {
  return (
    <div className='text-neutral-100 mt-10'>
        <div>
            <div>
                <motion.h1 
                variants={BasicVariants}
                initial="hidden"
                animate="show"
                transition={{duration: 0.3, delay: 0.9}}
                className='text-xl font-bold'>Projects</motion.h1>
            </div>
            <div className='flex flex-col mt-4 gap-4'>
                {Projects.slice(0, 3).map((project, idx) => (
                  <motion.div
                  variants={BasicVariants}
                  initial="hidden"
                  animate="show"
                  transition={{duration: 0.3, delay: 1.0 + (0.1 * idx)}}
                  >
                    <ProjectCard key={idx} project={project} />
                  </motion.div>
                ))}
            </div>
            <motion.div
            variants={BasicVariants}
            initial="hidden"
            animate="show"
            transition={{duration: 0.3, delay: 1.2}}
            className='my-10 flex items-center justify-center'>
              <Link href={"/projects"}>
                <button className='border text-sm border-neutral-700 bg-neutral-950 flex cursor-pointer group text-neutral-200 items-center justify-center gap-2 hover:bg-neutral-900 rounded-lg px-4 py-1.5'>
                    Show All Projects <ChevronRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                </button>
              </Link>
            </motion.div>
        </div>
    </div>
  )
}

function DiagonalLines() {
    return (
      <div className="w-full h-10 rounded-xl"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 12px)"
        }}
      />
    );
  }

export default ProjectSection