import React, { Component } from 'react'
import './Body.css'
// import Body from './components/Body/Body.js'

class Body extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Body
