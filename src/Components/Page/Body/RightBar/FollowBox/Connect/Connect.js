import React, { Component } from 'react'
import './Connect.css'
// import Connect from './components/Connect/Connect.js'

class Connect extends Component {
  render () {
    return (
      <a href='#explore ' className='pagebar-item '>
        {`${this.props.value.print}`}
      </a>
    )
  }
}
export default Connect
