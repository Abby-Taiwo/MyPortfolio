import React from 'react'
import mypicture from '../images/mypicture.jpeg'
function about() {
  return (
    <div className='mt-40 text-bolder'>
      <div className='text-center text-white '>
      <h4 className='text-lg'>Hi there,</h4>
      <h1 className='text-6xl'>I'm Abby Taiwo</h1>
    </div>
    <div className='flex-col border md:flex justify-between p-16 mt-20 text-white'>
      <h4 className='text-lg w-80 mt-20'>I'm a front end developer that hopes to work
      with teams around the world to help create 
      interactive and outstanding websites, My interest
      in this great skill developed in 2022 and it has 
      been an amazing journey so far. Now i develop beautiful
      and interactive websites that focus on providing the 
      best experience for everyone using them.
      </h4>
      <img src={mypicture} alt="myslef" width={450} />
    </div>
  </div>
  )
}

export default about
