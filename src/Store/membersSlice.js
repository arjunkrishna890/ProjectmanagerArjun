// membersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  members: [],
  status: 'idle',
  error: null,
};

export const fetchMembers = createAsyncThunk('members/fetchMembers', async () => {
  const response = await axios.get('http://localhost:8000/members');
  return response.data;
});

const membersSlice = createSlice({
  name: 'members',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



export default membersSlice.reducer;
