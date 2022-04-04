import styled from 'styled-components'

export const PaymentItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
`
export const PaymentItemImage = styled.img`
  width: 10%;
`

export const PaymentItemDetails = styled.div`
  display: flex;
`
export const DisplayOrdetItems = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
`
export const OrderId = styled.h2`
  padding: 2rem 0 0 2rem;
  text-decoration: underline;
  color: teal;

  @media screen and (max-width: 600px) {
    font-size: 19px;
  }
`
export const PaymentItemName = styled.div``
export const PaymentItemPrice = styled.div``
export const PaymentItemQty = styled.div``
export const PaymentBg = styled.div`
  background: linear-gradient(
    rgba(255, 255, 255, 0.9),
    rgba(255, 255, 255, 0.6)
  );
  background-size: cover;
  padding-bottom: 2rem;
`
