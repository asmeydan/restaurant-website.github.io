import React from 'react'

const Pilavlar = () => {
  return (
    <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-14'>
      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[320px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://www.ciftlikdergisi.com.tr/wp-content/uploads/2013/11/pilav-%C3%BCst%C3%BC-kuru-fasulye-8d1a78cd.jpg" alt='kuru pilav' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Pilav Üstü Kuru</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            28 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[320px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://st3.myideasoft.com/idea/dm/86/myassets/blogs/pilav-tarifi-tane-tane.jpg?revision=1628682122" alt='kuru pilav' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Sade Pilav</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            24 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[320px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/sebzeli-bulgur-pilavi-one-cikan.jpg" alt=' bulgur' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Bulgur Pilavı</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            24 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[320px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 w-full'>
          <img src="https://cdn.yemek.com/mnresize/1250/833/uploads/2014/12/sebzeli-bulgur-pilavi-one-cikan.jpg" alt='kuru bulgur' className=' object-cover min-w-full min-h-[200px] max-h-[220px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Bulgur Pilavı Üstü Kuru</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            25 TL
          </button>
        </div>
      </div>

      

    </div>
  )
}

export default Pilavlar



