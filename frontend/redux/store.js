import { createSlice, configureStore } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'user',
  initialState: {
    token: 0,
    username:"Guest",
    email:""
  },
  reducers: {
    AuthUpdate: (state,action) => 
       ({
        token:action.id,
        username:state.name,
        email:action.email
       })
    ,
    SignOut: state => {
      return({
        token:0,
        username:"Guest",
        email:""
      })
    }
  }
})

export const { AuthUpdate, SignOut } = counterSlice.actions

const store = configureStore({
  reducer: counterSlice.reducer
})

export default store;
