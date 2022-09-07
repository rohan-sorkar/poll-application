import React from 'react'

const AppContainer = ({children}) => {
  return (
    <div className="max-w-6xl mx-auto mt-16 sm:mt-32 mb-20 flex flex-col items-center md:flex-row md:justify-start px-4 sm:px-10">
        {children}
    </div>
  )
}

export default AppContainer