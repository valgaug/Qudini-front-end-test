import { configureStore } from '@reduxjs/toolkit';
import queueReducer from './reducer';

export default configureStore({
  reducer: {
    queue: queueReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
