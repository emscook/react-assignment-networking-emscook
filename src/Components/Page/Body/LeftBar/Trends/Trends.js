import React, { Component } from 'react'
import './Trends.css'
// import Trends from './components/Trends/Trends.js'
import Listings from './Listings/Listings'
import Title from './Title/Title'
class Trends extends Component {
  render () {
    return (
      <div className='fillHori left-text'>
        <a
          href='#explore'
          className='pagebar-read trends whiteItem read-padding'
        >
          <Title value={this.props.value.title} />
        </a>
        <a
          href='#explore'
          className='pagebar-read trends whiteItem read-padding'
        >
          <Listings value={this.props.value.listings} />
        </a>
      </div>
    )
  }
}
export default Trends
