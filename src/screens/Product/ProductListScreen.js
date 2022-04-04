import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Products from '../../components/Product/Products'
import { Hr } from '../../GlobalStyles'
import {
  ProductListScreenContainer,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  ProductListSelect,
  Option,
} from './ProductListScreenStyles'

const ProductListScreen = () => {
  const location = useLocation()
  const cat = location.pathname.split('/')[2]
  const [filters, setFilters] = useState({})

  const handleFilters = (e) => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }

  return (
    <ProductListScreenContainer>
      <Hr>
        <hr />
      </Hr>
      {cat ? (
        <>
          <Title>{cat}</Title>
          <FilterContainer>
            <Filter>
              <FilterText>Filter Products:</FilterText>
              <ProductListSelect
                name="type"
                defaultValue=""
                onChange={handleFilters}
              >
                <Option disabled value="">
                  Type
                </Option>
                <Option>Indoor</Option>
                <Option>Outdoor</Option>
              </ProductListSelect>
              <ProductListSelect
                name="size"
                defaultValue=""
                onChange={handleFilters}
              >
                <Option disabled value="">
                  Size
                </Option>
                <Option>6</Option>
                <Option>7</Option>
                <Option>8</Option>
                <Option>9</Option>
              </ProductListSelect>
            </Filter>
          </FilterContainer>{' '}
        </>
      ) : null}

      <Products cat={cat} filters={filters} />
    </ProductListScreenContainer>
  )
}

export default ProductListScreen
