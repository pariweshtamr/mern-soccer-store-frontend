import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import LoadingBox from '../LoadingBox/LoadingBox'
import MessageBox from '../MessageBox/MessageBox'
import { userLogin } from '../../redux/User/UserAction'
import {
  Back,
  ExternalLink,
  RegisterOrHome,
  LoginButton,
  LoginContainer,
  LoginForm,
  LoginInput,
  LoginTitle,
  LoginWrapper,
  ForgotPasswordLink,
  LoginLink,
  HomeLink,
} from './LoginComponentStyles'
import loginWallpaper from '../../assets/loginWallpaper.jpg'

const initialState = {
  username: 'pariwesh7',
  password: '',
}

const LoginComponent = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const { isLoggedIn, isLoading, userLoginResponse } = useSelector(
    (state) => state.user,
  )
  const [loginInfo, setLoginInfo] = useState(initialState)

  const from = location?.state?.from?.pathname || '/'

  useEffect(() => {
    isLoggedIn && navigate(from)
  }, [isLoggedIn, dispatch, navigate, from])

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setLoginInfo({
      ...loginInfo,
      [name]: value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    dispatch(userLogin(loginInfo))
  }

  return (
    <LoginContainer
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${loginWallpaper})`,
      }}
    >
      <LoginWrapper>
        <LoginTitle>SIGN IN</LoginTitle>
        <hr />
        {isLoading && <LoadingBox />}
        {userLoginResponse?.message && (
          <MessageBox
            variant={
              userLoginResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {userLoginResponse.message}
          </MessageBox>
        )}
        <LoginForm onSubmit={handleOnSubmit}>
          <LoginInput
            name="username"
            placeholder="Enter your Username"
            required
            value={loginInfo.username}
            onChange={handleOnChange}
          />
          <LoginInput
            name="password"
            type="password"
            placeholder="Enter your Password"
            required
            value={loginInfo.password}
            onChange={handleOnChange}
          />
          <LoginButton type="submit">LOGIN</LoginButton>
        </LoginForm>
        <RegisterOrHome>
          <ExternalLink>
            <ForgotPasswordLink to="/reset-password">
              Forgot your password?
            </ForgotPasswordLink>
            <LoginLink to="/register">
              Don't have an account? SIGN UP!
            </LoginLink>
          </ExternalLink>

          <Back>
            <HomeLink to="/">
              <i className="fa">H O M E</i>
            </HomeLink>
          </Back>
        </RegisterOrHome>
      </LoginWrapper>
    </LoginContainer>
  )
}

export default LoginComponent
