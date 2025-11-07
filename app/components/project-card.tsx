import Image from 'next/image'
import React from 'react'

const ProjectCard = ({src, title}: {src: string, title: string}) => {
  return (
    <div>
  <div className="group relative bg-red-200 cursor-pointer overflow-hidden h-[650px]">

    {/* IMAGE */}
    <Image
      src={src}
      alt={title}
      className="w-full h-full transition-transform duration-500 group-hover:scale-110 object-cover"
      fill
      // quality={100}
      unoptimized
    />

    <div
    className="absolute bottom-0 left-0 w-full h-2/3 
    bg-linear-to-t from-black/70 to-transparent
    opacity-0 transition-opacity duration-300
    group-hover:opacity-100 pointer-events-none text-white text-6xl tracking-tight flex pt-80 pl-12 "
  >{title}</div>

  </div>
</div>
  
  )
}

export default ProjectCard