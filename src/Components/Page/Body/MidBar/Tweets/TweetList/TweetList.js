import React, { Component } from 'react'
import List from '@material-ui/core/List'
import TweetItem from '../TweetItem/TweetItem'

class TweetList extends Component {
  render () {
    return (
      <div>
        <List>
          {this.props.tweets.map((tweet, index) => {
            console.log(tweet)
            return (
              <TweetItem
                content={tweet.content.content}
                tweetID={tweet.content.tweetID}
                deleteTweet={() =>
                  this.props.deleteTweet(tweet.content.tweetID)}
              />
            )
          })}
        </List>
      </div>
    )
  }
}

export default TweetList
