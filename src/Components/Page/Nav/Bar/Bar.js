import React, { Component } from 'react'
import './Bar.css'
// import Bar from './components/Bar/Bar.js'
import Section from './Section/Section'
class Bar extends Component {
  render () {
    return (
      <div>
        <div className='navbar-menu-cust flex-row'>
          {this.props.value.sections.map(section => {
            return (
              <Section
                key={section.title}
                section={section}
                value={section.title}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
export default Bar
