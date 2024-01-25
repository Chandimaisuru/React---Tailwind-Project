import React from 'react'
import {clients} from '../exports'
import ClientGrid from '../components/ClientGrid'

function Testimonials() {
  return (
    <section id='testimonials' className='flex flex-col w-full gap-5 h-fit p-7 lg:pt-20'>

      <p className='text-xl text-center'>Testimonials</p>

      <h1 className='font-bold text-green-600 text-center leading-[68px] text-6xl'>What Clients Says</h1>

      <p className='text-2xl text-center text-slate-950 '>Lorem psum doilor sit,Pariatur reprehenderit tempora magni dolor <br />corrupti repudiandae consequatur ratione unde quidem repellendus?</p>

      <div className='flex flex-wrap items-center justify-center w-full gap-6 mt-5'>

        {clients.map((client) =>(
          <div key={client.name} className='w-80'>
             
             <ClientGrid{...client}/>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Testimonials 