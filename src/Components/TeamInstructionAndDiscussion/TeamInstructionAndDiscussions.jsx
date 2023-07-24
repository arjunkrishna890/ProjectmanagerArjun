import React from "react";
import { useState } from "react";
import "./TeamInstructionAndDiscussions.scss";
import { AiFillWechat } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Outlet } from "react-router";

const TeamInstructionAndDiscussions = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  // Handler for sending messages
  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      // Add the new message to the messages state with the "sender" property
      setMessages([...messages, { text: inputValue, sender: "user" }]);

      // Clear the input field after sending the message
      setInputValue("");
    }
  };
  return (
    <div className="discussions-container">
      <div className="discussions-sidebar">
        <div className="discussions-sidebar-title">
          <AiFillWechat size={85} color="teal" />
        </div>
        <ul className="discussions-sidebar-headers">
          <Link to='/teamchat/general' className="discussions-link">General</Link>
          <Link to='/teamchat/instructions'  className="discussions-link">Instructions</Link>
          {/* <Link className="discussions-link">Strategy</Link>
          <Link className="discussions-link">Updates</Link>
          <Link className="discussions-link">Budget</Link> */}
        </ul>
        <div className="discussions-sidebar-footer">
          <p>Promanage@2023</p>
        </div>
      </div>
      <div className="discussions-chatscreen">
        <Outlet />
        <div className="chatscreen-header">
          <h2>Team Discussions</h2>
        </div>
        <div className="discussions-chatscreen">
          <div className="chatscreen-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${message.sender ? message.sender : ""}`}
              >
                {message.text}
              </div>
            ))}
  
          </div>
          <div className="chatscreen-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamInstructionAndDiscussions;
