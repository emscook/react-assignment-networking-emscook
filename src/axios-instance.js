import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://twitter-crud-demo.firebaseio.com'
})

instance.interceptors.response.use(
  response =>
    (response.data
      ? Object.entries(response.data).map(([id, tweet]) => ({ ...tweet, id }))
      : null),
  error => Promise.reject(error)
)

export default instance
