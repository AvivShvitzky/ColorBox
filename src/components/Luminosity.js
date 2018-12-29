import React, {Component} from 'react'
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'

class Luminosity extends Component {
  constructor(props) {
    super(props)
    this.state = {start: 100, end: 53}
    this.handleHueChange = this.handleHueChange.bind(this)
  }

  async handleHueChange(value) {
    if(arguments[1] === 1) await this.setState({start: value})
    else await this.setState({end: value})
    this.props.handleChange('lumi',this.state)
  }

  render() {
    const {start,end} = this.state
    return (
      <div className='Luminosity'>
        <h3>Luminosity</h3>
        <p>Start</p>
        <Slider className='lumiSlider' defaultValue={100} max={100} onChange={value => this.handleHueChange(value,1)}/>
        <p>{start}</p>
        <p>End</p>  
        <Slider className='lumiSlider' defaultValue={53} max={100} onChange={value => this.handleHueChange(value,-1)}/>
        <p>{end}</p>
      </div>
    )
  }
}

export default Luminosity