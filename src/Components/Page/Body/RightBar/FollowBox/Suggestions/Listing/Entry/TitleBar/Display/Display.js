import React, { Component } from 'react'
import './Display.css'
// import Display from './components/Display/Display.js'

class Display extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Display
