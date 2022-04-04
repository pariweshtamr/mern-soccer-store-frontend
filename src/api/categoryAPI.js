import Axios from 'axios'

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'https://mern-soccer-store.herokuapp.com/api/v1'

const catApi = rootUrl + '/category'
export const getCategories = async () => {
  try {
    const { data } = await Axios.get(catApi)
    return data
  } catch (error) {
    return error?.message?.data || { status: 'error', message: error.message }
  }
}
