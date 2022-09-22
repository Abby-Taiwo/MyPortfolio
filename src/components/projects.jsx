import React from 'react'
import clone2 from '../images/clone2.png'
import clone from '../images/clone.png'
function projects() {
  return (
   <div className='mt-20'>
        <h1 className='text-center text-white text-6xl text-bold'>Projects</h1>
      <div className='p-16'>
        <img src={clone2} alt="screenshot" className='mb-8' />
        <img src={clone} alt="screenshot" />
      </div>
      <div className='text-white text-center'>
        <h3>A Netflix clone</h3>
        <h4>React &nbsp; &nbsp;  Tailwind &nbsp; &nbsp;   Html &nbsp; &nbsp;   Api</h4>
      </div>
      
   </div>
  )
}

export default projects
