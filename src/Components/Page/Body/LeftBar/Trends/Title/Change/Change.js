import React, { Component } from 'react'
import './Change.css'
// import Change from './components/Change/Change.js'

class Change extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Change
