import React, { Component } from 'react'
import './TweetsHeading.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
class TweetsHeading extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default TweetsHeading
