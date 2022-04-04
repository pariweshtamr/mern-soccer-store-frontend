import Axios from 'axios'

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'https://mern-soccer-store.herokuapp.com/api/v1'

const cartApi = rootUrl + '/cart'
