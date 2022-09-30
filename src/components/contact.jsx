import React from 'react'

function contact() {
  return (
    <div id='contact' className='mb-8 text-white'>  
        <h1 className='text-center mt-20 text-4xl text-bolder '>Contact Me</h1> 
        <div className='w-1/2 mx-auto mt-8 text-center'>
          <a href="mailto:abidemitaiwo95@gmail.com" className='p-4 rounded-md hover:opacity-80 bg-red-900'>
            <button>
              Say Hello
            </button>
          </a>
        </div>     
    </div>
  )
}

export default contact