import React, { Component } from 'react'
import './Legal.css'
// import Legal from './components/Legal/Legal.js'

class Legal extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Legal
