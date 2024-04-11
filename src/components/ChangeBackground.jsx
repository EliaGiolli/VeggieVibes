import React from 'react';
import { useTheme } from '../contexts/theme';  


function ChangeBackground() {
  const { themeMode, lightTheme, darkTheme } = useTheme();
  const onChangeBtn = (e)=>{
    const darkModeStatus = e.currentTarget.checked;
    if(darkModeStatus){
      darkTheme();
    }else{
      lightTheme();
    }
  }
  return (
    <section className='w-full h-7 flex justify-end text-center items-center p-7 mt-4 border-b-4 border-red-500'>
      <input 
        type = 'checkbox'
        value=""
        className = 'w-7 h-7'
        onChange = {onChangeBtn}
        checked = {themeMode === 'dark'}
      />
    </section>
  )
}

export default ChangeBackground