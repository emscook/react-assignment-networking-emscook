import React, { Component } from 'react'
import './PostBox.css'
// import PostBox from './components/PostBox/PostBox.js'
import EntryBox from './EntryBox/EntryBox'
import Picture from './Picture/Picture'
class PostBox extends Component {
  render () {
    return (
      <a href='#explore ' className='pagebar-item fillHori'>
        <EntryBox value={this.props.value.entryBox} />

      </a>
    )
  }
}
export default PostBox
