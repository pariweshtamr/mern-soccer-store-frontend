import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  CardElement,
  useStripe,
  Elements,
  useElements,
} from '@stripe/react-stripe-js'
import Axios from 'axios'
import {
  PaymentButton,
  PaymentDetailsForm,
  PaymentDetailsTitle,
  Wrapper,
} from './StripeStyles'
import { Details } from '../../GlobalStyles'

const promise = loadStripe(
  'pk_test_51KShxEIHP3y9z5gNppWegQ7G9m2uFCuTBGrvX4NpHasrM31ZpC9jgXkG8Qn3OkqNyfhYHzAGwDwmlFTokZyiJ9HT00246flD5j',
)

const PaymentForm = ({ data: value, paymentSuccess }) => {
  const [processing, setProcessing] = useState('')
  const stripe = useStripe()
  const elements = useElements()

  console.log(value)

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const res = await Axios.post(
      `${process.env.ROOT_URL}/api/v1/payment/create`,
      {
        amount: value.totalAmount * 100,
      },
    )

    try {
      const payload = await stripe.confirmCardPayment(res.data, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })

      console.log(payload)

      if (payload.error) {
        console.log('failed')
        setProcessing(false)
        console.log(payload.error)
      } else {
        console.log('success')
        setProcessing(false)
        paymentSuccess()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const configCardElement = {
    iconStyle: 'solid',
    style: {
      base: {
        color: 'teal',
        fontSmoothing: 'antialiased',
        fontSize: '14px',
        '::placeholder': {
          color: 'gray',
        },
      },
      invalid: {
        color: '#fa755a',
        iconColor: '#fa755a',
      },
    },

    hidePostalCode: true,
  }

  return (
    <>
      <div>
        <Details>
          <p style={{ textAlign: 'center' }}>
            Test Card Number - <span> 4242 4242 4242 4242</span>
          </p>
        </Details>

        <PaymentDetailsForm id="payment-form" onSubmit={handleOnSubmit}>
          <PaymentDetailsTitle>CARD DETAILS</PaymentDetailsTitle>
          <hr />
          <CardElement options={configCardElement} id="card-element" />
          <PaymentButton
            type="submit"
            style={{ marginTop: '40px', backgroundColor: '#000' }}
            disabled={!stripe}
          >
            PAY ${value.totalAmount}
          </PaymentButton>
          {processing && <h5>Processing.....</h5>}
        </PaymentDetailsForm>
      </div>
    </>
  )
}

const Stripe = ({ data, paymentSuccess }) => {
  return (
    <>
      <Wrapper>
        <Elements stripe={promise}>
          <PaymentForm data={data} paymentSuccess={paymentSuccess} />
        </Elements>
      </Wrapper>
    </>
  )
}

export default Stripe
