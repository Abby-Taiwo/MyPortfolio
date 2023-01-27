import React from 'react'
import mypicture from '../images/mypicture.jpeg'
function about() {
  return (
    <div id='about' className='mt-40 text-bolder'>
      <div className='text-center text-white '>
      <h4 className='text-lg'>Hi there,</h4>
      <h1 className='text-6xl'>I'm Abidemi Taiwo</h1>
    </div>
  <div className='flex flex-col md:flex-row px-8 items-center justify-between w-full text-white gap-5'>
    <div className='flex flex-col flex-1 gap-5'>
      <h4 className='md:text-center text-lg mt-20'>I'm a front end developer that hopes to work
      with teams around the world to help create 
      interactive and outstanding websites, My interest
      in this great skill developed in 2022 and it has 
      been an amazing journey so far. Now i develop beautiful
      and interactive websites that focus on providing the 
      best experience for everyone using them.
      </h4>
      <div className='text-center text-white '>
      <h1 className='text-4xl'>My skills include </h1>
      <div className='flex flex-row w-full items-center justify-around '>
        
          <ul className=' list-disc'>
            <li>
              React js
            </li>
            <li>
              Visual studio code 
            </li>
            <li>
              Html
            </li>
            <li>
              Css
            </li>
            <li>
              Javascript
            </li>
          </ul>
          <ul className=' list-disc'>
            <li>
              Material UI
            </li>
            <li>
              Tailwind css
            </li>
            <li>
              Github
            </li>
            <li>
              Figma
            </li>
            <li>
              Redux
            </li>
          </ul>
      </div>
     </div>
      </div>
      <div className='flex justify-end items-center md:mt-8 flex-1'>
        <img
          src={mypicture} 
          alt="myself" 
          // width={350}
          className='rounded-md w-full h-full'
        />
     </div>

     
    </div>
  </div>
  )
}

export default about
