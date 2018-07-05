import React, { Component } from 'react'
import './ViewAll.css'
// import ViewAll from './components/ViewAll/ViewAll.js'

class ViewAll extends Component {
  render () {
    return `${this.props.value.print}`
  }
}
export default ViewAll
