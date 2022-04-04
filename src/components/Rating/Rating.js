import React from 'react'
import { RatingContainer, RatingSpan } from './RatingStyles'

const Rating = (props) => {
  const { rating, numReviews } = props
  return (
    <RatingContainer>
      <RatingSpan>
        <i
          className={
            rating >= 1
              ? 'fa-solid fa-star'
              : rating >= 0.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </RatingSpan>
      <RatingSpan>
        <i
          className={
            rating >= 2
              ? 'fa-solid fa-star'
              : rating >= 1.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </RatingSpan>
      <RatingSpan>
        <i
          className={
            rating >= 3
              ? 'fa-solid fa-star'
              : rating >= 2.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </RatingSpan>
      <RatingSpan>
        <i
          className={
            rating >= 4
              ? 'fa-solid fa-star'
              : rating >= 3.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </RatingSpan>
      <RatingSpan>
        <i
          className={
            rating >= 5
              ? 'fa-solid fa-star'
              : rating >= 4.5
              ? 'fa-solid fa-star-half-stroke'
              : 'fa-regular fa-star'
          }
        ></i>
      </RatingSpan>
      <RatingSpan>{numReviews} reviews</RatingSpan>
    </RatingContainer>
  )
}

export default Rating
