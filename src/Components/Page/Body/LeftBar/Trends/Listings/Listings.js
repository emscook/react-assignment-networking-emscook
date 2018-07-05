import React, { Component } from 'react'
import './Listings.css'
// import Listings from './components/Listings/Listings.js'
import Listing from './Listing/Listing'

class Listings extends Component {
  render () {
    return (
      <div>
        {this.props.value.entries.map(bar => {
          return <Listing value={bar} />
        })}
      </div>
    )
  }
}
export default Listings
