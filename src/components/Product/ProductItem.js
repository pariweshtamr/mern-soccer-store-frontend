import React from 'react'
import Rating from '../Rating/Rating'
import {
  ProductItemContainer,
  ProductItemImage,
  ProductItemInfo,
  ProductItemPrice,
  ProductLink,
} from './ProductStyles'

const ProductItem = ({ product }) => {
  return (
    <ProductItemContainer>
      <ProductLink to={`/product/${product._id}`}>
        <ProductItemImage src={product.image} alt={product.name} />
        <ProductItemInfo>
          <h2>{product.name}</h2>
          <Rating
            rating={product.rating}
            numReviews={product.numReviews}
          ></Rating>
          <ProductItemPrice>${product.price}</ProductItemPrice>
        </ProductItemInfo>
      </ProductLink>
    </ProductItemContainer>
  )
}

export default ProductItem
