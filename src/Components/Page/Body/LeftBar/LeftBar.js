import React, { Component } from 'react'
import './LeftBar.css'
// import LeftBar from './components/LeftBar/LeftBar.js'
import Trends from './Trends/Trends'
import UserPanel from './UserPanel/UserPanel'
class LeftBar extends Component {
  render () {
    return (
      <div className='pagebar-read third stretch-height'>
        <UserPanel value={this.props.value.userpanel} />
        <Trends value={this.props.value.trends} />
      </div>
    )
  }
}
export default LeftBar
