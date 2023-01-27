import React, {useState} from 'react';
import '../styles/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [sidebar, showSidebar] = useState(false);
function handleSidebar(){
      showSidebar(!sidebar);
      // console.log('i')

} 

function removeSidebar(){
      showSidebar(false)
}

window.addEventListener('resize',removeSidebar);
window.addEventListener('scroll',removeSidebar)

  return (
    <>
    <div className="flex items-center justify-between ">
              <div>
                <h1> <Link to='/'> Abby </Link>  </h1>
                </div>
              <div className="cursor-pointer block md:hidden">
                <FontAwesomeIcon icon={ faBars } onClick={handleSidebar} id='bars'/>
              </div>
       </div>
      <nav className={sidebar? 'show-sidebar' : 'sidebar'}>
        <ul onClick={removeSidebar} className="text-white md:flex item-center justify-between w-1/4">
            
            <li id='link'>
                  <a href="#about">About Me</a>
            </li>
            <li id='link'>
                  <a href="#projects">Projects</a>
            </li>
            <li id='link'>
                  <a href="#contact">Contact</a>
            </li>

          </ul>
      </nav>
    </>
  )
}

export default Sidebar
