import styled from 'styled-components'

export const ProductListScreenContainer = styled.div``
export const Title = styled.h1`
  margin: 20px;
  padding-left: 20px;
  font-weight: bolder;

  @media screen and (max-width: 600px) {
    margin: 10px 20px 10px 20px;
  }
`

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Filter = styled.div`
  padding: 0 20px;
  margin: 20px;

  @media screen and (max-width: 600px) {
    margin: 10px 20px 10px 20px;
  }
`
export const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

  @media screen and (max-width: 600px) {
    font-size: 16px;
    margin-right: 5px;
  }
`
export const ProductListSelect = styled.select`
  padding: 10px;
  margin-right: 20px;
  border: 1px teal solid;
  background-color: #fff;

  @media screen and (max-width: 600px) {
    margin: 0 5px 0 0;
    width: 93px;
  }
`
export const Option = styled.option`
  @media screen and (max-width: 600px) {
  }
`
