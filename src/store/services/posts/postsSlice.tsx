import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
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
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      }, // falar sobre immer
      prepare(title: string, content: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
          meta: {},
          error: {},
        };
      },
    },
  },
});

export const selectAllPosts = (state: Post) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
