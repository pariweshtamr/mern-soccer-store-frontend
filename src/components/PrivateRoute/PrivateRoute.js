import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  let location = useLocation()
  const { isLoggedIn } = useSelector((state) => state.user)
  return isLoggedIn === true ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  )
}
export default PrivateRoute
