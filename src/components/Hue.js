import React, {Component} from 'react'
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'

class Hue extends Component {
  constructor(props) {
    super(props)
    this.state = {start: 0, end: 293}
    this.handleHueChange = this.handleHueChange.bind(this)
  }

  async handleHueChange(value) {
    if(arguments[1] === 1) await this.setState({start: value})
    else await this.setState({end: value})
    this.props.handleChange('hue',this.state)
  }

  render() {
    const {start,end} = this.state
    return (
      <div className='Hue'>
        <h3>Hue</h3>
        <p>Start</p>
        <Slider className='HueSlider' max={359} onChange={value => this.handleHueChange(value,1)}/>
        <p>{start}</p>
        <p>End</p>  
        <Slider className='HueSlider' defaultValue={293} max={359} onChange={value => this.handleHueChange(value,-1)}/>
        <p>{end}</p>
      </div>
    )
  }
}

export default Hue