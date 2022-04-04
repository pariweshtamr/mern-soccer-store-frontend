import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Announcement from '../../components/Announcement/Announcement'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Category/Categories'
import { Hr } from '../../GlobalStyles'

const HomeScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state) => state.user)

  useEffect(() => {
    isLoggedIn && navigate('/')
  }, [isLoggedIn, navigate, dispatch])
  return (
    <>
      <Hr>
        <hr />
      </Hr>
      <Announcement />
      <Banner />
      <Categories />
    </>
  )
}

export default HomeScreen
