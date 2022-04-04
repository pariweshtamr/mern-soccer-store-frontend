import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const NavContainer = styled.div`
  height: 60px;
  background: #fff;
  @media screen and (max-width: 600px) {
    height: 50px;
  }
`
export const NavWrapper = styled.div`
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    padding: 10px 15px;
  }
`
export const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex: 1;
    justify-content: flex-start;
  }
`

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: teal;
  &:hover {
    color: #000;
  }
`

export const Logo = styled.h1`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`
export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
  }
`
export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex: 3;
    justify-content: center;
    font-size: 14px;
  }
`
export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  @media screen and (max-width: 600px) {
    font-size: 12px;
    margin-left: 10px;
  }
`
export const UserGreet = styled.div`
  margin-right: 25px;
`
export const MenuLink = styled(Link)`
  text-decoration: none;
  color: teal;

  &:hover {
    color: #000;
  }

  @media screen and (max-width: 600px) {
    font-size: 10px;
  }
`
export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:hover {
    color: teal;
  }
`

export const Links = styled.div`
  display: flex;
`
