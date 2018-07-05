import React, { Component } from 'react'
import './Contents.css'
// import Contents from './components/Contents/Contents.js'

class Contents extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Contents
