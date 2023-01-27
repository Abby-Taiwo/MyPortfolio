import React from 'react'
import Home from './Home';
import Nav from './nav';
import About from './about';
import Projects from './Projects';
import Contact from './contact';
import Footer from './footer';


function allPages() {
  return (
  
   <div className='bg-deepPurple p-4'>
      <Nav/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default allPages