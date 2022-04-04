import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.1)
  );
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media screen and (max-width: 600px) {
    height: 100%;
    justify-content: center;
    padding: 1rem 0;
  }
`
export const RegisterWrapper = styled.div`
  padding: 20px;
  width: 40%;
  background-color: #f0f0f0;
  opacity: 0.9;
  border-radius: 5px;
  margin-left: 5rem;

  @media screen and (max-width: 600px) {
    width: 85%;
    margin: 20px 0;
  }
`
export const RegisterTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  color: teal;
`
export const RegisterForm = styled.form`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const RegisterInput = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`
export const RegisterButton = styled.button`
  width: 100%;
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

export const LoginOption = styled.p`
  text-align: left;
  color: teal;
  text-decoration: underline;
  @media screen and (max-width: 600px) {
    text-align: center;
  }
`
export const LoginLink = styled(Link)`
  cursor: pointer;
  font-size: 2rem;
  color: teal;
  display: flex;
  text-decoration: none;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    justify-content: center;
  }
`
