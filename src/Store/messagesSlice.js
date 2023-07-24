// messagesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  messages: [],
  status: 'idle',
  error: null,
};

export const fetchMessages = createAsyncThunk('messages/fetchMessages', async () => {
  const response = await axios.get('http://localhost:8000/messages');
  return response.data;
});

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



export default messagesSlice.reducer;
