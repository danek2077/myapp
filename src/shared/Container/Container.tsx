import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto w-9/12 min-w-[1000px] ">
      {children}
    </div>
  )
}

export default Container
