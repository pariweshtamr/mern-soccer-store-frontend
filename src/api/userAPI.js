import Axios from "axios"

const url =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_ROOT_URL
    : "http://localhost:8000/api/v1"

export const createUser = async (newUser) => {
  try {
    const { data } = await Axios.post(url + "/user/register", newUser)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const verifyNewUser = async (info) => {
  try {
    const { data } = await Axios.patch(url + "/user/email-verification", info)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: "error",
      message: error.message,
    }
  }
}

export const loginUser = async (info) => {
  try {
    const { data } = await Axios.post(url + "user/login", info)
    return data
  } catch (error) {
    return {
      status: "error",
      message: "Invalid login details",
    }
  }
}

export const getUser = async () => {
  try {
    const { data } = await Axios.get(url + "/user", {
      headers: {
        authorization: window.sessionStorage.getItem("accessJWT"),
      },
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

export const logoutUser = async (tokens) => {
  try {
    const { data } = await Axios.post(url + "user/logout", tokens)
    return data
  } catch (error) {
    return {
      status: "error",
      message: "Error, unable to process your request. Please try again later.",
    }
  }
}

export const updateUserProfile = async (userInfo) => {
  try {
    const { data } = await Axios.patch(url + "/user", userInfo, {
      headers: {
        authorization: window.sessionStorage.getItem("accessJWT"),
      },
    })
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

export const updateUserPassword = async (passInfo) => {
  try {
    const { data } = await Axios.post(url + "/user/password-update", passInfo, {
      headers: {
        authorization: window.sessionStorage.getItem("accessJWT"),
      },
    })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
    return error?.response?.data
  }
}

export const resetForgotPassword = async (passInfo) => {
  try {
    const { data } = await Axios.post(url + "/user/reset-password", passInfo)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: "error",
      message: error.message,
    }
  }
}
