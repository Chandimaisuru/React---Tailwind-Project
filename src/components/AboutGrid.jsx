import React from 'react'

const AboutGrid = ({icon,text,label,heading}) => {
  return (
    <div className='flex flex-col items-center justify-center p-3 m-2 bg-white rounded-lg gap-55 lg:p-7'>

       <img src={icon} alt="icon" width={65} height={65} className='p-3 bg-green-400 rounded-full cursor-pointer hover:bg-green-500'/>

       <h1 className='py-1 text-2xl font-semibold text-center text-green-600 lg:text-3xl'>{heading}</h1>
       
       <p className='text-[18px] text-center text-slate-700 '>{text}</p>

       <p className='bg-green-800 text-white px-6 py-2 m-1 rounded-md text-[16px] hover:bg-black            hover: text-slate-3 cursor-pointer  '>{label}</p>


    </div>
  )
}

export default AboutGrid