
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  projects: [],
  status: 'idle',
  error: null,
};

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
  const response = await axios.get('http://localhost:8000/projects');
  return response.data;
});

export const deleteProject = createAsyncThunk('projects/deleteProject', async (projectId) => {
  await axios.delete(`http://localhost:8000/projects/${projectId}`);
  return projectId;
});

export const addNewProject = createAsyncThunk('projects/addNewProject', async (projectData) => {
  const response = await axios.post('http://localhost:8000/projects', projectData);
  return response.data;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects = state.projects.filter((project) => project.id !== action.payload);
      })
      .addCase(addNewProject.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.projects.push(action.payload); // Add the new project to the projects array in the store
      })
      .addCase(addNewProject.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



export default projectsSlice.reducer;
