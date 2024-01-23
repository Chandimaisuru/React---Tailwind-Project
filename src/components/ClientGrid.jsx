import React from 'react'

const ClientGrid = ({image,about,name,profile}) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 px-6 py-8 bg-slate-200 rounded-xl'>
   
       <img src={image} alt="image" width={120} height={120} />
       <p className='text-center text-[17px] text-gray-600'>{about}</p>
       <h1 className='text-2xl font-semibold text-center text-green-700'>{name}</h1>
       <p className='text-center text-[17px] text-gray-800'>{profile}</p>


    </div>
  )
}

export default ClientGrid