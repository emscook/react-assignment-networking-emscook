import React, { Component } from 'react'
import './Follow.css'
// import Follow from './components/Follow/Follow.js'

class Follow extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Follow
