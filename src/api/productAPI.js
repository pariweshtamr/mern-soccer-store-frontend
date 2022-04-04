import Axios from 'axios'

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'https://mern-soccer-store.herokuapp.com/api/v1'

const prodApi = rootUrl + '/products'

export const getProducts = async () => {
  try {
    const { data } = await Axios.get(prodApi)
    return data
  } catch (error) {
    return error?.message?.data || { status: 'error', message: error.message }
  }
}

export const getAProductById = async (_id) => {
  try {
    const { data } = await Axios.get(`${prodApi}/${_id}`)
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}
