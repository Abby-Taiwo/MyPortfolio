import React from 'react';
// import '../styles/nav.css';
import Sidebar from './Sidebar';


function nav() {
  return (
   <>
   
   <div id='nav' className='flex items-center justify-between text-white font-semibold' >
       <div className='hidden md:block'>
            <a href="/">Abby</a>
        </div>

     <div className='block md:hidden w-full'>
       <Sidebar/>
     </div>

          <ul className="hidden md:flex item-center justify-between w-2/4 max-w-md">
            
            <li>
                  <a href="#about">About Me</a>
            </li>
            <li>
                  <a href="#projects">Projects</a>
            </li>
            <li>
                  <a href="#contact">Contact</a>
            </li>

          </ul>
        

    </div>
   </>
  )
}

export default nav
