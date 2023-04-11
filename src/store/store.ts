import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './services/postsSlices';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
