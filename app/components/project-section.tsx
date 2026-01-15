import React from 'react'
import ProjectCard from './project-card'
import { ChevronRight } from 'lucide-react'

const ProjectSection = () => {
  return (
    <div className='text-neutral-100 mt-10'>
        <div>
            <div>
                <h1 className='text-xl font-bold'>Projects</h1>
            </div>
            <div className='flex flex-col mt-4 gap-4'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
            <div className='my-10 flex items-center justify-center'>
                <button className='border text-sm border-neutral-700 bg-neutral-950 flex cursor-pointer group text-neutral-200 items-center justify-center gap-2 hover:bg-neutral-900 rounded-lg px-4 py-1.5'>
                    Show All Projects <ChevronRight className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                </button>
            </div>
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