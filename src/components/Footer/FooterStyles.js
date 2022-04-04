import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  background: #fcf5f5;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`
export const FooterLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 30px;

  @media screen and (max-width: 600px) {
    text-align: center;
  }
`

export const Logo = styled.h1`
  font-weight: bold;
`
export const Description = styled.p`
  margin: 20px 0;
`
export const SocialContainer = styled.div`
  display: flex;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
`
export const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #cec7c7;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
export const FooterCenter = styled.div`
  flex: 1;
  padding: 30px;

  @media screen and (max-width: 600px) {
    display: none;
  }
`
export const FooterTitle = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
  text-align: center;
`
export const FooterList = styled.ul`
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
export const FooterListItem = styled(Link)`
  cursor: pointer;
  margin-bottom: 10px;
  text-decoration: none;
  color: #000;

  &:hover {
    color: teal;
  }
`

export const FooterRight = styled.div`
  flex: 1;
  padding: 30px;
  text-align: center;
`
export const FooterContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Payment = styled.img`
  width: 50%;
`
