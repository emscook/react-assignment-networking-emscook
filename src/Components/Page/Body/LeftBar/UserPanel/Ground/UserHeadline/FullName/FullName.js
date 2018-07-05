import React, { Component } from 'react'
import './FullName.css'
class FullName extends Component {
  render () {
    return <div>{`${this.props.value.print}`}</div>
  }
}
export default FullName
