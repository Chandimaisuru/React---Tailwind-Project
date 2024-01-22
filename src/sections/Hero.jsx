import React from 'react'
import heroImg from '../assets/images/heroImg.png'

function Hero() {
  return (
    
    <section className='flex flex-col items-center justify-between w-full h-auto gap-4 lg:flex-row bg-slate-100 lg:h-screen'>
     
     <div className='flex flex-col items-start justify-center gap-8 px-10 py-10 lg:w-1/2 lg:px-20 lg:py-20'>
           <h1 className='text-6xl font-bold text-green-600'>One-click solution for your static website.</h1>
           <p className='text-2xl text-slate-90'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo eos deserunt architecto quas animi quia distinctio veritatis ullam optio voluptas?</p>
           

           <div className='flex justify-center gap-7'>
         <button className='bg-green-800 text-white px-4 lg:px-8 py-3 rounded-md text-[18px] hover:bg-black hover:text-white cursor-pointer'>View More</button>
         <button className='text-green-800 border-2 border-green-800 text-[18px] rounded-md px-4 lg:px-8 py-4  hover:border-black hover:text-black cursor-pointer'>watch video</button>
     </div>
     </div>



     <div className='flex items-center justify-center object-cover w-1/2 px-5 py-20'>

      <img src={heroImg} alt="hero image" width={500} height={500} />

     </div>

    </section>
  )
}

export default Hero