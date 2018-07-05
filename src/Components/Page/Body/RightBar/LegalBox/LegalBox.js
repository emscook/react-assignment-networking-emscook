import React, { Component } from 'react'
import './LegalBox.css'
// import LegalBox from './components/LegalBox/LegalBox.js'
import Advertise from './Advertise/Advertise'
import Legal from './Legal/Legal'
class LegalBox extends Component {
  render () {
    return (
      <div className='separated-posts whiteItem'>
        <a href='#explore ' className='pagebar-read read-padding'>
          <Legal value={this.props.value.legal} />
          <Advertise value={this.props.value.advertise} />
        </a>
      </div>
    )
  }
}
export default LegalBox
