import React from 'react'
import Steps from './Steps'
import Hue from './Hue'
import Saturation from './Saturation'
import Luminosity from './Luminosity'

function SideBar({handleChange}) {
  return (
    <div className='SideBar'>
      <Steps handleChange={handleChange}/>
      <Hue handleChange={handleChange}/>
      <Saturation handleChange={handleChange}/>
      <Luminosity handleChange={handleChange}/>
    </div>
  )
}

export default SideBar