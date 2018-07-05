import React, { Component } from 'react'
import './UserDetails.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
import FollowingListing from './FollowingListing/FollowingListing'
import TweetsListing from './TweetsListing/TweetsListing'
class UserDetails extends Component {
  render () {
    return (
      <div>
        <FollowingListing value={this.props.value.following} />
        <TweetsListing value={this.props.value.tweets} />
      </div>
    )
  }
}
export default UserDetails
