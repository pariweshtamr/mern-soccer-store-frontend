import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  CategoryItemButton,
  CategoryItemContainer,
  CategoryItemImage,
  CategoryItemInfo,
  CategoryItemTitle,
} from './CategoryStyles'

const CategoryItem = ({ category }) => {
  return (
    <Container>
      <CategoryItemContainer>
        <Link to={`products/${category.title}`}>
          <CategoryItemImage src={category.image} />
          <CategoryItemInfo>
            <CategoryItemTitle>{category.title}</CategoryItemTitle>
            <CategoryItemButton>SHOP NOW</CategoryItemButton>
          </CategoryItemInfo>
        </Link>
      </CategoryItemContainer>
    </Container>
  )
}

export default CategoryItem
