import React, { Component } from 'react'
import './Tweet.css'
// import Tweet from './components/Tweet/Tweet.js'
import Entry from './Entry/Entry'
import Expand from './Expand/Expand'
import Photo from './Photo/Photo'
class Tweet extends Component {
  render () {
    console.log(this.props.value)
    return (
      <div>
        <Photo value={this.props.value.photo} />
        <Entry value={this.props.value.entry} />
        <Expand value={this.props.value.expand} />
      </div>
    )
  }
}
export default Tweet
