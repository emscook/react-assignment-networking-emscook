import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'

class TweetInput extends Component {
  render () {
    return (
      <div>
        <TextField
          type='text'
          label='Contents'
          value={this.props.value}
          onChange={this.props.changed}
          onKeyPress={this.props.keyPressed}
        />
        <TextField
          type='text'
          label='Target Tweet'
          value={this.props.targetValue}
          onChange={this.props.targetChanged}
        />
      </div>
    )
  }
}

export default TweetInput
