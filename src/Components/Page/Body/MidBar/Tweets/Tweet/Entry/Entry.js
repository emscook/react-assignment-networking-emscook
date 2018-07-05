import React, { Component } from 'react'
import './Entry.css'
// import Entry from './components/Entry/Entry.js'
import Contents from './Contents/Contents'
import Stats from './Stats/Stats'
import TitleBar from './TitleBar/TitleBar'
class Entry extends Component {
  render () {
    return (
      <div>
        <TitleBar value={this.props.value.titleBar} />
        <Contents value={this.props.value.contents} />
        <Stats value={this.props.value.stats} />
      </div>
    )
  }
}
export default Entry
