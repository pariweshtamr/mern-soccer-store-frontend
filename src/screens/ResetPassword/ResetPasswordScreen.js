import React from 'react'
import { useSelector } from 'react-redux'
import OTPRequestForm from '../../components/PasswordReset/OTPRequestForm'
import ResetPasswordForm from '../../components/PasswordReset/ResetPasswordForm'
import { Hr } from './ResetPasswordScreenStyles'

const ResetPasswordScreen = () => {
  const { showResetPassForm } = useSelector((state) => state.user)
  return (
    <>
      <Hr>
        <hr />
      </Hr>
      {showResetPassForm ? <ResetPasswordForm /> : <OTPRequestForm />}
    </>
  )
}

export default ResetPasswordScreen
