import React from 'react'

const Salatalar = () => {
  return (
    <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-14'>
      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYnyGTT4J8PSSdQGmqxd7vpyNifMyDcOmeg&usqp=CAU" alt='çoban salata' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Çoban Salata (Küçük)</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            16 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYnyGTT4J8PSSdQGmqxd7vpyNifMyDcOmeg&usqp=CAU" alt='çoban salata' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Çoban Salata (Büyük)</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            28 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6kOR4_Wfl6dJTcY2cJzcBGTvA1oWVHb5Ag&usqp=CAU" alt='söğüş salata' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Söğüş Salata</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            20 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7KuU5V-5pVYSoI-bFs9-mbgC_AB_G_MHkzQ&usqp=CAU" alt='kaşık salata' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kaşık Salata</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            24 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4iT0ReGAZgAxzUyh0hVWINi4zaZwX82ZpA&usqp=CAU" alt='tavuklu salata' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Tavuklu Salata</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            52 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsmrmfiHKONVRegIwCZcSqVr--QOLEcLL67Q&usqp=CAU" alt='ezme salata' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Ezme Salata</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            12 TL
          </button>
        </div>
      </div>

    </div>
  )
}

export default Salatalar