import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  listUser: [],
  isLoading: false,
  isError: false,
}
export const fetchUserAll = createAsyncThunk(
  //name
  'users/fetchUserAll',
  //callBack  api
  async() => {
      const res = await axios.get("http://localhost:8080/users/all")
      return res.data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
      builder
      .addCase(fetchUserAll.pending, (state, action)=> {
        state.isLoading = true 
        state.isError = false
    })
    .addCase(fetchUserAll.fulfilled, (state, action)=> {
        state.listUser = action.payload
        state.isLoading = false 
        state.isError = false
      })
      .addCase(fetchUserAll.rejected, (state, action)=> {
        state.isLoading = false 
        state.isError = true
      })
  },
})

// Action creators are generated for each case reducer function

export default userSlice.reducer