// store.js
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './usersSlice';
import projectsReducer from './projectsSlice';
import membersReducer from './membersSlice';
import tasksReducer from './tasksSlice';
import messagesReducer from './messagesSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    projects: projectsReducer,
    members: membersReducer,
    tasks: tasksReducer,
    messages: messagesReducer,
  },
});

export default store;
