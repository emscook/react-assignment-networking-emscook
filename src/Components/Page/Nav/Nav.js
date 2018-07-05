import React, { Component } from 'react'
import './Nav.css'
// import Nav from './components/Nav/Nav.js'
import Bar from './Bar/Bar'
class Nav extends Component {
  render () {
    return (
      <div>
        <nav
          className='navbar-cust'
          role='navigation'
          aria-label='main navigation'
          style={{
            display: 'flex',
            minHeight: '3.25rem',
            alignItems: 'stretch'
          }}
        >
          <div className='navbar-menu-cust flex-stack'>
            {this.props.value.bars.map(bar => {
              return <Bar value={bar} />
            })}

          </div>
        </nav>

      </div>
    )
  }
}
export default Nav
