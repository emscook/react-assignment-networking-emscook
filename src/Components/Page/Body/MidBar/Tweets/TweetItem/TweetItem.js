import React, { Component, Fragment } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
class TweetItem extends Component {
  render () {
    return (
      <ListItem>
        <ListItemText primary={this.props.content} />
        <ListItemText primary={this.props.tweetID} />
        <ListItemSecondaryAction>
          {
            <Fragment>
              <IconButton aria-label='Delete' onClick={this.props.deleteTweet}>
                <Delete />
              </IconButton>
            </Fragment>
          }
        </ListItemSecondaryAction>
      </ListItem>
    )
  }
}

export default TweetItem
