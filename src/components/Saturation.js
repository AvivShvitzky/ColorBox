import React, {Component} from 'react'
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'

class Saturation extends Component {
  constructor(props) {
    super(props)
    this.state = {start: 4, end: 90}
    this.handleSatuChange = this.handleSatuChange.bind(this)
  }

  async handleSatuChange(value) {
    if(arguments[1] === 1) await this.setState({start: value})
    else await this.setState({end: value})
    this.props.handleChange('satu',this.state)
  }

  render() {
    const {start,end} = this.state
    return (
      <div className='Saturation'>
        <h3>Saturation</h3>
        <p>Start</p>
        <Slider className='satuSlider' defaultValue={4} max={100} onChange={value => this.handleSatuChange(value,1)}/>
        <p>{start}</p>
        <p>End</p>  
        <Slider className='satuSlider' defaultValue={90} max={100} onChange={value => this.handleSatuChange(value,-1)}/>
        <p>{end}</p>
      </div>
    )
  }
}

export default Saturation