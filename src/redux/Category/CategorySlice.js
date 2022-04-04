import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  categories: [],
  categoryResponse: {},
  selectedCategory: {},
}

const categorySlice = createSlice({
  name: 'categorySlice',
  initialState,
  reducers: {
    respondPending: (state) => {
      state.isLoading = true
    },
    getCategoriesSuccess: (state, { payload = [] }) => {
      state.isLoading = false
      state.categories = payload
    },
    getSingleCategorySuccess: (state, { payload = {} }) => {
      state.isLoading = false
      state.selectedCategory = payload
    },
    respondFail: (state, { payload }) => {
      state.isLoading = false
      state.categoryResponse = payload
    },
  },
})

const { reducer, actions } = categorySlice
export const {
  respondPending,
  respondFail,
  getCategoriesSuccess,
  getSingleCategorySuccess,
} = actions

export default reducer
