import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './services/posts/postsSlices';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
