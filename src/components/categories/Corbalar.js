import React from 'react';
import mercimek from "../../images/mercimek_çorbası.jpg";
import ezogelin from "../../images/ezogelin_çorbası.jpg";

const Corbalar = () => {
  return (
    <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 pt-14'>
      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[320px] h-80 overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src={mercimek} alt='mercimek' className=' object-cover min-w-full min-h-[200px]' /> 
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Mercimek Çorbası</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px'>
            25 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[320px] h-80 overflow-hidden max-w-[320px]'>
        <div className='h-52 w-full'>
          <img src={ezogelin} alt='ezogelin' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Ezogelin Çorbası</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            25 TL
          </button>
        </div>
      </div>
      
    </div>
  )
}

export default Corbalar