import React, { Component } from 'react'
import './Entry.css'
// import Entry from './components/Entry/Entry.js'
import Follow from './Follow/Follow'
import TitleBar from './TitleBar/TitleBar'
class Entry extends Component {
  render () {
    return (
      <div>
        <Follow value={this.props.value.follow} />
        <TitleBar value={this.props.value.titleBar} />
      </div>
    )
  }
}
export default Entry
