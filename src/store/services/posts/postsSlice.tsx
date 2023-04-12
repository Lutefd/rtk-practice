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
      reactions: {
        eyes: number;
        thumbsUp: number;
        wow: number;
        hooray: number;
        rocket: number;
      };
    }
  ];
}

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Yay',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      hooray: 0,
      rocket: 0,
      eyes: 1,
    },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'Nay',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      hooray: 0,
      rocket: 0,
      eyes: 2,
    },
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
            reactions: {
              thumbsUp: 0,
              wow: 0,
              hooray: 0,
              rocket: 0,
              eyes: 0,
            },
          },
          meta: {},
          error: {},
        };
      },
    },
    reactionAdded(
      state,
      action: {
        payload: {
          postId: string;
          reaction: keyof typeof initialState[0]['reactions'];
        };
      }
    ) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state: Post) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
