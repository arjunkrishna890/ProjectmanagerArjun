// tasksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tasks: [],
  status: 'idle',
  tasksByProjectId: {},
  error: null,
};

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get('http://localhost:8000/tasks');
  return response.data;
});
export const addNewTask = createAsyncThunk('projects/addNewTask', async (projectData) => {
  const response = await axios.post(`http://localhost:8000/projects/${projectId}/`, projectData);
  return response.data;
});
// Define a new async thunk for fetching tasks by project ID
export const fetchTasksByProjectId = createAsyncThunk(
  'tasks/fetchTasksByProjectId',
  async (projectId) => {
    try {
      const response = await axios.get(`http://localhost:8000/tasks/${projectId}`);
      return response.data;
    } catch (error) {
      throw Error('Error fetching tasks by project ID');
    }
  }
);
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasks = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
       .addCase(fetchTasksByProjectId.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchTasksByProjectId.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tasksByProjectId = action.payload;
      })
      .addCase(fetchTasksByProjectId.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error.message;
      })
      
  },
});



export default tasksSlice.reducer;
