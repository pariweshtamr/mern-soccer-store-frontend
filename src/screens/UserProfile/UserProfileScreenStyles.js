import styled from 'styled-components'

export const Hr = styled.hr`
  width: 95vw;
  height: 1px;
  color: teal;
  margin: 0 auto;
`

export const Profile = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-size: cover;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }

  @media screen and (max-width: 1024px) {
    justify-content: center;
    flex-direction: column-reverse;
  }
`
export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

export const GreetUser = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
  min-width: 60%;
  font-size: 4rem;
  font-weight: 700;
  color: teal;
  padding: 0 2rem;
  opacity: 0.9;

  @media screen and (max-width: 600px) {
    font-size: 3rem;
  }

  @media screen and (max-width: 1024px) {
    margin: 2rem 0 0 0;
  }
`

export const UserName = styled.span`
  color: #f8f8f8;
  font-size: 3.5rem;

  @media screen and (max-width: 600px) {
    font-size: 2.5rem;
  }
`
export const History = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
