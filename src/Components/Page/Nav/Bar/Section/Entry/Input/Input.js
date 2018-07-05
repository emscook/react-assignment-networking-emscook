import React, { Component } from 'react'
import './Input.css'
// import Input from './components/Input/Input.js'
import Button from './Button/Button'
import Field from './Field/Field'
class Input extends Component {
  render () {
    console.log(this.props.placeholder)
    return (
      <div>
        <input
          type={`${this.props.type}`}
          id='search-input'
          className={`${this.props.className}`}
          placeholder={`${this.props.placeholder}`}
        />
      </div>
    )
  }
}
export default Input
