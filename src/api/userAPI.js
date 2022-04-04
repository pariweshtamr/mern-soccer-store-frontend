import Axios from 'axios'

const rootUrl =
  process.env.NODE_ENV === 'production'
    ? process.env.ROOT_URL
    : 'https://mern-soccer-store.herokuapp.com'

const userApi = rootUrl + '/user'

export const createUser = async (newUser) => {
  try {
    const { data } = await Axios.post(userApi + '/register', newUser)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: error.message,
    }
  }
}

export const verifyNewUser = async (info) => {
  try {
    const { data } = await Axios.patch(userApi + '/email-verification', info)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: error.message,
    }
  }
}

export const loginUser = async (info) => {
  try {
    const { data } = await Axios.post(userApi + '/login', info)
    return data
  } catch (error) {
    return {
      status: 'error',
      message: 'Invalid login details',
    }
  }
}

export const getUser = async () => {
  try {
    const { data } = await Axios.get(userApi, {
      headers: {
        authorization: window.sessionStorage.getItem('accessJWT'),
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
    const { data } = await Axios.post(userApi + '/logout', tokens)
    return data
  } catch (error) {
    return {
      status: 'error',
      message: 'Error, unable to process your request. Please try again later.',
    }
  }
}

export const updateUserProfile = async (userInfo) => {
  try {
    const { data } = await Axios.patch(userApi, userInfo, {
      headers: {
        authorization: window.sessionStorage.getItem('accessJWT'),
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
    const { data } = await Axios.post(userApi + '/password-update', passInfo, {
      headers: {
        authorization: window.sessionStorage.getItem('accessJWT'),
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
    const { data } = await Axios.post(userApi + '/reset-password', passInfo)
    return data
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: error.message,
    }
  }
}
