import React, { Component } from 'react'
import './TweetsListing.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
import TweetsCount from './TweetsCount/TweetsCount'
import TweetsHeading from './TweetsHeading/TweetsHeading'
class TweetsListing extends Component {
  render () {
    return (
      <div>
        <TweetsHeading value={this.props.value.heading} />
        <TweetsCount value={this.props.value.count} />
      </div>
    )
  }
}
export default TweetsListing
