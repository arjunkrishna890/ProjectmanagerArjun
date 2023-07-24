import React, { useState } from 'react';
import './AddTaskForm.scss';
import { useSelector } from 'react-redux';
import axios from 'axios';

const AddTaskForm = ({ project }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('High');
  const [assignedMember, setAssignedMember] = useState('');
  const user = useSelector((state) => state.users.currentUser);
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newTask = {
      task_name: taskName,
      description: description,
      priority: priority,
      assigned_member_id: user.id,
      project_id:project.id
    };
  
    try {
      // Fetch the project data from the projects endpoint
      // const response = await axios.get(`http://localhost:8000/projects/${project.id}`);
      // const projectData = response.data;
      // console.log('Fetched project data:', projectData);
  
      // projectData.tasks.push(newTask);
     
      // Update the project data by sending a PUT request
      await axios.post(`http://localhost:8000/tasks`, newTask);
      console.log('New task added:', newTask);
  
      // Clear the form fields after submitting
      setTaskName('');
      setDescription('');
      setPriority('High');
      setAssignedMember('');
    } catch (error) {
      console.log(newTask)
      console.error('Error adding new task:', error);
    }
  };
  

  return (
    <form className="Add-TaskForm" onSubmit={handleSubmit}>
      <h2 className="form-heading">Add a New Task</h2>

      <div className="form-group">
        <label htmlFor="name">Task Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>

      {/* <div className="form-group">
        <label htmlFor="members">Choose Members:</label>
        <select
          id="members"
          name="members"
          value={assignedMember}
          onChange={(e) => setAssignedMember(e.target.value)}
        >
          <option value="">Select Member</option>
          <option value="user1">user1</option>
          <option value="user2">user2</option>
          <option value="user3">user3</option>
        </select>
      </div> */}

      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="deadline">Priority:</label>
        <select
          id="priority"
          name="priority"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      <button type="submit" className="submit-button">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
