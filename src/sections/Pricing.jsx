import React from 'react'
import {tick} from '../assets/icons'
import { pricing } from '../exports'
import PriceGrid from '../components/PriceGrid'

function Pricing() {
  return (
   <section id='pricing' className='flex flex-col items-start justify-center w-full gap-5 bg-slate-200 h-fit px-7 py-14 lg:p-20 '>

    <h1  className='text-6xl font-bold text-green-600'>Pricing Table</h1>

    <div className='flex flex-col items-start justify-between w-full gap-6 mt-5 lg:flex-row lg:gap-20'>

      <p className='text-2xl text-slate-950'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cum pariatur ratione maiores. Officiis maxime tenetur modi, vel culpa ratione?</p>

      <div className='w-full lg:w-2/4'>

       <ul className='flex flex-col items-center justify-center w-full gap-4'>
        <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='p-3 bg-green-400 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Unlimited Pages</li>

        <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='p-3 bg-green-400 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Unlimited Pages</li>

        <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='p-3 bg-green-400 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Unlimited Pages</li>

       </ul>
       
       
       
       </div>


          <div className='w-full lg:w-2/4'>

        <ul className='flex flex-col items-center justify-center w-full gap-4'>
        <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='p-3 bg-green-400 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Unlimited Pages</li>

        <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='p-3 bg-green-400 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Unlimited Pages</li>
        
        <li className='flex justify-center items-center gap-4 text-[21px] text-gray-800'><span className='p-3 bg-green-400 rounded-full fill-white'><img src={tick} alt="tick" width={30} height={30} /></span>Unlimited Pages</li>

        </ul>

        </div>



    </div>

    <div className='flex flex-wrap items-center justify-around w-full gap-10 mt-20'>
           
           {pricing.map((price)=>(
             
            <div className='w-96' key={price.plan} >

                  <PriceGrid{...price}/>

             </div>

           ))}
           
        </div>


   </section>
  )
}

export default Pricing