import { createSlice } from '@reduxjs/toolkit';

interface User {
  users: [
    {
      id: string;
      name: string;
    }
  ];
}

const initialState = [
  {
    id: '0',
    name: 'luis',
  },
  {
    id: '1',
    name: 'fernando',
  },
  {
    id: '2',
    name: 'felipe',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: User) => state.users;

export default usersSlice.reducer;
