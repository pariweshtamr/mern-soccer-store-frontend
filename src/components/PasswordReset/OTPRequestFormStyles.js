import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PRFContainer = styled.div`
  width: 100%;
  height: 100vh;

  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    height: 60vh;
  }
`
export const Login = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ExternalLink = styled.div`
  display: flex;
  flex-direction: column;
`
export const PRFWrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #f0f0f0;
  opacity: 0.85;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 85%;
  }
`
export const PRFTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  display: flex;
  justify-content: center;
`
export const PRForm = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    align-items: center;
  }
`
export const PRFInput = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
  width: 100%;
`
export const PRFButton = styled.button`
  width: 40%;
  margin: 20px 0;
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

export const LoginLink = styled(Link)`
  margin: 5px 0;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  color: teal;

  &:hover {
    color: #000;
  }
`
