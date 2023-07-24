import React from 'react'
import './Sidebar.scss'
import { Link,useNavigate  } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setAdminLoggedIn } from '../../Store/usersSlice';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch an action to set isAdminLoggedIn to false when logging out
    dispatch(setAdminLoggedIn(false));

    // Clear the forward history by using replace method
    navigate('/', { replace: true });
  };

  return (
    <div >
        <main className="main">
      <aside className="sidebar">
        <nav className="nav">
          <ul>
            <li className="active"><a href="#">Welcome</a></li>
            <li><Link to="/admin/teamchat">Teamchat</Link></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Get In Touch</a></li>
            <button onClick={handleLogout}>Logout</button>
          </ul>
        </nav>
      </aside>

    </main>
  </div>
  )
}

export default Sidebar