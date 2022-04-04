import Axios from 'axios'

export const getProducts = async () => {
  try {
    const { data } = await Axios.get(
      'https://mern-soccer-store.herokuapp.com/api/v1/products',
    )
    return data
  } catch (error) {
    return error?.message?.data || { status: 'error', message: error.message }
  }
}

export const getAProductById = async (_id) => {
  try {
    const { data } = await Axios.get(
      `https://mern-soccer-store.herokuapp.com/api/v1/products/${_id}`,
    )
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}
