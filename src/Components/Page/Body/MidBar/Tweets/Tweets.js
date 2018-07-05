import React, { Component } from 'react'
import './Tweets.css'
import Card from '@material-ui/core/Card'
import axios from '../../../../../axios-instance'
// import Tweets from './components/Tweets/Tweets.js'
import TweetList from './TweetList/TweetList'
import TweetInput from './TweetInput/TweetInput'
class Tweets extends Component {
  state = {
    value: '',
    tweets: [],
    target: ''
  }
  inputChangeHandler = e => {
    this.setState({
      value: e.target.value
    })
  }

  targetChangeHandler = e => {
    this.setState({
      target: e.target.value
    })
  }

  keyPressed = e => {
    if (e.key === 'Enter') {
      if (this.state.target === '') {
        this.addTweet(this.state.value)
      } else {
        this.editTweet(parseInt(this.state.target), this.state.value)
      }
    }
  }

  addTweet = contents => {
    const maxID = this.state.tweets.length !== 0
      ? Math.max(...this.state.tweets.map(curr => curr.content.tweetID)) + 1
      : 0
    console.log(maxID)
    const tweets = [
      ...this.state.tweets,
      {
        content: { tweetID: maxID, content: contents }
      }
    ]
    axios.put('/tweets.json', tweets).then(() => {
      this.setState(prevState => {
        return {
          value: '',
          tweets
        }
      })
    })
  }

  editTweet = (id, contents) => {
    const newTweets = this.state.tweets.map(
      tweet =>
        (tweet.content.tweetID !== id
          ? tweet
          : { content: { tweetID: tweet.content.tweetID, content: contents } })
    )
    axios.put('/tweets.json', newTweets).then(() => {
      this.setState(prevState => {
        return {
          value: '',
          tweets: newTweets
        }
      })
    })
  }

  deleteTweet = id => {
    const newTweets = this.state.tweets.filter(
      tweet => tweet.content.tweetID !== id
    )
    axios.put('/tweets.json', newTweets).then(() => {
      this.setState(prevState => ({ tweets: newTweets }))
      this.render()
    })
  }

  componentDidMount () {
    axios.get('/tweets.json').then(response => {
      console.log(response)
      if (response) {
        this.setState(prevState => ({
          tweets: [
            ...prevState.tweets,
            ...response.map(someTweet => ({
              content: {
                content: someTweet.content.content,
                tweetID: parseInt(someTweet.content.tweetID)
              }
            }))
          ]
        }))
      }
    })
    return true
  }
  render () {
    console.log(this.state.tweets)
    return (
      <Card>
        <TweetInput
          value={this.state.value}
          changed={this.inputChangeHandler}
          keyPressed={this.keyPressed}
          targetValue={this.state.target}
          targetChanged={this.targetChangeHandler}
        />
        <TweetList tweets={this.state.tweets} deleteTweet={this.deleteTweet} />
      </Card>
    )
  }
}
export default Tweets
