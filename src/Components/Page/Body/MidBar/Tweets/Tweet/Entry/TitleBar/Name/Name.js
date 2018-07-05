import React, { Component } from 'react'
import './Name.css'
// import Name from './components/Name/Name.js'

class Name extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default Name
