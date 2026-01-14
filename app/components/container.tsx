import React from 'react'

const Container = ({children, classname}: {children: React.ReactNode, classname?: String}) => {
  return (
    <div className='w-full'>
        <div className={`max-w-3xl mx-auto px-6 ${classname} bg-[#0A0A0A] pb-1`}>
            {children}
        </div>
    </div>
  )
}

export default Container