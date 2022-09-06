import React from 'react'

const Welcome = () => {
  return (
    <div className="max-w-2xl md:-mt-44 pl-12">
        <h3 className="text-3xl text-slate-600 italic">
          Welcome to our application 😎
        </h3>
        <p className="text-slate-500 font-fira">
          You can create as many poll as you want. Click on the new button to
          create a new poll. To check details of a poll please select from the
          left sidebar.By selecting a poll you can check it's details,
          participate and check others opinion about this poll
        </p>
      </div> 
  )
}

export default Welcome