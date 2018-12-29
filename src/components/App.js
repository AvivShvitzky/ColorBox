import React, {Component} from 'react'
import SideBar from './SideBar'
import Main from './Main'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {steps: 11,
      hue: {start: 0, end: 293},
      satu: {start: 4, end: 90},
      lumi: {start: 100, end: 53},
      colors: [] }
    this.handleViewChanges = this.handleViewChanges.bind(this)
  }

  componentDidMount() {
    this.getColors()
  }


  handleViewChanges(state, value) {
    this.setState({[state]: value})
    this.getColors()
  }

  getColors() {
    const {steps} = this.state
    const hue = this.state.hue
    const satu = this.state.satu
    const lumi = this.state.lumi
    const colors = []
    const hueSteps = (hue.end - hue.start) / (steps-1)
    const satuSteps = (satu.end - satu.start) / (steps-1)
    const lumiSteps = (lumi.end - lumi.start) / (steps-1)

    colors.push([hue.start, satu.start, lumi.start])

    for(let i = 1; i < steps ; i++) {
      let h = hue.start + i*hueSteps
      let s = satu.start + i*satuSteps
      let l = lumi.start + i*lumiSteps
      colors.push([h,s,l])
    }

    this.setState({colors})
  }

  render() { 
    const {colors} = this.state  
    return (
      <div className='colorsView'>
        <SideBar handleChange={this.handleViewChanges}/>
        <Main colors={colors}/>
      </div>
    )
  }
}

export default App

