import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../Store/usersSlice';
import { useNavigate } from 'react-router-dom';

const RegisterUserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the user data object to send in the registerUser async thunk
    const userData = {
      username: username,
      password: password,
    };

    // Dispatch the registerUser async thunk to register the new user
    dispatch(registerUser(userData));

    // Reset the form fields after registration
    setUsername('');
    setPassword('');

    navigate('/');
  };

  return (
    <div className='loginpage-container'>
      <form onSubmit={handleSubmit}>
        {/* Form input fields for registration */}
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Username"
            name="username"
            id='username'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="username" className="form__label">Username</label>
        </div>
        <div className="form__group field">
          <input
            type="password"
            className="form__field"
            placeholder="Password"
            name="password"
            id='password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password" className="form__label">Password</label>
        </div>

        <button className="custom-button" type="submit">
          Register
        </button>
        <p>Already registered? Login</p>
      </form>
    </div>
  );
};

export default RegisterUserForm;
