import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  isAuthenticated: false,
  authToken: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    setAuthToken:(state,action)=>{
      state.authToken = action.payload;
    }
  },
});

export const { login, logout, setAuthToken } = authSlice.actions;

export default authSlice.reducer;
