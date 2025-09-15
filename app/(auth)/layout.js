import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className="flex justify-center pt-40">{children}</div> // rendering them using children
  )
}

export default AuthLayout;