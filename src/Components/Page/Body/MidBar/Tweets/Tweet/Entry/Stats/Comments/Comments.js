import React, { Component } from 'react'
import './Comments.css'
// import Comments from './components/Comments/Comments.js'

class Comments extends Component {
  render () {
    return `${this.props.value.icon} ${this.props.value.print}`
  }
}
export default Comments
