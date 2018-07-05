import React, { Component } from 'react'
import './Entry.css'
// import Entry from './components/Entry/Entry.js'
import Icon from './Icon/Icon'
import Input from './Input/Input'
import Label from './Label/Label'
class Entry extends Component {
  render () {
    if (this.props.value.input) {
      return (
        <div className='search-item flex'>
          <div
            id='search'
            className='flex items-center navbar-item-cust fillVert'
            style={{ padding: 0 }}
          >
            <Input
              id='search-input'
              className='flex'
              placeholder='Search Twitter'
            />
            <label htmlFor='search-input'>
              <Icon value={`${this.props.value.icon}`} />
            </label>

          </div>
        </div>
      )
    } else {
      return (
        <a href={`${this.props.value.link}`} className='weak-item'>
          <div className='navbar-item-cust'>
            <i className={`${this.props.value.icon}`} />
            {`${this.props.value.label}`}
          </div>
          <div id='myModal' className='modal'>
            <div className='modal-content'>
              <span className='close'>x</span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
        </a>
      )
    }
  }
}
export default Entry
