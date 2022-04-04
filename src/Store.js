import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/User/UserSlice'
import categoryReducer from './redux/Category/CategorySlice'
import productReducer from './redux/Product/ProductSlice'
import cartReducer, { getTotals } from './redux/Cart/CartSlice'
import orderReducer from './redux/Order/OrderSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer,
  },
})

store.dispatch(getTotals())

export default store
