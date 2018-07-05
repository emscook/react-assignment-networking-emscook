import React, { Component } from 'react'
import './DirectMessage.css'
// import DirectMessage from './components/DirectMessage/DirectMessage.js'

class DirectMessage extends Component {
  render () {
    return `${this.props.value.icon}`
  }
}
export default DirectMessage
