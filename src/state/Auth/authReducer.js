import { signOut } from '@firebase/auth';
import { createSlice } from '@reduxjs/toolkit';
import { loginWhitGoogle } from '../../thunkAction/authThunk';

const initialState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginWhitGoogle.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(loginWhitGoogle.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginWhitGoogle.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.email = initialState.email;
        state.uid = initialState.uid;
      });
  },
});

export default authSlice.reducer;
