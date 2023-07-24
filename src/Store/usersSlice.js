// usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
  status: 'idle',
  error: null,
  isAdminLoggedIn: false,
  currentUser: null, // New state to store the current user details
};

// Fetch users from the server
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get('http://localhost:8000/users');
  return response.data;
});

// Check user credentials and update authentication state
// usersSlice.js
// ... (other imports and code) ...

export const loginUser = createAsyncThunk('users/loginUser', async ({ username, password }, thunkAPI) => {
  try {
    const response = await axios.get('http://localhost:8000/users');
    const users = response.data.users;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      // If user is admin, set isAdminLoggedIn to true
      if (user.is_admin) {
        thunkAPI.dispatch(usersSlice.actions.setAdminLoggedIn(true));
      }

      // Dispatch the action to save the current user details to the store
      thunkAPI.dispatch(usersSlice.actions.setCurrentUser(user));
    } else {
      // If user credentials don't match, show an alert or handle the error as needed
      alert('Invalid username or password.');
    }
  } catch (error) {
    console.error('Error while logging in:', error);
  }
});

// ... (rest of the code) ...


export const registerUser = createAsyncThunk('users/registerUser', async ({ username, password }) => {
  try {
    const newUser = {
      username: username,
      password: password,
    };

    const response = await axios.post('http://localhost:8000/users', newUser);
    return response.data;
  } catch (error) {
    console.error('Error while registering user:', error);
    throw error;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setAdminLoggedIn: (state, action) => {
      state.isAdminLoggedIn = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      });
  },
});


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data:null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
  },
});


export const { setAdminLoggedIn, setCurrentUser ,setData} = usersSlice.actions;

export default usersSlice.reducer;
