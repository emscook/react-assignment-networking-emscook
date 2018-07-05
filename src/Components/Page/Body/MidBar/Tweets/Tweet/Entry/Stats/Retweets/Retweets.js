import React, { Component } from 'react'
import './Retweets.css'
// import Retweets from './components/Retweets/Retweets.js'

class Retweets extends Component {
  render () {
    return `${this.props.value.icon} ${this.props.value.print}`
  }
}
export default Retweets
