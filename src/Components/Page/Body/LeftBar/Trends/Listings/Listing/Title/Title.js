import React, { Component } from 'react'
import './Title.css'
// import Title from './components/Title/Title.js'
class Title extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Title
