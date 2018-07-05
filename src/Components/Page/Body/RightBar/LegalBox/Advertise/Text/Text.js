import React, { Component } from 'react'
import './Text.css'
// import Text from './components/Text/Text.js'

class Text extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Text
