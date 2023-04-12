import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './services/posts/postsSlice';
import userReducer from './services/users/usersSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: userReducer,
  },
});
