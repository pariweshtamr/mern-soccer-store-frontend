import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ProductsContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const ProductsListContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
  /* @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    align-content: center;
    margin-bottom: 2rem;
  } */
`
export const ProductItemContainer = styled.div`
  padding: 0 20px;
  margin: 5px;
  max-width: max-content;
  height: 40rem;
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 600px) {
    padding: 0;
    margin: 10px 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 0 15px;
    margin: 0;
  }
`
export const ProductItemImage = styled.img`
  max-width: 22rem;
  height: 100%;
  border-radius: 10px;

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`
export const ProductItemInfo = styled.div`
  margin-top: 1rem;
  > h2 {
    font-size: 1rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 10px;
  }
`
export const ProductItemPrice = styled.div`
  font-size: 2rem;
`
export const ProductLink = styled(Link)`
  text-decoration: none;
  color: teal;

  &:hover {
    color: #000;
  }
`
