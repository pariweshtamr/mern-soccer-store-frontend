import Axios from 'axios'

const catApi = `${process.env.ROOT_URL}/api/v1/category`
export const getCategories = async () => {
  try {
    const { data } = await Axios.get(
      'https://mern-soccer-store.herokuapp.com/api/v1/category',
    )
    return data
  } catch (error) {
    return error?.message?.data || { status: 'error', message: error.message }
  }
}
