import React from 'react'
import Handout from '../images/Handout.png'
// import { useNavigate } from 'react-router-dom'

function handoutDetails() {
  
  return (
    <div className='bg-[#1e0213] text-white w-100% text-[20px] p-20'>
      <div>
      <h2 className='text-4xl font-raleway font-bold text-center mb-10'>Handout</h2>
      <img src={Handout} alt="a page" className='w-1/2 h-1/2 items-center' />
      <p className='mt-5'>This platform was created to sell at a cheaper rate or give out unwanted personal items that <br /> are still usefull.</p>
      </div>
      <div className='items-center mt-5'>
        <section className='flex gap-4'>
          <h2 className='font-bold'>
          Project year:
          </h2>
          <h4 className='font-light'>
            2022
          </h4>
        </section>
        <section className='flex gap-4'>
          <h2 className='font-bold'>
            Project duration: 
          </h2>
          <h4 className='font-light'>
          Six weeks
          </h4>
        </section>
      </div>
      <div>
        <h2 className='text-2xl font-raleway font-bold text-center mb-10' >Project Overview </h2>
        <p>The objective of this project is to be able give out unwanted yet useful items at a lesser rate or for free .One of the objectives of this fine project is so that unwanted useful items wont go to waste but rather go to consumers that are in need of them at an affordable rate. To be able to access this platform, the authentication proccess is needed which includes signing up and logging in then accessing the products of your choice. Having an account also gives you the ability to be able to upload your unwanted items , the details of this item and the price if there is any. This project was designed and brought to life by a group of innovative designers, backend developers and other frontend developers.</p>
      </div>
       <div>
        <h2 className='text-2xl font-raleway font-bold text-center m-5'>
        Problem statements and Solutions 
        </h2>
        <p className='mt-5' >
          Some of the problems a user might face were carefully observed and each problems  provided with solutions, for example , a user who has an item that they dont need anymore would have issues with what to do with this item but with this platform and an upload product and product details page , they can easily upload this product and its details ,either for sale or for free. The upload product and product details page was created with React js, Tailwind css, Material UI and figma. We were able to create a browse all items page where users can easily type in what they want or need in the search bar above the page for easy access to products. The tools used to accomplish this includes , Tailwind css, figma, axios, material UI.The Github link to this project can be foud  
          <a href="http://https://github.com/StuternHousemanship/HANDOUT-Frontend-Project-Team1.1.git">here</a>. 
        </p>
       </div>
       <div>
        <h2 className='text-2xl font-raleway font-bold text-center m-5'>
          Summary
        </h2>
        <p>
          Participating in building this project has been really helpful and has lifted my confidence level in this field and has given me a real experience in building an application that solves real life problems. I learnt how to work and communicate with a team and leart to use a few other tools .
        </p>
       </div>

       
    </div>

    
    
  )
}

export default handoutDetails