import React from 'react'

const ShowMoreBtn = () => {
  return (
    <button className='bg-neutral-100 px-5 py-3 relative tracking-tight font-medium hover:bg-black hover:text-white cursor-pointer text-center transition duration-300'>
        show more
        <div className='absolute h-1.5 w-1.5 bg-black top-0 animate-pulse left-0'></div>
        <div className='absolute h-1.5 w-1.5 bg-black bottom-0 left-0 animate-pulse'></div>
        <div className='absolute h-1.5 w-1.5 bg-black top-0 right-0 animate-pulse'></div>
        <div className='absolute h-1.5 w-1.5 bg-black bottom-0 right-0 animate-pulse'></div>
    </button>
  )
}

export default ShowMoreBtn