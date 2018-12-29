import React from 'react'
import {hslToHex} from '../utilities'

function ColorFrame(props) {
  const {color, left, index} = props
  const hslColor = `hsl(${color[0]},${color[1]}%,${color[2]}%)`
  let textColor = 'black' 
  if(color[2] < 35) textColor = 'white'

  if(left || left === 0) {
    const top = (360 - color[0]) / 4
    const style = {
      backgroundColor: hslColor,
      top: `${top}%`,
      left: left,
      color: textColor
    }

    return (
      <div style={style}>
        <span style={{color: textColor}}>{left*10}</span>
        <p>{Math.round(color[0])}</p>
      </div>
    )
  }

  else {
    const hexColor = hslToHex(color[0], color[1], color[2])
    return (
      <div style={{backgroundColor: hslColor, color: textColor}}>
        <span style={{color: textColor}}>{index*10}</span>
        <p>{hexColor}</p>
      </div>
    )
  }
}

export default ColorFrame
