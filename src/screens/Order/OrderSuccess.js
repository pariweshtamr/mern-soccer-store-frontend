import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button, Hr } from '../../GlobalStyles'
import { SuccessContainer, SuccessIcon } from './OrderStyles'

const OrderSuccess = () => {
  const location = useLocation()
  const { order } = location.state.data

  return (
    <>
      <Hr>
        <hr />
      </Hr>
      <SuccessContainer>
        <SuccessIcon>
          <i className="fas fa-check-circle fa-8x"></i>
        </SuccessIcon>
        <h4>
          {order._id
            ? `Order has been Successfully placed! Your order number is ${order._id}`
            : `Successful. Your order is being prepared...`}{' '}
          &nbsp;
          <i className="fas fa-smile" style={{ color: 'orange' }}></i>
        </h4>
        <h5 style={{ textAlign: 'center' }}>
          You can see your order{' '}
          <i className="fas fa-shopping-bag" style={{ color: 'teal' }}></i> from
          the Order history section in <Link to="/profile"> My Account!</Link>
        </h5>

        <Button to="/" style={{ width: '10rem' }}>
          Home
        </Button>
      </SuccessContainer>
    </>
  )
}

export default OrderSuccess
