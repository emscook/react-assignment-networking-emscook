import React, { Component } from 'react'
import './Label.css'
// import Label from './components/Label/Label.js'

class Label extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Label
