import React, { Component } from 'react'
import './FollowingHeading.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
// import FollowingHeading from './FollowingHeading/FollowingHeading'
// import FollowingHeading from './FollowingHeading/FollowingHeading'
class FollowingHeading extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default FollowingHeading
