import React, { Component } from 'react'
import './FollowingListing.css'
import FollowingCount from './FollowingCount/FollowingCount'
import FollowingHeading from './FollowingHeading/FollowingHeading'
class FollowingListing extends Component {
  render () {
    return (
      <div>
        <FollowingHeading value={this.props.value.heading} />
        <FollowingCount value={this.props.value.count} />
      </div>
    )
  }
}
export default FollowingListing
