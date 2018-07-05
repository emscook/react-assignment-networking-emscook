import React, { Component } from 'react'
import './Refresh.css'
// import Refresh from './components/Refresh/Refresh.js'

class Refresh extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Refresh
