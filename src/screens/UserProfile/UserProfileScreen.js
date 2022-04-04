import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PasswordForm, ProfileForm } from '../../components/Profile/ProfileForm'
import { fetchUserDetails } from '../../redux/User/UserAction'
import {
  Hr,
  RightSide,
  Profile,
  GreetUser,
  UserName,
  LeftSide,
  History,
} from './UserProfileScreenStyles'
import profileWallpaper from '../../assets/profileWallpaper.jpg'
import { Button } from '../../GlobalStyles'

const UserProfileScreen = () => {
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state.user)

  useEffect(() => {
    !userInfo && dispatch(fetchUserDetails())
  }, [dispatch, userInfo])

  return (
    <>
      <Hr />
      <Profile
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), url(${profileWallpaper})`,
        }}
      >
        <LeftSide>
          <ProfileForm />
          <History>
            <Button
              style={{ width: '80%', textAlign: 'center' }}
              to="orders/history"
            >
              ORDER HISTORY
            </Button>
          </History>
        </LeftSide>
        <RightSide>
          <GreetUser>
            Welcome, <UserName>{userInfo.firstName}!</UserName>
          </GreetUser>
          <PasswordForm />
        </RightSide>
      </Profile>
    </>
  )
}

export default UserProfileScreen
