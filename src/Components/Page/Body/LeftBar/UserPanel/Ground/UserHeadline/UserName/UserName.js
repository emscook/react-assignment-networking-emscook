import React, { Component } from 'react'
import './UserName.css'
class UserName extends Component {
  render () {
    return <div>{`${this.props.value.print}`}</div>
  }
}
export default UserName
