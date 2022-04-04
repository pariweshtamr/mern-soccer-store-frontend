import {
  respondPending,
  respondFail,
  getCategoriesSuccess,
} from './CategorySlice'
import { getCategories } from '../../api/categoryAPI'

export const fetchCategories = () => async (dispatch) => {
  dispatch(respondPending())
  const data = await getCategories()
  try {
    dispatch(getCategoriesSuccess(data))
  } catch (error) {
    dispatch(respondFail(data))
  }
}
