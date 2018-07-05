import React, { Component } from 'react'
import './TitleBar.css'
// import TitleBar from './components/TitleBar/TitleBar.js'
import Name from './Name/Name'
import Display from './Display/Display'
import Verified from './Verified/Verified'
import Time from './Time/Time'
class TitleBar extends Component {
  render () {
    return (
      <div>
        <Name value={this.props.value.name} />
        <Display value={this.props.value.display} />
        <Verified value={this.props.value.verified} />
        <Time value={this.props.value.time} />

      </div>
    )
  }
}
export default TitleBar
