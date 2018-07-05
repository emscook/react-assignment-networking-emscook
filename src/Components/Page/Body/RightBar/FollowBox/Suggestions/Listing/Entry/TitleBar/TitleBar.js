import React, { Component } from 'react'
import './TitleBar.css'
// import TitleBar from './components/TitleBar/TitleBar.js'
import Display from './Display/Display'
import Name from './Name/Name'
import Verified from './Verified/Verified'
class TitleBar extends Component {
  render () {
    return (
      <div>
        <Name value={this.props.value.name} />
        <Verified value={this.props.value.verified} />
        <Display value={this.props.value.display} />
      </div>
    )
  }
}
export default TitleBar
