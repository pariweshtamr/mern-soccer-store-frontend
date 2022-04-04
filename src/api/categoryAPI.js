import Axios from 'axios'

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
