import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto w-9/12">{children}</div>
}

export default Container
