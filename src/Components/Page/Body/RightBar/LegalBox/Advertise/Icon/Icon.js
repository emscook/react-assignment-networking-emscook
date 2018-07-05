import React, { Component } from 'react'
import './Icon.css'
// import Icon from './components/Icon/Icon.js'

class Icon extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Icon
