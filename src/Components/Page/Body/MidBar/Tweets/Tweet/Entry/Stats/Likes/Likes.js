import React, { Component } from 'react'
import './Likes.css'
// import Likes from './components/Likes/Likes.js'

class Likes extends Component {
  render () {
    return `${this.props.value.icon} ${this.props.value.print}`
  }
}
export default Likes
