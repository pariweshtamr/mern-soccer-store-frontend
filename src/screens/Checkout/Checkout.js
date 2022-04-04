import React from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginLink } from '../Register/RegisterScreenStyles'
import {
  CheckoutContainer,
  CheckoutTitle,
  CheckoutWrapper,
  OrderButton,
  ShippingDetails,
  ShippingForm,
  ShippingInput,
  ShippingLabel,
  ShippingRow,
} from './CheckoutStyles'
import { Hr } from '../../GlobalStyles'

const Checkout = () => {
  const navigate = useNavigate()

  const { isLoggedIn } = useSelector((state) => state.user)

  const addressRef = useRef()
  const countryRef = useRef()
  const stateRef = useRef()
  const cityRef = useRef()
  const postalCodeRef = useRef()

  const checkoutHandler = (e) => {
    e.preventDefault()

    if (
      !addressRef.current?.value ||
      !countryRef.current?.value ||
      !stateRef.current?.value ||
      !cityRef.current?.value ||
      !postalCodeRef.current?.value
    ) {
      return
    }

    localStorage.setItem(
      'shippingAddress',
      JSON.stringify({
        address: addressRef.current.value,
        country: countryRef.current.value,
        city: cityRef.current.value,
        state: stateRef.current.value,
        postal_code: postalCodeRef.current.value,
      }),
    )
    navigate('/cart/checkout/order')

    window.scrollTo(0, 0)
  }
  return (
    <>
      {isLoggedIn ? (
        <>
          <Hr>
            <hr />
          </Hr>
          <CheckoutContainer>
            <CheckoutWrapper>
              <CheckoutTitle>SHIPPING DETAILS</CheckoutTitle>
              <hr />

              <ShippingForm>
                <ShippingDetails>
                  <ShippingLabel>Address</ShippingLabel>
                  <ShippingInput
                    ref={addressRef}
                    placeholder="Your street address"
                    required
                  />
                </ShippingDetails>

                <ShippingRow>
                  <ShippingDetails>
                    <ShippingLabel>Country</ShippingLabel>
                    <ShippingInput
                      ref={countryRef}
                      placeholder="Country"
                      required
                    />
                  </ShippingDetails>

                  <ShippingDetails>
                    <ShippingLabel>State</ShippingLabel>

                    <ShippingInput
                      ref={stateRef}
                      placeholder="State"
                      required
                    />
                  </ShippingDetails>
                </ShippingRow>

                <ShippingRow>
                  <ShippingDetails>
                    <ShippingLabel>City</ShippingLabel>

                    <ShippingInput ref={cityRef} placeholder="City" required />
                  </ShippingDetails>

                  <ShippingDetails>
                    <ShippingLabel>Postal Code</ShippingLabel>

                    <ShippingInput
                      ref={postalCodeRef}
                      placeholder="Postal Code"
                      required
                    />
                  </ShippingDetails>
                </ShippingRow>

                <OrderButton type="submit" onClick={checkoutHandler}>
                  Continue To Order
                </OrderButton>
              </ShippingForm>
            </CheckoutWrapper>
          </CheckoutContainer>
        </>
      ) : (
        <div>
          <div style={{ width: '40%', marginLeft: '30%', marginTop: '5%' }}>
            <h4 onClick={checkoutHandler}>Please Sign In To Proceed!</h4>
          </div>
          <div>
            <LoginLink to="/login">
              <i className="fa">L O G I N</i>
            </LoginLink>
          </div>
        </div>
      )}
    </>
  )
}

export default Checkout
