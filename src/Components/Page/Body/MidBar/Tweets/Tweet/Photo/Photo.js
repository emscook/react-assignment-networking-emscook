import React, { Component } from 'react'
import './Photo.css'
// import Photo from './components/Photo/Photo.js'

class Photo extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Photo
