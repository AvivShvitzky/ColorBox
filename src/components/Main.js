import React from 'react'
import ColorFrame from './ColorFrame'

function Main(props) {
  const {colors} = props
  return (
    <main className='MainColors'>
      <div className='dotColors'>
        {colors.map((color,index) => <ColorFrame key={index} left={index} color={color} /> )}
      </div>
      <div className='rectangleColors'>
        {colors.map((color,index) => <ColorFrame key={index} index={index} color={color} /> )}
      </div>
    </main>
  )
}

export default Main