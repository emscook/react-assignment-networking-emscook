import React, { Component } from 'react'
import './Title.css'
// import Title from './components/Title/Title.js'
import Label from './Label/Label'
import Refresh from './Refresh/Refresh'
import ViewAll from './ViewAll/ViewAll'
class Title extends Component {
  render () {
    return (
      <div>
        <a href='#explore ' className='pagebar-item '>
          <Label value={this.props.value.label} />
        </a>
        <a href='#explore ' className='pagebar-item '>
          <Refresh value={this.props.value.refresh} />
        </a>
        <a href='#explore ' className='pagebar-item '>
          <ViewAll value={this.props.value.viewAll} />
        </a>
      </div>
    )
  }
}
export default Title
