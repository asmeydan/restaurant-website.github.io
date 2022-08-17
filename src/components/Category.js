import React from 'react';
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className=' min-w-[110px] overflow-auto w-1/4 border-r-2 flex justify-center items-start'>
      <ul className=' w-full pb-24'>
        
        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/corbalar" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            ÇORBALAR
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/firin" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            FIRIN ÜRÜNLERİ
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-lg font-semibold transition-all'>
          <NavLink to="/izgaralar" className="w-full h-full flex justify-center items-center text-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            IZGARALAR & KEBAPLAR
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/durumlar" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            DÜRÜMLER
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/pilavlar" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            PİLAVLAR
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/donerler" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            ET DÖNERLER
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/etli_yemekler" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            ETLİ YEMEKLER
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/tatlilar" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            TATILAR
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/salatalar" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            SALATALAR
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/yan_urunler" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            YAN ÜRÜNLER
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 active:bg-purple-200 h-14 text-sm md:text-xl font-semibold transition-all'>
          <NavLink to="/icecekler" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            İÇECEKLER
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Category