import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import LoadingBox from '../../components/LoadingBox/LoadingBox'
import MessageBox from '../../components/MessageBox/MessageBox'
import {
  AddContainer,
  LinkContainer,
  BackLink,
  Button,
  Image,
  ImgContainer,
  InfoContainer,
  ProductContainer,
  ProductDescription,
  ProductPrice,
  ProductTitle,
  ProductWrapper,
  SizeContainer,
  Size,
  Unavailable,
  FilterSizeOption,
} from './ProductScreenStyles'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchAProductById } from '../../redux/Product/ProductAction'
import { addProductToCart } from '../../redux/Cart/CartSlice'
import { Hr } from '../../GlobalStyles'

const ProductScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const [size, setSize] = useState()

  const { isLoading, productResponse, selectedProduct } = useSelector(
    (state) => state.product,
  )

  const addToCartHandler = (selectedProduct) => {
    dispatch(addProductToCart(selectedProduct))
    navigate('/cart')

    window.scrollTo(0, 0)
  }

  useEffect(() => {
    dispatch(fetchAProductById(id))
  }, [dispatch, id])

  return (
    <>
      <Hr>
        <hr />
      </Hr>
      {isLoading ? (
        <LoadingBox />
      ) : productResponse.message ? (
        <MessageBox variant="danger">{productResponse.message}</MessageBox>
      ) : (
        <ProductContainer>
          <LinkContainer>
            <BackLink to="/products">Back to product list</BackLink>
          </LinkContainer>
          <ProductWrapper>
            <ImgContainer>
              <Image src={selectedProduct.image} alt={selectedProduct.name} />
            </ImgContainer>
            <InfoContainer>
              <ProductTitle>{selectedProduct.name}</ProductTitle>
              <ProductDescription>
                {selectedProduct.description}
              </ProductDescription>
              <ProductPrice>${selectedProduct.price}</ProductPrice>

              {selectedProduct.inStock > 0 ? (
                <AddContainer>
                  <SizeContainer>
                    Size
                    <Size
                      value={size}
                      onChange={(e) => setSize(e.target.value)}
                    >
                      {selectedProduct.size?.map((s) => (
                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                      ))}
                    </Size>
                  </SizeContainer>
                  <Button onClick={() => addToCartHandler(selectedProduct)}>
                    ADD TO CART
                  </Button>
                </AddContainer>
              ) : (
                <Unavailable>Product unavailable. Coming Soon!</Unavailable>
              )}
            </InfoContainer>
          </ProductWrapper>
        </ProductContainer>
      )}
    </>
  )
}

export default ProductScreen
