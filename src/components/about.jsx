import React from 'react'
import mypicture from '../images/mypicture.jpeg'
function about() {
  return (
    <div id='about' className='mt-40 text-bolder'>
      <div className='text-center text-white '>
      <h4 className='text-lg'>Hi there,</h4>
      <h1 className='text-6xl'>I'm Abby Taiwo</h1>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 mt-10 px-8 text-white'>
      <h4 className='md:text-center text-lg mt-20'>I'm a front end developer that hopes to work
      with teams around the world to help create 
      interactive and outstanding websites, My interest
      in this great skill developed in 2022 and it has 
      been an amazing journey so far. Now i develop beautiful
      and interactive websites that focus on providing the 
      best experience for everyone using them.
      </h4>
      <div className='flex justify-end items-center md:mt-8 '>
        <img
          src={mypicture} 
          alt="myself" 
          width={350}
          className='rounded-md '
        />
     </div>
    </div>
  </div>
  )
}

export default about
