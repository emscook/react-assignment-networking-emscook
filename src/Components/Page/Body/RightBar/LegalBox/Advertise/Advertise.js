import React, { Component } from 'react'
import './Advertise.css'
// import Advertise from './components/Advertise/Advertise.js'
import Icon from './Icon/Icon'
import Text from './Text/Text'
class Advertise extends Component {
  render () {
    return (
      <div>
        <Icon value={this.props.value.icon} />
        <Text value={this.props.value.text} />
      </div>
    )
  }
}
export default Advertise
