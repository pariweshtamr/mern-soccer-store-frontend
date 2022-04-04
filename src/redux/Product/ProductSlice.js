import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  products: [],
  productResponse: {},
  selectedProduct: {},
}

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    respondPending: (state) => {
      state.isLoading = true
    },
    getProductsSuccess: (state, { payload = [] }) => {
      state.isLoading = false
      state.products = payload
    },
    getSingleProductSuccess: (state, { payload = {} }) => {
      state.isLoading = false
      state.selectedProduct = payload
    },
    respondFail: (state, { payload }) => {
      state.isLoading = false
      state.productResponse = payload
    },
  },
})

const { reducer, actions } = productSlice
export const {
  respondPending,
  respondFail,
  getProductsSuccess,
  getSingleProductSuccess,
} = actions

export default reducer
