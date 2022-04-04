import React from 'react'
import Axios from 'axios'
import Stripe from '../../components/Stripe/Stripe'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { currentOrderHandler } from '../../redux/Order/OrderSlice'
import { clearCart } from '../../redux/Cart/CartSlice'
import { Container, Details, Hr, Title } from '../../GlobalStyles'
import {
  DisplayOrdetItems,
  OrderId,
  PaymentBg,
  PaymentItem,
  PaymentItemImage,
  PaymentItemName,
  PaymentItemPrice,
  PaymentItemQty,
} from './PaymentStyles'

const Payment = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
  const { currentOrder: order } = useSelector((state) => state.order)
  console.log(order)
  const orders = useSelector((state) => state.order)
  console.log(orders)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const paymentSuccess = async () => {
    try {
      const { data } = await Axios.post(
        'https://mern-soccer-store.herokuapp.com/api/v1/order/orderstatus',
        {
          isPaid: true,
          orderId: JSON.parse(localStorage.getItem('order'))?._id,
        },
        {
          headers: {
            authorization: window.sessionStorage.getItem('accessJWT'),
          },
        },
      )
      console.log(data)
      dispatch(currentOrderHandler(data))

      navigate(
        `/order/${JSON.parse(localStorage.getItem('order'))?._id}/success`,
        { state: { data } },
      )

      window.scrollTo(0, 0)
    } catch (error) {
      console.log(error.message)
    }

    //RESET CART AFTER PAYMENT
    dispatch(clearCart())
  }
  console.log(orders.currentOrder.cartItems)

  const orderItems = orders.currentOrder.cartItems?.map((item) => {
    return (
      <PaymentItem key={item._id}>
        <PaymentItemImage src={item.image} alt="product img" />

        <PaymentItemName>{item.name}</PaymentItemName>
        <PaymentItemPrice>${item.price}</PaymentItemPrice>

        <PaymentItemQty>
          x&nbsp;
          {item.productQuantity}
        </PaymentItemQty>
      </PaymentItem>
    )
  })

  return (
    <>
      <Hr>
        <hr />
      </Hr>
      <PaymentBg>
        <OrderId>{`Order ID : ${order?._id}`}</OrderId>
        {isLoggedIn ? (
          <>
            <Container>
              <Title>Order Summary</Title>
              <DisplayOrdetItems>
                <Container style={{ width: '93%', marginBottom: '1.5rem' }}>
                  <Title>Order Items</Title>
                  <Details>
                    <div>{orderItems}</div>
                  </Details>
                </Container>
              </DisplayOrdetItems>

              <Details>
                <div style={{ textAlign: 'center' }}>
                  <p>
                    Total Items - <span>{order?.totalQuantity}</span>
                  </p>
                  <p>
                    Total Price - <span>${order?.totalAmount} </span>
                  </p>
                </div>
              </Details>
              <div>
                {JSON.parse(localStorage.getItem('order')).paymentMethod ===
                  'stripe' && order.isPaid === false ? (
                  <Stripe
                    data={JSON.parse(localStorage.getItem('order'))}
                    paymentSuccess={paymentSuccess}
                  />
                ) : (
                  ''
                )}
              </div>
              {JSON.parse(localStorage.getItem('order')).isPaid && (
                <h3>Order - Paid</h3>
              )}
            </Container>
          </>
        ) : (
          <h3 style={{ textAlign: 'center', marginTop: '40px' }}>
            Please Sign In to Place Order!
          </h3>
        )}
      </PaymentBg>
    </>
  )
}

export default Payment
