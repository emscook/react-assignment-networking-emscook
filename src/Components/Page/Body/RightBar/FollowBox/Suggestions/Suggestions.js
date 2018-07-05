import React, { Component } from 'react'
import './Suggestions.css'
// import Suggestions from './components/Suggestions/Suggestions.js'
import Listing from './Listing/Listing'
class Suggestions extends Component {
  render () {
    return (
      <div>
        {this.props.value.listings.map(bar => {
          return <Listing value={bar} />
        })}
      </div>
    )
  }
}
export default Suggestions
