import React from 'react'
import Container from '../components/container'
import ProjectCard from '../components/project-card'
import Footer from '../components/footer'
import { Projects } from '../constants/projects'

const ProjectsPage = () => {
  return (
    <div className=''>
        <Container classname={'border-x border-neutral-800border-x border-neutral-800 h-fit '}>
          <div className='pb-10 px-6'>
            <div className='text-neutral-100 pt-20'>
                <h1 className='text-3xl font-bold'>Projects</h1>
                <p className='text-neutral-400 pt-2'>A collection of projects I've worked on.</p>
            </div>
            <div className='flex flex-col gap-4 text-neutral-100 pt-8'>
              {Projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
          <Footer />
        </Container>
    </div>
  )
}

export default ProjectsPage