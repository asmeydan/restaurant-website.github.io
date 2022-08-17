import React from 'react'

const Tatlilar = () => {
  return (
    <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-14'>
      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] max-h-[360px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWw7ujm9wWh6CspL3HRejYPD2Eg-_aeWWBOA&usqp=CAU" alt='fırın sütlaç' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Fırın Sütlaç</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            30 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] max-h-[360px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmTAJpzViFMhauIbSp_2cX_EtAKq0uLnWqw&usqp=CAU" alt='kadayıf' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kadayıf</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            32 TL
          </button>
        </div>
      </div>

    </div>
  )
}

export default Tatlilar