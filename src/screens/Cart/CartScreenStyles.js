import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CartContainer = styled.div``
export const ShopLink = styled(Link)`
  text-decoration: none;
  color: teal;
`
export const ProductLink = styled(Link)`
  text-decoration: none;
  color: teal;
`
export const CartWrapper = styled.div`
  padding: 20px;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
  @media screen and (max-width: 1024px) {
    min-height: 67vh;
  }
`
export const CartTitle = styled.h1`
  font-weight: 300;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: teal;
`
export const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 0px;

  @media screen and (max-width: 600px) {
    padding: 5px;
    margin: 20px 0;
    justify-content: center;
  }
`
export const CartTopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    padding: 5px;
    font-size: 13px;
  }
`
export const CartTopTexts = styled.div`
  display: flex;
`
export const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 35px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`
export const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`
export const CartProductInfo = styled.div`
  flex: 3;
  margin-right: 1rem;

  @media screen and (max-width: 600px) {
    margin-bottom: 40px;
    margin-right: 0;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`
export const CartProduct = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const CartProductDetails = styled.div`
  display: flex;
  flex: 2;
`
export const CartProductImage = styled.img`
  width: 200px;
  height: 200px;

  @media screen and (max-width: 600px) {
    width: 120px;
    height: 120px;
  }
`
export const CartProductDescription = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CartProductName = styled.span`
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`

export const CartPriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const CartProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
`
export const CartProductQty = styled.span`
  font-size: 24px;
  margin: 0px 20px;

  @media screen and (max-width: 600px) {
    margin: 0px 15px;
    font-size: 16px;
  }
`

export const CartProductInfoTitle = styled.div`
  font-weight: bolder;
  margin-left: 10px;
`

export const CartProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
`
export const CartActionButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`
export const RemoveButton = styled.button`
  max-height: 3rem;
  padding: 10px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background-color: #f8f4f4;
  }
  @media screen and (max-width: 600px) {
    padding: 5px;
    margin-left: 20px;
  }
`
export const Hr2 = styled.hr`
  background-color: #1a1a1a;
  border: none;
  height: 1px;
  width: 90%;
`
export const CartSummary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  height: max-content;

  @media screen and (max-width: 1024px) {
    margin-top: 3rem;
  }
`
export const CartSummaryTitle = styled.h2`
  font-weight: 300;
  display: flex;
  justify-content: center;
`
export const CartSummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '600'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`
export const CartSummaryItemText = styled.span`
  font-weight: ${(props) => props.type === 'total' && '500'};
`
export const CartSummaryItemPrice = styled.span``

export const CartSummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
`
export const ClearCartButton = styled.button`
  width: 200px;
  padding: 10px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    padding: 10px;
    font-size: 13px;
    width: 150px;
  }
`
