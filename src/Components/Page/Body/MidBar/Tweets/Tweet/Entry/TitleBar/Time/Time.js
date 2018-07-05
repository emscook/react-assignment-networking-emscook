import React, { Component } from 'react'
import './Time.css'
// import Time from './components/Time/Time.js'

class Time extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Time
