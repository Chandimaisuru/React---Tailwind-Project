import React, { useEffect, useState } from 'react'
import {menu,close} from '../assets/icons'

function Header() {

  const [toggle,setToggle] =useState(false);
  const [iconToggle,setIconToggle] =useState(false);
  const [menuClass,setMenuClass] =useState('');

  const toggleMenu = () =>{
    setToggle(!toggle);
  }

  const toggleIcon = () =>{
    setIconToggle(!iconToggle);
  }

  useEffect(()=>{
    setMenuClass(toggle ? 'transition-opacity ease-in-out duration-300 transform trnslate-y-0 0pacity-100' : 'transition-opacity case-in-out duration-300 transform-translate-y-full opacity-0');
  },[toggle])


  return (
     <section className='sticky top-0 z-40 flex items-center justify-between w-full px-8 py-6 text-white bg-black lg:px-16 '>

      <h1 className='text-3xl font-bold text-green-600'>DEBUG ENTITY</h1>

      <div className='items-center justify-end hidden gap-2 lg:flex'>
         
         <ul className='flex items-center justify-center gap-3'> 

         <li><a className='px-5 py-2 text-lg rounded-sm cursor-pointer text-slate-100 hover:bg-green-600 hover:text-white active:text-white ' href="/">Home</a></li>
         
         <li><a className='px-5 py-2 text-lg rounded-sm cursor-pointer text-slate-100 hover:bg-green-600 hover:text-white active:text-white ' href="#services">Services</a></li>

         <li><a className='px-5 py-2 text-lg rounded-sm cursor-pointer text-slate-100 hover:bg-green-600 hover:text-white active:text-white ' href="#testimonials">Testimonials</a></li>

         <li><a className='px-5 py-2 text-lg rounded-sm cursor-pointer text-slate-100 hover:bg-green-600 hover:text-white active:text-white ' href="#pricing">Pricing</a></li>

         <li><a className='px-5 py-2 text-lg rounded-sm cursor-pointer text-slate-100 hover:bg-green-600 hover:text-white active:text-white ' href="#contact">Contact</a></li>

         </ul>

      </div>

      <div className='flex flex-col lg:hidden'>

        {iconToggle ?(
          <img src={close} alt="close icon" width={40} height={40} onClick={() =>{toggleMenu(); toggleIcon();}} />
        ):(
          <img src={menu} alt="menu icon" width={40} height={40} onClick={() =>{toggleMenu(); toggleIcon();}} />
        )}

        {toggle &&(
          <div id='mob-menu' className={'py-4 text-white bg-green-500 absolute top-20 right-0 w-full ${menuClass}'}>

            <ul className='flex flex-col items-center justify-center gap-2'>

              <li className='w-full py-3 text-xl font-semibold text-center text-white hover:bg-green-600 hover:text-white'>Home</li>

              <li className='w-full py-3 text-xl font-semibold text-center text-white hover:bg-green-600 hover:text-white'>Services</li>

              <li className='w-full py-3 text-xl font-semibold text-center text-white hover:bg-green-600 hover:text-white'>Testimonials</li>

              <li className='w-full py-3 text-xl font-semibold text-center text-white hover:bg-green-600 hover:text-white'>Pricing</li>

              <li className='w-full py-3 text-xl font-semibold text-center text-white hover:bg-green-600 hover:text-white'>Contact</li>

            </ul>
          </div>
        )}

      </div>


     </section>
  )
}

export default Header