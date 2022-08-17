import React from 'react'
import kebap from "../images/çarşı_kebap.jpg"

const Home = () => {
  return (
    <div className='h-full flex justify-center items-center overflow-auto py-5'>
      <div className=' border border-gray-300 rounded-xl w-2/5 min-w-[300px] max-w-[500px] h-[450px] shadow-2xl overflow-hidden'>
        <div className=' w-full h-1/2 overflow-hidden' >
           <img src={kebap} alt='çarşı kebap' className=' object-cover w-full' /> 
        </div>
        <div className=' text-center my-3 '>
          <h1 className=' text-2xl font-bold text-indigo-900'>
            ÇARŞI KEBAP
          </h1>
        </div>
        <div className='text-center my-3'>
          <h2 className=' underline text-base font-semibold'>
            Adres
          </h2>
          <p>
          Davutpaşa Mah. Davutpaşa Caddesi <br/>34220 Esenler - İstanbul
          </p>
        </div>
        <div className='text-center mt-3 '>
          <h2 className='text-base underline font-semibold'>
            Telefon
          </h2>
          <p>
            0 532 123 45 67
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home