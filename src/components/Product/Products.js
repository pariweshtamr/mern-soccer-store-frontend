import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingBox from '../LoadingBox/LoadingBox'
import MessageBox from '../MessageBox/MessageBox'
import Axios from 'axios'
import ProductItem from './ProductItem'
import { ProductsContainer, ProductsListContainer } from './ProductStyles'

const Products = ({ cat, filters }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const { isLoading, productResponse } = useSelector(
    (state) => state.product || [],
  )

  useEffect(() => {
    const getProducts = async () => {
      try {
        const result = await Axios.get(
          cat
            ? `https://mern-soccer-store.herokuapp.com/api/v1/products?category=${cat}`
            : 'https://mern-soccer-store.herokuapp.com/api/v1/products',
        )
        setProducts(result.data)
      } catch (error) {}
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((product) =>
          Object.entries(filters).every(([key, value]) =>
            product[key].includes(value),
          ),
        ),
      )
  }, [products, cat, filters])

  return (
    <ProductsContainer>
      {isLoading ? (
        <LoadingBox />
      ) : productResponse.message ? (
        <MessageBox variant="danger">{productResponse.message}</MessageBox>
      ) : (
        <ProductsListContainer>
          {cat
            ? filteredProducts.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))
            : products.map((product) => (
                <ProductItem key={product._id} product={product} />
              ))}
        </ProductsListContainer>
      )}
    </ProductsContainer>
  )
}

export default Products
