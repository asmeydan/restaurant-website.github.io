import React from 'react'

const Etli_yemekler = () => {
  return (
    <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-14'>
      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] max-h-[360px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRKi7l1LXywmHnRXra903lLmURIH2wriy1w&usqp=CAU" alt='kavurma' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kavurma</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            72 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] max-h-[360px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3s6sfYwQ0GM88mkAvuB9yrUx2zEoTd5cQA&usqp=CAU" alt='incik' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kuzu İncik</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            104 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] max-h-[360px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMymshvA71Zcj59TX7YaxS71huu7ek-D52g&usqp=CAU" alt='kuru fasulye' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Etli Kuru Fasulye</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            40 TL
          </button>
        </div>
      </div>

    </div>
  )
}

export default Etli_yemekler