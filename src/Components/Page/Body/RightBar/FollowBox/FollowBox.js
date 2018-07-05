import React, { Component } from 'react'
import './FollowBox.css'
// import FollowBox from './components/FollowBox/FollowBox.js'
import Connect from './Connect/Connect'
import Find from './Find/Find'
import Suggestions from './Suggestions/Suggestions'
import Title from './Title/Title'
class FollowBox extends Component {
  render () {
    return (
      <div className='separated-posts whiteItem'>
        <Title value={this.props.value.title} />
        <a
          href='#explore'
          className='pagebar-read trends whiteItem read-padding'
        >
          <Suggestions value={this.props.value.suggestions} />
        </a>
        <Find value={this.props.value.find} />
        <Connect value={this.props.value.connect} />
      </div>
    )
  }
}
export default FollowBox
