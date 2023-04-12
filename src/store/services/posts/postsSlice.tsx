import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';
interface Post {
  posts: [
    {
      id: string;
      title: string;
      content: string;
      userId: string;
      date: string;
    }
  ];
}

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Yay',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'Nay',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      }, // falar sobre immer
      prepare(title: string, content: string, userId: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
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
