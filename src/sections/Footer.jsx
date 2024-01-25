import React from 'react'
import { fb,insta, twitter, yt  } from '../assets/icons'

function Footer() {
  return (
    <section className='flex flex-col items-start justify-between w-full gap-10 px-10 text-white bg-black lg:flex-row lg:gap-4 py-14 lg:px-20 lg:py-28 '>

      <div className='flex flex-col justify-center items-start gap-2 w-full lg:w-[40%]'>

          <h1 className='text-4xl font-bold text-green-600 '>DEBUG ENTITY</h1>

          <p className='text-lg text-slate-200 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam mollitia dignissimos vero cupiditate dolor ipsam nihil assumenda amet odio impedit.</p>

          <div className='flex items-center justify-center gap-4 mt-7 ' id='
          logos'>
              <span className='p-2 bg-white rounded-full cursor-pointer hover:bg-green-600 '>
                <img src={fb} alt="fb icon" width={20} height={20 } /> </span>

                <span className='p-2 bg-white rounded-full cursor-pointer hover:bg-green-600 '>
                <img src={yt} alt="yt icon" width={20} height={20 } /> </span>

                <span className='p-2 bg-white rounded-full cursor-pointer hover:bg-green-600 '>
                <img src={insta} alt="insta icon" width={20} height={20 } /> </span>

                <span className='p-2 bg-white rounded-full cursor-pointer hover:bg-green-600 '>
                <img src={twitter} alt="twitter  icon" width={20} height={20 } /> </span>

          </div>
      </div>

      <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]  '>
        <ul className='flex flex-col items-start justify-center gap-3'>
          <h1 className='text-xl font-semibold'>PAGES</h1>
          
          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Home</li>

          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Services</li>

          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Testimonials</li>
          
          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Pricing</li>

        </ul>
      </div>

      <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]  '>
        <ul className='flex flex-col items-start justify-center gap-3'>
          <h1 className='text-xl font-semibold'>PAGES</h1>
          
          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Home</li>

          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Services</li>

          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Testimonials</li>
          
          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Pricing</li>

        </ul>
      </div>

      <div className='flex flex-col justify-center items-start lg:items-center w-full lg:w-[20%]  '>
        <ul className='flex flex-col items-start justify-center gap-3'>
          <h1 className='text-xl font-semibold'>PAGES</h1>
          
          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Home</li>

          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Services</li>

          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Testimonials</li>
          
          <li className='cursor-pointer text-slate-300 hover:text-green-300'>Pricing</li>

        </ul>
      </div>
    </section>
  )
}

export default Footer