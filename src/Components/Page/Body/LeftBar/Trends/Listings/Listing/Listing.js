import React, { Component } from 'react'
import './Listing.css'
// import Listing from './components/Listing/Listing.js'
import Title from './Title/Title'
import Body from './Body/Body'
class Listing extends Component {
  render () {
    return (
      <div>
        <Title value={this.props.value.title} />
        <Body value={this.props.value.body} />
      </div>
    )
  }
}
export default Listing
