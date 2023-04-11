import { createSlice } from '@reduxjs/toolkit';

interface Post {
  posts: [
    {
      id: string;
      title: string;
      content: string;
    }
  ];
}

const initialState = [
  { id: '1', title: 'First Post!', content: 'Yay' },
  { id: '2', title: 'Second Post', content: 'Nay' },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const selectAllPosts = (state: Post) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
