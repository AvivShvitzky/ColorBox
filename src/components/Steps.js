import React, {Component} from 'react'
import Slider from 'rc-slider/lib/Slider'
import 'rc-slider/assets/index.css'

class Steps extends Component { 
  constructor(props) {
    super(props)
    this.state = {steps: 11}
    this.handleSteps = this.handleSteps.bind(this)
  }

  async handleSteps(steps) {
    await this.setState({steps})
    this.props.handleChange('steps',this.state.steps)
  }

  render() {
    const {steps} = this.state
    return (
      <div className='Steps'>
        <h3>Steps</h3>
        <p>Total</p>
        <Slider className='stepsSlider' defaultValue={11} min={3} max={21} onChange={value => this.handleSteps(value)}/>
        <p>{steps}</p>
      </div>
    )
  }
}

export default Steps