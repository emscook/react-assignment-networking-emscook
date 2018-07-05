import React, { Component } from 'react'

import './Page.css'
import './index.css'
import Body from './Body/Body'
import Nav from './Nav/Nav'
class Page extends Component {
  state = {
    nav: {
      bars: [
        {
          sections: [
            {
              title: 'siteNav',
              className: 'navbar-start-cust',
              entries: [
                {
                  icon: 'fas fa-home',
                  input: '',
                  label: 'Home',
                  link: './home',
                  type: 'standard',
                  key: 'Home'
                },
                {
                  icon: 'fas fa-bolt',
                  input: '',
                  label: 'Moments',
                  link: './home',
                  type: 'standard',
                  key: 'Moments'
                },
                {
                  icon: 'fas fa-bell',
                  input: '',
                  label: 'Notifications',
                  link: './home',
                  type: 'standard',
                  key: 'Notifications'
                },
                {
                  icon: 'fas fa-envelope',
                  input: '',
                  label: 'Messages',
                  link: './home',
                  type: 'modal',
                  key: 'Messages'
                }
              ]
            },
            {
              title: 'home',
              className: '',
              entries: [
                {
                  icon: 'fab fa-twitter',
                  input: '',
                  label: '',
                  link: './home',
                  type: 'standard',
                  key: 'Bird'
                }
              ]
            },
            {
              title: 'userNav',
              className: 'navbar-end-cust flex',
              entries: [
                {
                  icon: 'fa fa-search',
                  input: 'search',
                  label: 'Search Twitter',
                  link: './home',
                  type: 'standard',
                  key: 'Search'
                },
                {
                  icon: 'fa fa-user items-center',
                  input: '',
                  label: '',
                  link: './home',
                  type: 'standard',
                  key: 'User-Settings'
                },
                {
                  icon: '',
                  input: '',
                  label: 'Tweet',
                  link: './home',
                  type: 'standard',
                  key: 'Tweet-Button'
                }
              ]
            }
          ]
        }
      ]
    },
    body: {
      left: {
        trends: {
          title: {
            label: {
              print: 'Trends For You'
            },
            change: {
              print: 'Change'
            }
          },
          listings: {
            entries: [
              {
                title: { print: '#MondayMotivation' },
                body: { print: '193K Tweets' }
              },
              {
                title: { print: 'Ryan Hollins' },
                body: { print: '' }
              },
              {
                title: { print: 'Boonk' },
                body: { print: '32.4K Tweets' }
              },
              {
                title: { print: 'Thon Maker' },
                body: { print: '28.6K Tweets' }
              },
              {
                title: { print: 'Independence Day' },
                body: { print: '34.8K Tweets' }
              }
            ]
          }
        },
        userpanel: {
          ground: {
            photo: {
              print: 'my pic'
            },
            details: {
              following: {
                count: { print: '1' },
                heading: { print: 'Following' }
              },
              tweets: {
                count: { print: '4' },
                heading: { print: 'Tweets' }
              }
            },
            headline: {
              full: {
                print: 'Evan Susag'
              },
              user: {
                print: '@thePainSearch'
              }
            }
          },
          sky: {
            value: ''
          }
        }
      },
      mid: {
        postBox: {
          entryBox: {
            text: {
              print: "What's happening?"
            }
          },
          picture: { print: 'far fa-image' }
        },
        tweets: {
          listings: [
            {
              entry: {
                contents: { print: 'one' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '1' },
                  retweets: { icon: '[retweetIcon]', print: '2' },
                  likes: { icon: '[likeIcon]', print: '2' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '6 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'two' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '3' },
                  retweets: { icon: '[retweetIcon]', print: '4' },
                  likes: { icon: '[likeIcon]', print: '3' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '7 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'three' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '5' },
                  retweets: { icon: '[retweetIcon]', print: '6' },
                  likes: { icon: '[likeIcon]', print: '4' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '8 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'four' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '7' },
                  retweets: { icon: '[retweetIcon]', print: '8' },
                  likes: { icon: '[likeIcon]', print: '5' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '10 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'five' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '9' },
                  retweets: { icon: '[retweetIcon]', print: '10' },
                  likes: { icon: '[likeIcon]', print: '6' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '11 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'six' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '11' },
                  retweets: { icon: '[retweetIcon]', print: '12' },
                  likes: { icon: '[likeIcon]', print: '7' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '12 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'seven' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '13' },
                  retweets: { icon: '[retweetIcon]', print: '14' },
                  likes: { icon: '[likeIcon]', print: '8' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '13 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'eight' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '15' },
                  retweets: { icon: '[retweetIcon]', print: '16' },
                  likes: { icon: '[likeIcon]', print: '9' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '14 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'nine' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '17' },
                  retweets: { icon: '[retweetIcon]', print: '18' },
                  likes: { icon: '[likeIcon]', print: '10' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '15 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            },
            {
              entry: {
                contents: { print: 'ten' },
                stats: {
                  comments: { icon: '[commentIcon]', print: '19' },
                  retweets: { icon: '[retweetIcon]', print: '20' },
                  likes: { icon: '[likeIcon]', print: '11' },
                  directMessage: { icon: '[DM]' }
                },
                titleBar: {
                  display: { print: 'Evan Susag' },
                  name: { print: '@thePainSearch' },
                  time: { print: '16 min ago' },
                  verified: { print: '[X]' }
                }
              },
              expand: { print: 'expand?' },
              photo: { print: '[DisplayPic]' }
            }
          ]
        }
      },
      right: {
        follow: {
          connect: {
            print: 'Connect other address books'
          },
          find: {
            print: 'Find People You Know',
            print2: 'Import your contacts from gmail'
          },
          suggestions: {
            listings: [
              {
                dismiss: { print: 'X' },
                entry: {
                  titleBar: {
                    name: { print: 'SWIZZBEATZ' },
                    verified: { print: '' },
                    display: { print: '@therealswingzzz' }
                  },
                  follow: {
                    print: ''
                  }
                },
                photo: { print: 'bruh' }
              },
              {
                dismiss: { print: 'X' },
                entry: {
                  titleBar: {
                    name: { print: 'Mike Yo' },
                    verified: { print: '[Verified]' },
                    display: { print: '@mikeyo' }
                  },
                  follow: {
                    print: ''
                  }
                },
                photo: { print: 'is' }
              },
              {
                dismiss: { print: 'X' },
                entry: {
                  titleBar: {
                    name: { print: 'Mike Yo' },
                    verified: { print: '[Verified]' },
                    display: { print: '@mikeyo' }
                  },
                  follow: {
                    print: ''
                  }
                },
                photo: { print: 'not bruh' }
              }
            ]
          },
          title: {
            label: {
              print: 'Who to Follow'
            },
            refresh: {
              print: 'Refresh'
            },
            viewAll: {
              print: 'View All'
            }
          }
        },
        legalBox: {
          legal: {
            print: '© 2018 Twitter About Help Center Terms Privacy policy Cookies Ads info Brand Blog Status Apps Jobs Marketing Businesses Developers'
          },
          advertise: {
            icon: {
              print: '[M]'
            },
            text: {
              print: 'Advertise with Twitter!'
            }
          }
        }
      }
    }
  }
  render () {
    return (
      <div>
        <Nav value={this.state.nav} />
        <Body value={this.state.body} />
      </div>
    )
  }
}
export default Page
