import React, { Component } from 'react'
import './Expand.css'
// import Expand from './components/Expand/Expand.js'

class Expand extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Expand
