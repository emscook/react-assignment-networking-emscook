import React, { Component } from 'react'
import './FollowingCount.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
// import FollowingCount from './FollowingCount/FollowingCount'
// import FollowingHeading from './FollowingHeading/FollowingHeading'
class FollowingCount extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default FollowingCount
