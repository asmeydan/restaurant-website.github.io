import React from 'react'

const Yan_urunler = () => {
  return (
    <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-14'>
      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpV-PuKWWZXdFrgvUcQAHUbD-csmdtS8CbA&usqp=CAU" alt='cacık' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Cacık</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            20 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wBRw219YgUDRamYjYTMLsB8rDilW8fo1qQ&usqp=CAU" alt='yoğurt' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Yoğurt</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            13 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://www.kebapciridoseyhmususta.com.tr/dosyalar/kozlenmis-biber.jpg" alt='közlenmiş biber' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Közlenmiş Biber</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            16 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://img.fanatik.com.tr/img/78/740x418/5ea42d47ae298b32ac6fd142.jpg" alt='közlenmiş domates' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Közlenmiş Domates</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            20 TL
          </button>
        </div>
      </div>

    </div>
  )
}

export default Yan_urunler