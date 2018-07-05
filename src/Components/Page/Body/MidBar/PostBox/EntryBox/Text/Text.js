import React, { Component } from 'react'
import './Text.css'
// import Text from './components/Text/Text.js'

class Text extends Component {
  render () {
    return <div>{`${this.props.value.print}`}</div>
  }
}
export default Text
