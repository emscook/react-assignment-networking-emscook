import React, { Component } from 'react'
import './TweetsCount.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
class TweetsCount extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default TweetsCount
