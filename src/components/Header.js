import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=' bg-purple-600 text-white w-full h-16 flex justify-center items-center 
     text-4xl font-bold'>
      <NavLink to="/">
        Çarşı Döner
      </NavLink>
    </div>
  )
}

export default Header