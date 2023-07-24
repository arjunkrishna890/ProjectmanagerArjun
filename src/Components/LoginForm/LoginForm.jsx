import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../Store/usersSlice';
import { setCurrentUser } from '../../Store/usersSlice';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

 
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      
      if (user.is_admin) {
        navigate('/admin');
      } else {
        navigate('/EmployeeDashboard'); // Navigate to the EmployeeLandingPage
      }
    } else {
   
      alert('Invalid username or password.');
    }
    dispatch(setCurrentUser(user))
  };

  console.log()
 
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='loginpage'>
      <div className='loginpage-container'>
        <form onSubmit={handleSubmit}>
          <div className="form__group field">
            <input
              type="input"
              className="form__field"
              placeholder="Name"
              name="name"
              id='name'
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="name" className="form__label">Username</label>
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

          <button type="submit" className="custom-button" >
            Login
          </button>
        </form>
        <p>Haven't Registered yet? </p> <Link to='/register'>SignUp</Link>
      </div>
    </div>
  );
};

export default LoginForm;

