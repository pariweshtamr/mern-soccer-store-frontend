import React from 'react'
import {
  BannerContainer,
  BannerWrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Description,
  Button,
} from './BannerStyles'
import BannerImg from '../../assets/banner.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <>
      <BannerContainer>
        <BannerWrapper>
          <ImgContainer>
            <Image src={BannerImg}></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>GEAR UP!</Title>
            <Description>
              HIGH-TECH SOCCER FOOTWEAR WITH MANY GREAT DESIGNS AND COLOURS TO
              CHOOSE FROM.
            </Description>
            <Link to="/products?">
              <Button>SHOP NOW</Button>
            </Link>
          </InfoContainer>
        </BannerWrapper>
      </BannerContainer>
    </>
  )
}

export default Banner
