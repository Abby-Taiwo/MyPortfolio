import React from 'react';
// import '../styles/nav.css';


function nav() {
  return (
    <div className='flex items-center justify-between text-white font-semibold' >
       <div className=''>
            <a href="/">Abby</a>
        </div>

        
          <ul className="hidden md:flex item-center justify-between w-1/4">
            
            <li>
                  <a href="about">About Me</a>
            </li>
            <li>
                  <a href="projects">Projects</a>
            </li>
            <li>
                  <a href="contact">Contact</a>
            </li>

          </ul>
        

    </div>
  )
}

export default nav
