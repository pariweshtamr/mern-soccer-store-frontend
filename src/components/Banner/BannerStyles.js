import styled from 'styled-components'

export const BannerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  background: #fcf5f5;
`

export const BannerWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    height: 80%;
  }
  @media screen and (max-width: 1024px) {
    height: 80%;
  }
`

export const Image = styled.img`
  height: 75%;

  @media screen and (max-width: 600px) {
    height: 40%;
    margin-top: -15rem;
  }
`
export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;

  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 5px 0;
    margin-top: -15rem;
  }
`
export const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
`
export const Description = styled.p`
  margin: 20px 0;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 3px;
`
export const Button = styled.button`
  padding: 10px;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
`
