import Axios from 'axios'

const tokenApi = `${process.env.ROOT_URL}/api/v1/token`

export const getNewAccessJWT = async () => {
  try {
    const { data } = await Axios.get(tokenApi, {
      headers: {
        authorization: window.localStorage.getItem('refreshJWT'),
      },
    })
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

    const { data } = await Axios.post(tokenApi + '/request-otp', { email })
    return data
  } catch (error) {
    console.log(error)
    return {
      status: 'error',
      message: error.message,
    }
  }
}
