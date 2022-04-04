import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../LoadingBox/LoadingBox'
import MessageBox from '../MessageBox/MessageBox'
import {
  ExternalLink,
  Login,
  LoginLink,
  PRFButton,
  PRFContainer,
  PRFInput,
  PRForm,
  PRFTitle,
  PRFWrapper,
} from './OTPRequestFormStyles'
import loginWallpaper from '../../assets/loginWallpaper.jpg'
import { requestPasswordResetOtp } from '../../redux/User/UserAction'

const OTPRequestForm = () => {
  const dispatch = useDispatch()
  const { isLoading, resetPasswordRequestResponse } = useSelector(
    (state) => state.user,
  )

  const [email, setEmail] = useState('')

  const handleOnChnage = (e) => {
    const { value } = e.target
    setEmail(value)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (!email) {
      return alert('email required')
    }
    dispatch(requestPasswordResetOtp(email))
  }
  return (
    <>
      <PRFContainer
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)), url(${loginWallpaper})`,
        }}
      >
        <PRFWrapper>
          <PRFTitle>RESET PASSWORD</PRFTitle>
          <hr />
          {isLoading && <LoadingBox />}
          {resetPasswordRequestResponse?.message && (
            <MessageBox
              variant={
                resetPasswordRequestResponse.status === 'success'
                  ? 'success'
                  : 'danger'
              }
            >
              {resetPasswordRequestResponse.message}
            </MessageBox>
          )}

          <PRForm onSubmit={handleOnSubmit}>
            <PRFInput
              name="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={handleOnChnage}
            />

            <PRFButton type="submit">Request OTP</PRFButton>
            <Login>
              <ExternalLink>
                <LoginLink to="/login">Back to login</LoginLink>
              </ExternalLink>
            </Login>
          </PRForm>
        </PRFWrapper>
      </PRFContainer>
    </>
  )
}

export default OTPRequestForm
