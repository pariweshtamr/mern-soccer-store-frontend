import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    height: 100%;
  }
`
export const CheckoutWrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #f0f0f0;
  opacity: 0.9;
  border-radius: 5px;
  margin: 0 auto;

  @media screen and (max-width: 600px) {
    min-width: 90%;
    margin: 20px 0;
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
    margin: 20px 0;
  }
`
export const CheckoutTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: teal;
`
export const ShippingForm = styled.form`
  display: flex;
  flex-direction: column;
`
export const ShippingRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    gap: 20px;
  }
`
export const ShippingDetails = styled.label`
  display: flex;
  flex-direction: column;
`
export const ShippingLabel = styled.label``

export const ShippingInput = styled.input`
  min-width: 40%;
  width: 100%;
  margin: 10px 10px 20px 0;
  padding: 10px;
  height: 3.2rem;
`

export const OrderButton = styled.button`
  width: 100%;
  margin-top: 20px;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #ffc107e3;
  color: black;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`
