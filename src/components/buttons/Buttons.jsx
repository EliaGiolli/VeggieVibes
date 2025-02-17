import React from 'react'

function Buttons({children, onClick}) {

  return (
    <button 
      className='btn' onClick={onClick}>
        {children}
    </button>
  )
}

export default Buttons