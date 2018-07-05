import React, { Component } from 'react'
import './UploadPic.css'
// import UploadPic from './components/UploadPic/UploadPic.js'

class UploadPic extends Component {
  render () {
    return <div>{`${this.props.value.print}`}</div>
  }
}
export default UploadPic
