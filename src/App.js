import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Page from './Components/Page/Page'
require('dotenv').config()
class App extends Component {
  render () {
    return (
      <div>
        <Page />
      </div>
    )
  }
}
export default App
