import React, { Component } from 'react'
// import Contents from './components/Contents/Contents.js'

class Text extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Text
