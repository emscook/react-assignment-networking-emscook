import React, { Component } from 'react'
import './UserHeadline.css'
import FullName from './FullName/FullName'
import UserName from './UserName/UserName'
class UserHeadline extends Component {
  render () {
    return (
      <div>
        <FullName value={this.props.value.full} />
        <UserName value={this.props.value.user} />
      </div>
    )
  }
}
export default UserHeadline
