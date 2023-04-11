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
  reducers: {},
});

export const selectAllPosts = (state: Post) => state.posts;

export default postsSlice.reducer;
