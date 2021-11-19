import { configureStore } from '@reduxjs/toolkit';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {},
  middleware: (curryGetDefaultMiddleware) =>
    curryGetDefaultMiddleware().cocat(thunk),
});
