import { div } from 'motion/react-client'
import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='flex items-center justify-center w-full'>
        <div className='h-screen min-w-340 mt-22'>
            {children}
        </div>
    </div>
  )
}

export default Container