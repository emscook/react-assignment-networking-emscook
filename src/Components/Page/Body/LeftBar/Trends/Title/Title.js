import React, { Component } from 'react'
import './Title.css'
// import Title from './components/Title/Title.js'
import Change from './Change/Change'
import Label from './Label/Label'
class Title extends Component {
  render () {
    return (
      <div>
        <Label value={this.props.value.label} />
        <Change value={this.props.value.change} />
      </div>
    )
  }
}
export default Title
