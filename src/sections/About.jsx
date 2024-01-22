import React from 'react'
import {aboutgrids} from '../exports'
import AboutGrid from '../components/AboutGrid'

function About() {
  return (
    <section id='services' className='flex flex-col w-full gap-10 py-4 bg-slate-200 lg:flex-row lg:gap-20 h-fit px-7 lg:px-16 lg:py-12'>

      <div className='flex flex-col items-start justify-center gap-8 lg:w-1/2'>

         <h1 className='text-6xl font-bold text-green-600 '>Hosting solution with benifits</h1>

         <p className='text-2xl text-slate-05'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates accusamus voluptate ullam dicta commodi quo accusantium repellat ducimus eos assumenda?</p>

         <div className='flex items-center justify-center gap-7'>
         
          <button className='bg-green-800 text-white px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>Read More</button>

         </div>

      </div >

      <div className='flex flex-wrap items-center justify-between w-full lg:w-1/2'>

        {aboutgrids.map((grid)=>(

          <div key={grid.label} className='w-full lg:w-1/2'>
           
               <AboutGrid{...grid}/>
          </div>
        ))}

      </div>

    </section>
  )
}

export default About