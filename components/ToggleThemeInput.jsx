import React from 'react'
import { useTheme } from '../contexts/theme';  

function ToggleThemeInput() {

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
    <>
      <input 
        type = 'checkbox'
        value=""
        className = 'w-7 h-7'
        onChange = {onChangeBtn}
        checked = {themeMode === 'dark'}
      />
    </>
  )
}

export default ToggleThemeInput
