import { div } from 'motion/react-client'
import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex items-center justify-center w-full'>
        <div className='min-w-340 mt-12'>
            {children}
        </div>
    </div>
  )
}

export default Container