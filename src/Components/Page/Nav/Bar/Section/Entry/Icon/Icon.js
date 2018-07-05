import React, { Component } from 'react'
import './Icon.css'
// import Icon from './components/Icon/Icon.js'

class Icon extends Component {
  render () {
    console.log(`${this.props.value}`)
    return (
      <div>
        <i className={`${this.props.value}`} />
      </div>
    )
  }
}
export default Icon
