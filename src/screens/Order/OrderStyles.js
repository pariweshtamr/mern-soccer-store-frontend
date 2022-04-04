import styled from 'styled-components'

export const OrderDetails = styled.div`
  display: flex;
  width: 100%;
  background: #fff;
  margin-bottom: 2rem;

  @media screen and (max-width: 600px) {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1024px) {
    height: 67vh;
  }
`

export const Left = styled.div`
  min-width: 40%;
  width: 20%;
  @media screen and (max-width: 600px) {
    min-width: 100%;
  }
`
export const OrderItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  text-decoration: none;
`
export const DisplayOrderItems = styled.div`
  @media screen and (max-width: 600px) {
    display: none;
  }
`
export const OrderItemImage = styled.img`
  width: 10%;
`

export const OrderItemDetails = styled.div`
  display: flex;
`
export const OrderItemName = styled.div`
  text-decoration: none;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`
export const OrderItemPrice = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`
export const OrderItemQty = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
`

export const OrderButton = styled.button`
  width: 100%;
  font-weight: 500;
  text-transform: uppercase;
  margin: 30px 0 5px 0;
  border: none;
  border-radius: 5px;
  padding: 10px;
  background-color: #ffc107e3;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`

export const PaymentMethod = styled.div`
  margin-top: 1rem;
`
export const MethodStripe = styled.div`
  display: flex;
  align-items: center;
`
export const MethodPaypal = styled.div`
  display: flex;
  align-items: center;
`
export const PaymentInput = styled.input`
  margin-right: 0.5rem;
`
export const PaymentLabel = styled.label`
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
`

export const SuccessIcon = styled.div`
  color: green;
  text-align: center;
  margin-bottom: 20px;
`

export const SuccessContainer = styled.div`
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h4 {
    text-align: center;
  }
`
