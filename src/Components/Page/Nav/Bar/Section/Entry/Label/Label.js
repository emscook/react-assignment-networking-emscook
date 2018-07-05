import React, { Component } from 'react'
import './Label.css'
// import Label from './components/Label/Label.js'

class Label extends Component {
  render () {
    if (this.props.label) {
      return (
        <div>
          {`${this.props.label}`}
        </div>
      )
    } else {
      return <div />
    }
  }
}
export default Label
