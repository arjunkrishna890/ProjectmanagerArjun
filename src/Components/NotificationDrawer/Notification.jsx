import React from 'react';
import './Notification.scss';

const App = () => {
  return (
    <div className="notification-container">
      <input type="checkbox" name="" className="notification-btn" />
      <div className="notification-box">
        <div className="notification-header">
          <p>Notifications</p>
          <a href="#">See all</a>
        </div>
        <div className="notification-content">
          <div className="notification-item">
            {/* <img src="harry.jpg" alt="" /> */}
            <div className="notification-text">
              <p>
                <span className="notification-name">Arjun Krishna</span> completed the task.
              </p>
              <p className="notification-time">1 hour ago</p>
            </div>
          </div>
          <div className="notification-item">
            {/* <img src="ron.jpg" alt="" /> */}
            <div className="notification-text">
              <p>
                <span className="notification-name">Febin </span> has completed your task.
              </p>
              <p className="notification-time">1 hour ago</p>
            </div>
          </div>
          <div className="notification-item">
            {/* <img src="hermione.jpg" alt="" /> */}
            <div className="notification-text">
              <p>
                <span className="notification-name">Hermione Granger</span> reacted to your post.
              </p>
              <p className="notification-time">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
