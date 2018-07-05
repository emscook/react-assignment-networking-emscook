import React, { Component } from 'react'
import './Verified.css'
// import Verified from './components/Verified/Verified.js'

class Verified extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Verified
