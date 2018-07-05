import React, { Component } from 'react'
import './Dismiss.css'
// import Dismiss from './components/Dismiss/Dismiss.js'

class Dismiss extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Dismiss
