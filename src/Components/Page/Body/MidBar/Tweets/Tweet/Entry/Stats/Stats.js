import React, { Component } from 'react'
import './Stats.css'
// import Stats from './components/Stats/Stats.js'
import Comments from './Comments/Comments'
import DirectMessage from './DirectMessage/DirectMessage'
import Likes from './Likes/Likes'
import Retweets from './Retweets/Retweets'
class Stats extends Component {
  render () {
    return (
      <div>
        <Comments value={this.props.value.comments} />
        <Retweets value={this.props.value.retweets} />
        <Likes value={this.props.value.likes} />
        <DirectMessage value={this.props.value.directMessage} />
      </div>
    )
  }
}
export default Stats
