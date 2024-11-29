import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'
export const store = configureStore({
  reducer: {
    counter: countReducer,
    user: userReducer,
  },
})