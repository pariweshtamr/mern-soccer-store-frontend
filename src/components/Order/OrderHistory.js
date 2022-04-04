import React, { useEffect, useState } from 'react'
import { Card, Accordion } from 'react-bootstrap'

import Axios from 'axios'
import { Details, Hr, Title } from '../../GlobalStyles'
import {
  HistoryContainer,
  HistoryTitle,
  NoOrderContainer,
  OrderList,
} from './OrderHistoryStyles.js'
import {
  OrderItem,
  OrderItemImage,
  OrderItemName,
  OrderItemPrice,
  OrderItemQty,
} from '../../screens/Order/OrderStyles'

const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  const [noOrder, setNoOrder] = useState(false)

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const { data } = await Axios.get(
          'https://mern-soccer-store.herokuapp.com/order/paid',
          {
            headers: {
              authorization: window.sessionStorage.getItem('accessJWT'),
            },
          },
        )
        console.log(data)
        if ((data.message = 'No orders placed')) {
          setNoOrder(true)
        }
        setOrders(data.paidOrders)
      } catch (error) {
        console.log(error)
      }
    }
    fetchOrder()
  }, [])

  const paidOrders = orders.map((order, i) => {
    return (
      <div key={order._id}>
        <HistoryContainer>
          <strong>{i + 1}.&nbsp;</strong>
          <Title style={{ textAlign: 'center' }}>
            {`Order ID: ${order._id}`}
          </Title>
          <Details>
            <p>
              <span>Total Price - </span>${order.totalAmount}
            </p>
            <p>
              <span>Total Items - </span>
              {order.totalQuantity}
            </p>
            <p>
              <span>Order Status - </span>
              {'Paid'}
            </p>
            <p>
              <span>Payment Method - </span>
              {order.paymentMethod.toUpperCase(0)}
            </p>
            <p>
              <span>Order Date - </span>
              {new Date(order.createdAt).toDateString()}
            </p>
          </Details>
          <Accordion flush>
            <Card>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Order Items</Accordion.Header>
                <Accordion.Body>
                  {order.cartItems.map((item, i) => {
                    return (
                      <OrderItem key={i}>
                        <OrderItemImage src={item.image} alt="product img" />
                        <OrderItemName>{item.name}</OrderItemName>
                        <OrderItemPrice>${item.price}</OrderItemPrice>
                        <OrderItemQty>
                          x&nbsp;
                          {item.productQuantity}
                        </OrderItemQty>
                      </OrderItem>
                    )
                  })}
                </Accordion.Body>
              </Accordion.Item>
            </Card>
          </Accordion>
        </HistoryContainer>
      </div>
    )
  })
  return (
    <>
      <Hr>
        <hr />
      </Hr>
      <HistoryTitle>Your Orders</HistoryTitle>
      {orders.length === 0 ? (
        <NoOrderContainer>
          {noOrder ? <h2>No Orders Found!</h2> : <h2>Loading....</h2>}
        </NoOrderContainer>
      ) : (
        <>
          <OrderList>{paidOrders}</OrderList>
        </>
      )}
    </>
  )
}

export default OrderHistory
