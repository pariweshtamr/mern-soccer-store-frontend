import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1024px) {
    padding: 0;
    flex-direction: column;
    margin-top: 10px;
  }
`

export const CategoriesContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const CategoryItemContainer = styled.div`
  flex: 1;
  margin: 2px;
  height: 60vh;
  justify-content: space-between;

  position: relative;
`
export const CategoryItemImage = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
`
export const CategoryItemInfo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 1rem;
`
export const CategoryItemTitle = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`
export const CategoryItemButton = styled.button`
  border: none;
  padding: 10px;
  background-color: #fff;
  color: #000;
  cursor: pointer;
  font-weight: 600;
`
