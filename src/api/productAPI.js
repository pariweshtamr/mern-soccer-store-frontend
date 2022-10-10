import Axios from "axios"
const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_ROOT_URL
    : "http://localhost:8000/api/v1"

export const getProducts = async () => {
  try {
    const { data } = await Axios.get(url + "/products")
    return data
  } catch (error) {
    return error?.message?.data || { status: "error", message: error.message }
  }
}

export const getAProductById = async (_id) => {
  try {
    const { data } = await Axios.get(url + `/products/${_id}`)
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}
