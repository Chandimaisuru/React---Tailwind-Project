import React from 'react'
import {call,fb,insta,map,sms, twitter ,yt} from '../assets/icons/'
import cube from '../assets/images/cube.png'

function Contact() {
  return (
    <>
    <section id='contact' className='flex flex-col items-center justify-center w-full gap-10 p-4 bg-slate-200 lg:flex-row md:gap-20 h-fit lg:p-20'>

<div className='z-20 flex flex-col items-center justify-center w-full gap-10 px-8 py-12 bg-white rounded-lg lg:flex-row lg:w-3/4 '>

  <div className='flex flex-col items-start justify-center w-full gap-4'>

     <h1 className='text-green-600 font-bold text-[35px]'>Contact Info</h1>

     <div id='phone' className='flex items-center justify-center gap-4 text-lg font-semibold text-gray-600'>
      <span className='p-3 bg-green-400 rounded-full'><img src={call} alt="call" width={22} height={22} /></span>
      +9477456897
     </div>

     <div id='mail' className='flex items-center justify-center gap-4 text-lg font-semibold text-gray-600'>
      <span className='p-3 bg-green-400 rounded-full'><img src={sms} alt="call" width={22} height={22} /></span>
       isuru67@gmail.com
     </div>

     <div id='address' className='flex items-center justify-center gap-4 text-lg font-semibold text-gray-600'>
      <span className='p-3 bg-green-400 rounded-full'><img src={map} alt="call" width={22} height={22} /></span>
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto?
     </div>

     <div className='flex items-center justify-center gap-6 mt-5'>

      <span className='p-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 '>
        <img src={fb} alt="fb" width={25} height={25} />
      </span>
      
      <span className='p-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 '>
        <img src={insta} alt="fb" width={25} height={25} />
      </span>
      
      <span className='p-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 '>
        <img src={yt} alt="fb" width={25} height={25} />
      </span>
      
      <span className='p-3 bg-green-500 rounded-full cursor-pointer hover:bg-green-600 '>
        <img src={twitter} alt="fb" width={25} height={25} />
      </span>
      

     </div>
      
  </div>

    <div className='flex flex-col items-center justify-center w-full gap-2'>

    <input type="text" placeholder='Enter your name' className='w-full px-4 py-4 border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600 ' />

    <input type="email" placeholder='Enter your Email' className='w-full px-4 py-4 border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600 ' />

    <textarea placeholder='Enter your Message' className='w-full px-4 py-4 border-2 border-green-500 rounded-lg text-[18px] bg-slate-100 focus:outline-none focus:border-green-600 ' />

    <button className='w-full px-4 py-3 mt-10 text-white bg-green-700 rounded-lg cursor-pointer hover:bg-black hover:text-white'>Submit</button>

    

    </div>
</div>



</section>

<img src={cube} alt="" className='w-full h-72 absolute top-[3550px] hidden xl:block' />
    
    </>
  )
}

export default Contact