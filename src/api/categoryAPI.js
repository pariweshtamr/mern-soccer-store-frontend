import Axios from "axios"
const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_ROOT_URL
    : "http://localhost:8000/api/v1"

export const getCategories = async () => {
  try {
    const { data } = await Axios.get(url + "/category")
    return data
  } catch (error) {
    return error?.message?.data || { status: "error", message: error.message }
  }
}
