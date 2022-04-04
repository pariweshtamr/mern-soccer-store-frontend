import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from '@material-ui/icons'
import React from 'react'
import {
  Description,
  FooterCenter,
  FooterContactItem,
  FooterContainer,
  FooterLeft,
  FooterList,
  FooterListItem,
  FooterRight,
  FooterTitle,
  Logo,
  Payment,
  SocialContainer,
  SocialIcon,
} from './FooterStyles'
import Pay from '../../assets/payment.png'

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterLeft>
          <Logo>Soccer Store.</Logo>
          <Description>
            Visit our store for the latest and trending soocer cleats from most
            popular brands available.
          </Description>
          <SocialContainer>
            <SocialIcon color="#3b5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="#e4405f">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="#55acee">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </FooterLeft>
        <FooterCenter>
          <FooterTitle>Useful Links</FooterTitle>
          <FooterList>
            <FooterListItem to="/">Home</FooterListItem>
            <FooterListItem to="/cart">Cart</FooterListItem>
            <FooterListItem to="/profile">My account</FooterListItem>
          </FooterList>
        </FooterCenter>
        <FooterRight>
          <FooterTitle>Contact</FooterTitle>
          <FooterContactItem>
            <Room style={{ marginRight: '10px' }} /> Sydney 2000, Australia
          </FooterContactItem>
          <FooterContactItem>
            <Phone style={{ marginRight: '10px' }} /> +61 499 999 999
          </FooterContactItem>
          <FooterContactItem>
            <MailOutline style={{ marginRight: '10px' }} /> contact@email.com
          </FooterContactItem>
          <Payment src={Pay} />
        </FooterRight>
      </FooterContainer>
    </>
  )
}

export default Footer
