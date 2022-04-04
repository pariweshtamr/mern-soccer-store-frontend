import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ResetPassFormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem;
  justify-content: flex-end;
  background-size: cover;

  @media screen and (max-width: 600px) {
    height: 100%;
  }
`
export const FormTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: teal;
`
export const ResetPassFormWrapper = styled.form`
  padding: 20px;
  width: 30rem;
  background-color: #f8f8f8;
  opacity: 0.9;
  border-radius: 5px;

  @media screen and (max-width: 600px) {
    width: 85%;
    margin: 20px 0;
  }
`
export const ResetPassItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ResetPassLabel = styled.label`
  margin: 0.5rem 0;
  text-align: right;
  font-weight: 600;
`
export const ResetPassInput = styled.input`
  flex: 1;
  min-width: 100%;
  margin-bottom: 1rem;
  padding: 10px;
`
export const ResetPassButton = styled.button`
  width: 100%;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  padding: 15px;
  background-color: #ffc107e3;
  color: black;
  cursor: pointer;
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
export const Login = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ExternalLink = styled.div`
  display: flex;
  flex-direction: column;
`
