import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  CartBottom,
  ShopLink,
  CartContainer,
  CartPriceDetail,
  CartProduct,
  CartProductAmountContainer,
  CartProductDescription,
  CartProductDetails,
  CartProductImage,
  CartProductInfo,
  CartProductName,
  CartProductPrice,
  CartProductQty,
  CartSummary,
  CartSummaryButton,
  CartSummaryItem,
  CartSummaryItemPrice,
  CartSummaryItemText,
  CartSummaryTitle,
  CartTitle,
  CartTop,
  CartTopButton,
  CartTopTexts,
  CartWrapper,
  RemoveButton,
  CartActionButton,
  ProductLink,
  Hr2,
  ClearCartButton,
  TopText,
} from './CartScreenStyles'
import MessageBox from '../../components/MessageBox/MessageBox'
import Announcement from '../../components/Announcement/Announcement'
import { Add, Remove } from '@material-ui/icons'
import {
  addProductToCart,
  clearCart,
  decreaseProductQuantity,
  getTotals,
  removeProductFromCart,
} from '../../redux/Cart/CartSlice'
import { Hr } from '../../GlobalStyles'

const CartScreen = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cart = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  const removeFromCartHandler = (item) => {
    dispatch(removeProductFromCart(item))
  }

  const handleDecreaseQuantity = (item) => {
    dispatch(decreaseProductQuantity(item))
  }
  const handleIncreaseQuantity = (item) => {
    dispatch(addProductToCart(item))
  }
  const clearCartHandler = () => {
    dispatch(clearCart())
  }

  const handleOnCheckout = () => {
    navigate('/cart/checkout')

    window.scrollTo(0, 0)
  }

  let shipping = 0

  return (
    <CartContainer>
      <Hr>
        <hr />
      </Hr>
      <Announcement />
      <CartWrapper>
        <CartTitle>Your Cart</CartTitle>
        <CartTop>
          <Link to="/products">
            <CartTopButton>CONTINUE SHOPPING</CartTopButton>
          </Link>
          <CartTopTexts>
            <TopText>Shopping Bag({cart.cartItems.length})</TopText>
          </CartTopTexts>
        </CartTop>

        {cart.cartItems.length === 0 ? (
          <MessageBox>
            Cart is empty. <ShopLink to="/products">Go to Shop</ShopLink>
          </MessageBox>
        ) : (
          <CartBottom>
            <CartProductInfo>
              {cart.cartItems.map((item) => (
                <div key={item._id}>
                  <CartProduct>
                    <CartProductDetails>
                      <CartProductImage src={item.image} alt={item.name} />

                      <CartProductDescription>
                        <CartProductName>
                          <b>Product:</b>{' '}
                          <ProductLink to={`/product/${item._id}`}>
                            {item.name}
                          </ProductLink>
                        </CartProductName>
                      </CartProductDescription>

                      <CartPriceDetail>
                        <CartProductAmountContainer>
                          <Remove
                            onClick={() => handleDecreaseQuantity(item)}
                          />
                          <CartProductQty>
                            {item.productQuantity}
                          </CartProductQty>
                          <Add onClick={() => handleIncreaseQuantity(item)} />
                          {/* <CartProductSize>{item.size}</CartProductSize> */}
                        </CartProductAmountContainer>
                        <CartProductPrice>
                          ${item.price * item.productQuantity}
                        </CartProductPrice>
                      </CartPriceDetail>

                      <CartActionButton>
                        <RemoveButton
                          type="button"
                          onClick={() => removeFromCartHandler(item)}
                        >
                          REMOVE
                        </RemoveButton>
                      </CartActionButton>
                    </CartProductDetails>
                  </CartProduct>
                  <Hr2 />
                </div>
              ))}
              <ClearCartButton type="button" onClick={() => clearCartHandler()}>
                CLEAR CART
              </ClearCartButton>
            </CartProductInfo>

            <CartSummary>
              <CartSummaryTitle>ORDER SUMMARY</CartSummaryTitle>
              <CartSummaryItem>
                <CartSummaryItemText>
                  Subtotal ({cart.totalQuantity}
                  item(s)) :
                </CartSummaryItemText>
                <CartSummaryItemPrice>${cart.totalAmount}</CartSummaryItemPrice>
              </CartSummaryItem>
              <CartSummaryItem>
                <CartSummaryItemText>Shipping: </CartSummaryItemText>
                <CartSummaryItemPrice>${shipping}</CartSummaryItemPrice>
              </CartSummaryItem>

              <CartSummaryItem type="total">
                <CartSummaryItemText>Total</CartSummaryItemText>
                <CartSummaryItemPrice>
                  ${cart.totalAmount + shipping}
                </CartSummaryItemPrice>
              </CartSummaryItem>

              <CartSummaryButton onClick={() => handleOnCheckout()}>
                PROCEED TO CHECKOUT
              </CartSummaryButton>
            </CartSummary>
          </CartBottom>
        )}
      </CartWrapper>
    </CartContainer>
  )
}

export default CartScreen
