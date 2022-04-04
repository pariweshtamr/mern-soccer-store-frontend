import Axios from 'axios'

const prodApi = `${process.env.ROOT_URL}/products`

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
