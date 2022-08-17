import React from 'react';
import lahmacun from "../../images/lahmacun.jpg";
import pide from "../../images/pide.jpg";

const Fırın_ürünleri = () => {
  return (
    <div className='h-full overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-14'>
      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={lahmacun} alt='lahmacun' className=' object-cover min-w-full min-h-[200px]' /> 
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Lahmacun</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            19 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full overflow-hidden'>
          <img src={pide} alt='kıymalı kaşarlı pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kıymalı Kaşarlı Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            60 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={lahmacun} alt='lahmacun' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Özel Lahmacun</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            36 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={lahmacun} alt='lahmacun' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kaşarlı Lahmacun</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            23 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={lahmacun} alt='lahmacun' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kaşarlı Özel Lahmacun</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            40 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={pide} alt='pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kuşbaşı Kaşarlı Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            78 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={pide} alt='pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kavurmalı Kaşarlı Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            78 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={pide} alt='pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kaşarlı Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            54 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={pide} alt='pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kuşbaşılı Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            75 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={pide} alt='pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Karışık Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            64 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={pide} alt='pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kaşarlı Sucuklu Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            61 TL
          </button>
        </div>
      </div>

      <div className=' border border-gray-300 rounded-xl shadow-lg min-h-[340px] overflow-hidden max-w-[320px]'>
        <div className=' h-52 overflow-hidden w-full'>
          <img src={pide} alt='pide' className=' object-cover min-w-full min-h-[200px]' />
        </div>
        <h1 className=' text-center text-xl font-bold my-3'>Kıymalı Pide</h1>
        <div className=' flex justify-center items-center'>
          <button className=' bg-blue-400 rounded px-5 py-1 text-lg font-bold transition-all hover:bg-blue-500 hover:shadow-lg active:translate-y-px mb-1'>
            60 TL
          </button>
        </div>
      </div>

    </div>
  )
}

export default Fırın_ürünleri