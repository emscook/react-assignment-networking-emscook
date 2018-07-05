import React, { Component } from 'react'
import './Photo.css'

class Photo extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Photo
