import React, { Component } from 'react'
import './Find.css'
// import Find from './components/Find/Find.js'

class Find extends Component {
  render () {
    return (
      <div>
        <a href='#explore ' className='pagebar-item '>
          <span>{`${this.props.value.print}`}</span>
        </a>
        <a href='#explore ' className='pagebar-item '>
          <span>{`${this.props.value.print2}`}</span>
        </a>
      </div>
    )
  }
}
export default Find
