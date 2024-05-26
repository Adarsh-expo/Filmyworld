import React from 'react'
import giphy from '/giphy.gif'
function Notfound() {
  return (
    <div className='w-[60vw] h-[60vh] flex justify-center items-center bg-black '><img className='w-[90%]  h-[90%]' src={giphy}/></div>
  )
}

export default Notfound