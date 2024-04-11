import React, { useContext } from 'react';
import { ThemeContext } from '../App'; 
import { CgDarkMode } from "react-icons/cg";

function ChangeBackground() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className='w-full h-7 flex justify-end text-center items-center p-7 mt-4 border-b-4 border-red-500'>
      <button className='bg-yellow-500 p-5 border roundend-full' onClick={toggleTheme}> 
      <CgDarkMode />
      </button>
    </section>
  )
}

export default ChangeBackground