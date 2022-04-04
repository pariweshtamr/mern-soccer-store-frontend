import styled from 'styled-components'

export const HistoryContainer = styled.div`
  background: #fcf5f5;
  border: 1px grey;
  width: 35rem;
  padding: 20px 10px;
  margin: 0 1rem;
  border-radius: 3px;
  box-shadow: 2px 5px 8px grey;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    width: 22.5rem;
  }
`

export const HistoryTitle = styled.div`
  text-align: center;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: underline;
`

export const OrderList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-content: center;
  gap: 2rem;
  padding: 2rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    justify-items: center;
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem 0;
    justify-items: center;
  }
`

export const NoOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 37vh;
`
