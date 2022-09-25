import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile } from '@fortawesome/free-solid-svg-icons'

function contact() {
  return (
    <div id='contact'>
      <div>
        <h1 className='text-center text-white mt-20 text-4xl text-bolder'>Contact Me</h1>
        <div>
            <h2>connect with me via </h2>
            <h2>abidemitaiwo95@gmail.com</h2>
          </div>

          <div>
            <form action="">
              <input type="text" placeholder='Your Name' required />
              <input type="email" name="email" placeholder='E-mail' id="" required/>
              <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required>
              </textarea>
            </form>
          </div>

       </div>
    </div>
  )
}

export default contact