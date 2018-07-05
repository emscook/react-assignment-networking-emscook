import React, { Component } from 'react'
import './Listing.css'
// import Listing from './components/Listing/Listing.js'
import Dismiss from './Dismiss/Dismiss'
import Entry from './Entry/Entry'
import Photo from './Photo/Photo'
class Listing extends Component {
  render () {
    return (
      <div>
        <Photo value={this.props.value.photo} />
        <Entry value={this.props.value.entry} />
        <Dismiss value={this.props.value.dismiss} />
      </div>
    )
  }
}
export default Listing
