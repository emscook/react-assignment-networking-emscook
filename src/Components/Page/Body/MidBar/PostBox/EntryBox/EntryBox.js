import React, { Component } from 'react'
import './EntryBox.css'
// import EntryBox from './components/EntryBox/EntryBox.js'
import Text from './Text/Text'
import UploadPic from './UploadPic/UploadPic'
class EntryBox extends Component {
  render () {
    return <Text value={this.props.value.text} />
  }
}
export default EntryBox
