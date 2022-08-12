import React from 'react';
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <div className=' w-1/4 border-r-2 flex justify-center items-start'>
      <ul className=' w-full'>
        
        <li className='hover:bg-purple-100 h-10 text-xl font-semibold'>
          <NavLink to="/yemekler" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            yemekler
          </NavLink>
        </li>

        <li className='hover:bg-purple-100 h-10 text-xl font-semibold'>
          <NavLink to="/tatlilar" className="w-full h-full flex justify-center items-center"
          style={({ isActive }) => { return {background: isActive ?"#e9d5ff" :""}}}>
            tatlılar
          </NavLink>
        </li>

      </ul>
    </div>
  )
}

export default Category