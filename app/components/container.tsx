import React from 'react'

const Container = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full'>
        <div className='max-w-3xl mx-auto px-4'>
            {children}
        </div>
    </div>
  )
}

export default Container