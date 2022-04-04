import Axios from 'axios'

export const getNewAccessJWT = async () => {
  try {
    const { data } = await Axios.get(
      'https://mern-soccer-store.herokuapp.com/api/v1/token',
      {
        headers: {
          authorization: window.localStorage.getItem('refreshJWT'),
        },
      },
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateAccessJWT = async () => {
  try {
    window.sessionStorage.removeItem('accessJWT')

    const { accessJWT } = await getNewAccessJWT()
    if (accessJWT) {
      window.sessionStorage.setItem('accessJWT', accessJWT)
    }

    return window.sessionStorage.getItem('accessJWT')
  } catch (error) {
    console.log(error)
    return false
  }
}

export const requestOTP = async (email) => {
  try {
    if (!email) {
      return false
    }

    const {
      data,
    } = await Axios.post(
      'https://mern-soccer-store.herokuapp.com/api/v1/token/request-otp',
      { email },
    )
    return data
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: error.message,
    }
  }
}
