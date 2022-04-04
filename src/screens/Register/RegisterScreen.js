import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../../components/LoadingBox/LoadingBox'
import MessageBox from '../../components/MessageBox/MessageBox'
import { userRegister } from '../../redux/User/UserAction'
import { Alert } from 'react-bootstrap'

import {
  LoginLink,
  LoginOption,
  RegisterButton,
  RegisterContainer,
  RegisterForm,
  RegisterInput,
  RegisterTitle,
  RegisterWrapper,
} from './RegisterScreenStyles'
import registerWallpaper from '../../assets/registerWallpaper.jpg'

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  password: '',
  confirmPassword: '',
}

const RegisterScreen = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState(initialState)
  const [passwordError, setPasswordError] = useState('')

  const { isLoading, userRegisterResponse } = useSelector((state) => state.user)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    // check for password confirmation
    const { confirmPassword, ...newUser } = user
    const { password } = user
    if (password !== confirmPassword) {
      setPasswordError('Password does not match')
      return
    }
    dispatch(userRegister(newUser))
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target

    // reset error message
    passwordError && name === 'confirmPassword' && setPasswordError('')

    setUser({
      ...user,
      [name]: value,
    })
  }
  return (
    <RegisterContainer
      style={{
        backgroundImage: `url(${registerWallpaper})`,
      }}
    >
      <RegisterWrapper>
        <RegisterTitle>CREATE AN ACCOUNT</RegisterTitle>
        <hr />
        {isLoading && <LoadingBox />}
        {userRegisterResponse?.message && (
          <MessageBox
            variant={
              userRegisterResponse.status === 'success' ? 'success' : 'danger'
            }
          >
            {userRegisterResponse.message}
          </MessageBox>
        )}

        <RegisterForm onSubmit={handleOnSubmit}>
          <RegisterInput
            name="firstName"
            onChange={handleOnChange}
            placeholder="First name"
            required
          />
          <RegisterInput
            name="lastName"
            onChange={handleOnChange}
            placeholder="Last name"
            required
          />
          <RegisterInput
            name="email"
            onChange={handleOnChange}
            placeholder="Email address"
            required
          />
          <RegisterInput
            name="username"
            onChange={handleOnChange}
            placeholder="Enter a username"
            required
          />
          <RegisterInput
            name="password"
            onChange={handleOnChange}
            type="password"
            minLength="7"
            placeholder="Create password"
            required
          />
          <RegisterInput
            name="confirmPassword"
            onChange={handleOnChange}
            type="password"
            placeholder="Confirm password"
            required
          />
          {passwordError && <Alert variant="danger">{passwordError}</Alert>}
          <RegisterButton type="submit">REGISTER</RegisterButton>
        </RegisterForm>
        <LoginOption>Already have an account?</LoginOption>

        <LoginLink to="/login">
          <i className="fa">L O G I N</i>
        </LoginLink>
      </RegisterWrapper>
    </RegisterContainer>
  )
}

export default RegisterScreen
