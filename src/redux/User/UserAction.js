import {
  getNewAccessJWT,
  requestOTP,
  updateAccessJWT,
} from '../../api/tokenAPI'
import {
  createUser,
  getUser,
  loginUser,
  logoutUser,
  resetForgotPassword,
  updateUserPassword,
  updateUserProfile,
  verifyNewUser,
} from '../../api/userAPI'
import {
  autoLoginPending,
  loginAuto,
  loginFail,
  loginSuccess,
  logoutSuccess,
  passwordUpdateSuccess,
  profileUpdateSuccess,
  requestFail,
  requestPending,
  requestSuccess,
  resetPassResponse,
} from './UserSlice'

export const userRegister = (newUser) => async (dispatch) => {
  dispatch(requestPending())

  // call api
  const data = await createUser(newUser)
  console.log(data)
  data?.status === 'success'
    ? dispatch(requestSuccess(data))
    : dispatch(requestFail(data))
}

export const userEmailVerification = (userObj) => async (dispatch) => {
  dispatch(requestPending())

  // call api
  const data = await verifyNewUser(userObj)
  data?.status === 'success'
    ? dispatch(requestSuccess(data))
    : dispatch(requestFail(data))
}

const setJWTinBrowserMemory = ({ accessJWT, refreshJWT }) => {
  window.sessionStorage.setItem('accessJWT', accessJWT)
  window.localStorage.setItem('refreshJWT', refreshJWT)
}

export const userLogin = (loginInfo) => async (dispatch) => {
  dispatch(requestPending())

  // CALL API TO LOGIN
  const data = await loginUser(loginInfo)
  if (data?.status === 'success') {
    setJWTinBrowserMemory(data.jwts)
    return dispatch(loginSuccess(data.user))
  }

  dispatch(loginFail(data))
}

export const autoLogin = () => async (dispatch) => {
  dispatch(autoLoginPending(true))
  const accessJWT = window.sessionStorage.getItem('accessJWT')
  const refreshJWT = window.localStorage.getItem('refreshJWT')

  //1. accessJWT EXISTS
  if (accessJWT) {
    dispatch(loginAuto())
    return
  }

  //2. accessJWT does not exist but refreshJWT exists
  if (!accessJWT && refreshJWT) {
    // CALL API to get refreshJWT
    const result = await getNewAccessJWT()
    if (result?.accessJWT) {
      window.sessionStorage.setItem('accessJWT', result.accessJWT)
      return dispatch(loginAuto())
    }

    dispatch(userLogout())
  }
}

export const userLogout = () => async (dispatch) => {
  const accessJWT = window.sessionStorage.getItem('accessJWT')
  const refreshJWT = window.localStorage.getItem('refreshJWT')

  await logoutUser({ accessJWT, refreshJWT })

  window.sessionStorage.removeItem('accessJWT')
  window.localStorage.removeItem('refreshJWT')

  dispatch(logoutSuccess())
}

export const fetchUserDetails = () => async (dispatch) => {
  dispatch(requestPending())
  const data = await getUser()
  if (data?.message === 'jwt expired') {
    // request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(fetchUserDetails())
    } else {
      dispatch(userLogout())
    }
  }

  if (data?.user) {
    return dispatch(loginSuccess(data.user))
  }
  dispatch(requestFail(data))
}

export const userInfoUpdate = (userInfo) => async (dispatch) => {
  dispatch(requestPending())
  const data = await updateUserProfile(userInfo)
  if (data?.message === 'jwt expired') {
    // request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(userInfoUpdate(userInfo))
    } else {
      dispatch(userLogout())
    }
  }

  dispatch(profileUpdateSuccess(data))
}

export const userPasswordUpdate = (passInfo) => async (dispatch) => {
  dispatch(requestPending())
  const data = await updateUserPassword(passInfo)
  if (data?.message === 'jwt expired') {
    //request for new accessJWT
    const token = await updateAccessJWT()
    if (token) {
      return dispatch(userPasswordUpdate(passInfo))
    } else {
      dispatch(userLogout())
    }
  }

  dispatch(passwordUpdateSuccess(data))
}

export const requestPasswordResetOtp = (email) => async (dispatch) => {
  dispatch(requestPending())
  const data = await requestOTP(email)

  dispatch(resetPassResponse({ data, email }))
}

export const resetPasswordAction = (passObj) => async (dispatch) => {
  dispatch(requestPending())
  const data = await resetForgotPassword(passObj)

  dispatch(resetPassResponse({ data }))
}
