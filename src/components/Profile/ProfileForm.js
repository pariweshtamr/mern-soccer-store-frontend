import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userInfoUpdate, userPasswordUpdate } from '../../redux/User/UserAction'
import LoadingBox from '../LoadingBox/LoadingBox'
import MessageBox from '../MessageBox/MessageBox'
import {
  ProfileFormContainer,
  FormTitle,
  ProfileFormWrapper,
  ProfileLabel,
  ProfileInput,
  ProfileButton,
  ProfileItemContainer,
} from './ProfileFormStyles'
import { ListGroup } from 'react-bootstrap'

const initialProfileState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
}

export const ProfileForm = () => {
  const dispatch = useDispatch()
  const [userProfile, setUserProfile] = useState(initialProfileState)

  const { userInfo, isLoading, userUpdateResponse } = useSelector(
    (state) => state.user,
  )

  useEffect(() => {
    setUserProfile(userInfo)
  }, [userInfo])

  const changeHandler = (e) => {
    const { name, value } = e.target

    setUserProfile({
      ...userProfile,
      [name]: value,
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const { email, username } = userProfile

    if (userInfo.email !== email || userInfo.username !== username) {
      if (window.confirm('Are you sure you want to update yot profile info?')) {
        const update = { email, username }
        dispatch(userInfoUpdate(update))
      }
      return
    }
    return alert('No information has been changed!')
  }

  return (
    <>
      <ProfileFormContainer>
        <ProfileFormWrapper onSubmit={submitHandler}>
          <FormTitle>My Profile</FormTitle>
          <hr />
          {isLoading && <LoadingBox />}
          {userUpdateResponse?.message && (
            <MessageBox
              variant={
                userUpdateResponse.status === 'success' ? 'success' : 'danger'
              }
            >
              {userUpdateResponse.message}
            </MessageBox>
          )}
          <ProfileItemContainer>
            <ProfileLabel htmlFor="firstName">First Name</ProfileLabel>
            <ProfileInput
              name="firstName"
              type="text"
              placeholder="Enter your First name"
              value={userProfile.firstName}
              disabled
              readOnly
            ></ProfileInput>
          </ProfileItemContainer>

          <ProfileItemContainer>
            <ProfileLabel htmlFor="lastName">Last Name</ProfileLabel>
            <ProfileInput
              name="lastName"
              type="text"
              placeholder="Enter your First name"
              value={userProfile.lastName}
              disabled
              readOnly
            ></ProfileInput>
          </ProfileItemContainer>

          <ProfileItemContainer>
            <ProfileLabel htmlFor="email">
              Email
              {userProfile.isEmailConfirmed ? (
                <i
                  title="cerified email"
                  className="fa-solid fa-circle-check text-success"
                ></i>
              ) : (
                <i
                  title="email not verified"
                  className="fa-solid fa-circle-xmark text-danger"
                ></i>
              )}
            </ProfileLabel>
            <ProfileInput
              name="email"
              type="email"
              disabled
              value={userProfile.email}
            ></ProfileInput>
          </ProfileItemContainer>

          <ProfileItemContainer>
            <ProfileLabel htmlFor="username">Username</ProfileLabel>
            <ProfileInput
              name="username"
              type="text"
              value={userProfile.username}
              onChange={changeHandler}
            ></ProfileInput>
          </ProfileItemContainer>

          <ProfileButton type="submit">UPDATE PROFILE</ProfileButton>
        </ProfileFormWrapper>
      </ProfileFormContainer>
    </>
  )
}

// UPDATE PASSWORD

const initialPassword = {
  currentPassword: '',
  password: '',
  confirmPassword: '',
}
const passErrorInitial = {
  isMatched: false,
  isLengthy: false,
  hasLowerCase: false,
  hasUpperCase: false,
  hasNumber: false,
  hasSpecialChar: false,
}

export const PasswordForm = () => {
  const dispatch = useDispatch()
  const [updatePassword, setUpdatePassword] = useState(initialPassword)
  const [passError, setPassError] = useState(passErrorInitial)

  const { isLoading, userUpdateResponse } = useSelector((state) => state.user)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const { currentPassword, password } = updatePassword
    dispatch(userPasswordUpdate({ currentPassword, password }))
  }

  const changeHandler = (e) => {
    const { name, value } = e.target

    // Validation testing

    let isMatched = false
    if (name === 'password') {
      setPassError({
        ...passError,
        isMatched: updatePassword.confirmPassword === value,
      })
    }

    if (name === 'confirmPassword') {
      isMatched = updatePassword.password === value
      const isLengthy = value.length >= 7
      const hasLowerCase = /[a-z]/.test(value)
      const hasUpperCase = /[A-Z]/.test(value)
      const hasNumber = /[0-9]/.test(value)
      const hasSpecialChar = /[., !, @, #, $, %, ^, &, *, _, (, )]/.test(value)

      setPassError({
        ...passError,
        isMatched,
        isLengthy,
        hasLowerCase,
        hasUpperCase,
        hasNumber,
        hasSpecialChar,
      })
    }

    setUpdatePassword({
      ...updatePassword,
      [name]: value,
    })
  }
  return (
    <>
      <ProfileFormContainer>
        <ProfileFormWrapper onSubmit={handleOnSubmit}>
          <FormTitle>Update Password</FormTitle>
          <hr />
          {isLoading && <LoadingBox />}
          {userUpdateResponse?.message && (
            <MessageBox
              variant={
                userUpdateResponse.status === 'success' ? 'success' : 'danger'
              }
            >
              {userUpdateResponse.message}
            </MessageBox>
          )}
          <ProfileItemContainer>
            <ProfileLabel htmlFor="currentPassword">
              Current Password
            </ProfileLabel>
            <ProfileInput
              name="currentPassword"
              type="password"
              minLength="7"
              placeholder="Enter your current password"
              onChange={changeHandler}
            ></ProfileInput>
          </ProfileItemContainer>

          <ProfileItemContainer>
            <ProfileLabel htmlFor="password">New Password</ProfileLabel>
            <ProfileInput
              name="password"
              type="password"
              minLength="7"
              placeholder="Enter a password"
              onChange={changeHandler}
            ></ProfileInput>
          </ProfileItemContainer>

          <ProfileItemContainer>
            <ProfileLabel htmlFor="confirmPassword">
              Confirm Password
            </ProfileLabel>
            <ProfileInput
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              onChange={changeHandler}
            ></ProfileInput>
          </ProfileItemContainer>

          <ListGroup>
            <h5>Password Rules</h5>
            <ListGroup.Item
              variant={passError.isMatched ? 'success' : 'danger'}
            >
              Password match
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.isLengthy ? 'success' : 'danger'}
            >
              must be atleast 7 characters
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasNumber ? 'success' : 'danger'}
            >
              must include number
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasUpperCase ? 'success' : 'danger'}
            >
              must include uppercase
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasLowerCase ? 'success' : 'danger'}
            >
              must include lowercase
            </ListGroup.Item>
            <ListGroup.Item
              variant={passError.hasSpecialChar ? 'success' : 'danger'}
            >
              must include one of the following special characters i.e. . ! @ #
              $ % ^ & * _ ( )
            </ListGroup.Item>
          </ListGroup>

          <ProfileButton
            type="submit"
            disabled={Object.values(passError).includes(false)}
          >
            UPDATE PASSWORD
          </ProfileButton>
        </ProfileFormWrapper>
      </ProfileFormContainer>
    </>
  )
}
