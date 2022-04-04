import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories } from '../../redux/Category/CategoryAction'
import LoadingBox from '../LoadingBox/LoadingBox'
import MessageBox from '../MessageBox/MessageBox'

import CategoryItem from './CategoryItem'
import { CategoriesContainer, CategoryContainer } from './CategoryStyles'

const Categories = () => {
  const dispatch = useDispatch()
  const { isLoading, categoryResponse, categories } = useSelector(
    (state) => state.category || [],
  )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])
  return (
    <CategoriesContainer>
      {isLoading ? (
        <LoadingBox />
      ) : categoryResponse.message ? (
        <MessageBox variant="danger">{categoryResponse.message}</MessageBox>
      ) : (
        <CategoryContainer>
          {categories.map((category) => (
            <CategoryItem key={category._id} category={category} />
          ))}
        </CategoryContainer>
      )}
    </CategoriesContainer>
  )
}

export default Categories
