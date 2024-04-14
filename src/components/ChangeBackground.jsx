import React from 'react';
import ToggleThemeInput from './ToggleThemeInput';

function ChangeBackground() {
  
  return (
    <section className='w-full h-7 flex justify-end text-center items-center bg-{themeMode} p-7 mt-4 border-b-4'>
      <ToggleThemeInput />
    </section>
  )
}

export default ChangeBackground