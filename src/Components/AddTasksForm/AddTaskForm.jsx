import React from 'react'
import './AddTaskForm.scss'
const AddTaskForm = () => {
  return (
    <form className="Add-TaskForm">
    <h2 className="form-heading">Add a New Task</h2>

    <div className="form-group">
      <label htmlFor="name">Task Name:</label>
      <input type="text" id="name" name="name" required />
    </div>

   

    <div className="form-group">
      <label htmlFor="members">Choose Members:</label>
      <select id="members" name="members">
        <option value="user1">user1</option>
        <option value="user2">user2</option>
        <option value="user3">user3</option>
      </select>
    </div>

    <div className="form-group">
      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" cols="30" rows="5"></textarea>
    </div>

    <div className="form-group">
      <label htmlFor="deadline">Priority:</label>
      <select id="members" name="members">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
    </div>

    <button type="submit" className="submit-button">Add Task</button>
  </form>
  )
}

export default AddTaskForm