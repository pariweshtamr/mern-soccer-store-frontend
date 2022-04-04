import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 60%;
  background: #fcf5f5;
  border: 1px solid #fcf5f5;
  padding: 10px 20px;
  margin: 1.5rem 1.5rem 0 1.5rem;
  border-radius: 5px;
  box-shadow: 2px 5px 8px grey;

  display: flex;
  flex-direction: column;
  height: max-content;

  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: 1rem auto;
    padding: 10px;
  }

  @media screen and (max-width: 1024px) {
    min-width: 90%;
  }
`

export const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  text-decoration: underline;

  @media screen and (max-width: 600px) {
    margin: 0 auto 20px auto;
    font-size: 1.1rem;
  }
`

export const Details = styled.div`
  p {
    font-weight: 400;
  }
  span {
    font-weight: 500;
  }

  > div {
    font-weight: 600;
  }

  @media screen and (max-width: 600px) {
  }
`

export const Button = styled(Link)`
  width: 100%;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #ffc107e3;
  color: black;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;

  &:hover {
    color: black;
  }
`

export const Hr = styled.div`
  width: 95vw;
  height: 1px;
  color: teal;
  margin: 0 auto;
`
