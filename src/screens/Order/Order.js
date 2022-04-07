import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { currentOrderHandler } from '../../redux/Order/OrderSlice'
import {
  OrderItemImage,
  OrderItem,
  OrderItemName,
  OrderItemPrice,
  OrderItemQty,
  OrderButton,
  PaymentMethod,
  PaymentInput,
  PaymentLabel,
  MethodStripe,
  MethodPaypal,
  OrderDetails,
  DisplayOrderItems,
  Left,
} from './OrderStyles'
import LoadingBox from '../../components/LoadingBox/LoadingBox'
import { Container, Details, Hr, Title } from '../../GlobalStyles'

const Order = () => {
  const { isLoggedIn } = useSelector((state) => state.user)
  const orderState = useSelector((state) => state.order)
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [payment, setPayment] = useState('')

  const { address, city, state, postal_code, country } = JSON.parse(
    localStorage.getItem('shippingAddress'),
  )

  const placeOrderHandler = () => {
    setLoading(true)

    const sendCartData = async () => {
      try {
        const { data } = await Axios.post(
          'https://mern-soccer-store.herokuapp.com/api/v1/order',
          {
            ...cart,
            shippingAddress: {
              ...JSON.parse(localStorage.getItem('shippingAddress')),
            },
            paymentMethod: payment,
          },
          {
            headers: {
              authorization: window.sessionStorage.getItem('accessJWT'),
            },
          },
        )

        console.log(data)
        dispatch(currentOrderHandler(data))
        setLoading(false)
        navigate(`/order/${JSON.parse(localStorage.getItem('order'))._id}`)
      } catch (error) {
        console.log(error.message)
      }
    }

    if (payment) {
      sendCartData()
    }
  }

  console.log(JSON.parse(localStorage.getItem(orderState)))

  const orderItems = JSON.parse(
    localStorage.getItem('cartState'),
  )?.cartItems.map((item) => {
    return (
      <OrderItem key={item._id}>
        <OrderItemImage src={item.image} alt="product img" />

        <OrderItemName>{item.name}</OrderItemName>
        <OrderItemPrice>${item.price}</OrderItemPrice>

        <OrderItemQty>
          &nbsp;x&nbsp;
          {item.productQuantity}
        </OrderItemQty>
      </OrderItem>
    )
  })

  return loading ? (
    <LoadingBox />
  ) : (
    <>
      {isLoggedIn ? (
        <>
          {orderState ? (
            <>
              <Hr>
                <hr />
              </Hr>
              <OrderDetails>
                <Left>
                  <Container>
                    <Title>Order Summary</Title>

                    <Details>
                      <div>
                        Total Items :{' '}
                        <span>
                          {
                            JSON.parse(localStorage.getItem('cartState'))
                              .totalQuantity
                          }
                        </span>
                      </div>
                      <div>
                        Total Price - $
                        <span>
                          {
                            JSON.parse(localStorage.getItem('cartState'))
                              .totalAmount
                          }
                        </span>
                      </div>
                    </Details>

                    <PaymentMethod>
                      <MethodStripe>
                        <PaymentInput
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                          value="stripe"
                          onChange={(e) => setPayment(e.target.value)}
                        />

                        <PaymentLabel htmlFor="flexRadioDefault1">
                          Stripe{' '}
                          <i
                            className="fab fa-cc-stripe"
                            style={{
                              color: '#5433FF',
                            }}
                          ></i>
                        </PaymentLabel>
                      </MethodStripe>
                      <PaymentInput
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        disabled
                      />

                      <PaymentLabel>
                        Paypal{' '}
                        <i
                          className="fab fa-paypal"
                          style={{
                            color: '#00457C',
                          }}
                        ></i>{' '}
                        (Coming Soon...)
                      </PaymentLabel>
                      <MethodPaypal></MethodPaypal>
                      <OrderButton
                        type="submit"
                        onClick={placeOrderHandler}
                        disabled={!payment}
                      >
                        Select Payment Method
                      </OrderButton>
                    </PaymentMethod>
                  </Container>

                  <Container>
                    <Title>Shipping Details</Title>

                    <Details>
                      <h6>
                        Address - <span>{address}</span>
                      </h6>
                      <h6>
                        Country - <span>{country}</span>
                      </h6>
                      <h6>
                        State - <span>{state}</span>
                      </h6>
                      <h6>
                        City - <span>{city}</span>
                      </h6>
                      <h6>
                        Postal Code - <span>{postal_code}</span>
                      </h6>
                    </Details>
                  </Container>
                </Left>

                <DisplayOrderItems style={{ width: '100%' }}>
                  <Container>
                    <Title>Order Items</Title>
                    <Details>
                      <div>{orderItems}</div>
                    </Details>
                  </Container>
                </DisplayOrderItems>
              </OrderDetails>
            </>
          ) : (
            <LoadingBox />
          )}
        </>
      ) : (
        <h3 style={{ textAlign: 'center', marginTop: '40px' }}>
          Please Sign In to Place Order!
        </h3>
      )}
    </>
  )
}

export default Order
