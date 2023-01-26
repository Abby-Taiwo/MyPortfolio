import React from 'react'

function contact() {
  return (
    <div id='contact' className='mb-8 text-white'>  
        <h1 className='text-center mt-20 text-4xl text-bolder '>Contact Me</h1> 
        <p>Want to leave a message?</p>
        <form action="">
          <label htmlFor="name">Name</label>
          <input type="text" id='name' name='name' />
          <label htmlFor="email">Enter your email</label>
          <input type="email" id='email' name='email'
           />
        </form>
        <textarea name="comment" id="" cols="30" rows="10">Leave a message</textarea>
        <div className='w-1/2 mx-auto mt-8 text-center'>
          <a href="mailto:abidemitaiwo95@gmail.com" className='p-4 rounded-md hover:opacity-80 bg-purple'>
            <button>
              Say Hello
            </button>
          </a>
        </div>     
    </div>
  )
}

export default contact