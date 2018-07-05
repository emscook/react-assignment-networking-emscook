import React, { Component } from 'react'
import './Section.css'
// import Section from './components/Section/Section.js'
import Entry from './Entry/Entry'
class Section extends Component {
  render () {
    return (
      <div className='navbar-start-cust'>
        {this.props.section.entries.map(entry => {
          return (
            <Entry
              key={entry.key}
              value={{
                label: `${entry.label}`,
                input: `${entry.input}`,
                icon: `${entry.icon}`,
                link: `${entry.link}`
              }}
            />
          )
        })}
      </div>
    )
  }
}
export default Section
