import styled from 'styled-components'

export const AnnouncementContainer = styled.div`
  height: 25px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`
