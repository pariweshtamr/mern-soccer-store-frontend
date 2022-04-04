import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { userEmailVerification } from '../../redux/User/UserAction'
import MessageBox from '../../components/MessageBox/MessageBox'
import LoadingBox from '../../components/LoadingBox/LoadingBox'

const EmailVerification = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const pin = params.get('pin')
  const email = params.get('email')

  const { isLoading, userRegisterResponse } = useSelector((state) => state.user)

  useEffect(() => {
    //send pin and email to api server
    dispatch(userEmailVerification({ pin, email }))
  }, [dispatch, email, pin])

  return (
    <div className="m-auto py-5" style={{ width: '450px' }}>
      {isLoading && <LoadingBox variant="primary" />}
      {userRegisterResponse.message && (
        <MessageBox
          variant={
            userRegisterResponse.status === 'success' ? 'success' : 'danger'
          }
        >
          {userRegisterResponse.message}
        </MessageBox>
      )}
      {userRegisterResponse?.message && <Link to="/login">Login Now</Link>}
    </div>
  )
}

export default EmailVerification
