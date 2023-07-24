import React, { useState } from "react";
import "./AddProjectForm.scss";
import { useSelector, useDispatch } from "react-redux";
import { addNewProject } from "../../Store/projectsSlice";

const AddProjectForm = () => {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState("");
  const [teamLead, setTeamLead] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const users = useSelector((state) => state.users.users);

  const handleSubmit = (event) => {
    event.preventDefault(); 

    dispatch(
      addNewProject({
        project_name: projectName,
        teamLead: teamLead,
        members: selectedMembers,
        description: description,
        deadline: deadline,
      })
    ); 

    setProjectName("");
    setTeamLead("");
    setSelectedMembers([]);
    setDescription("");
    setDeadline("");
  };

  return (
    <form className="Add-Projectform" onSubmit={handleSubmit}>
      <h2 className="form-heading">Add a New Project</h2>{" "}
      <div className="form-group">
        <label htmlFor="name">Project Name:</label>{" "}
        <input
          type="text"
          id="name"
          name="name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />{" "}
      </div>{" "}
      <div className="form-group">
        <label htmlFor="teamLead">Choose Team Lead:</label>{" "}
        <select
          id="teamLead"
          name="teamLead"
          value={teamLead}
          onChange={(e) => setTeamLead(e.target.value)}
        >
          <option value="">Select Team Lead</option>{" "}
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}{" "}
            </option>
          ))}{" "}
        </select>{" "}
      </div>{" "}
      <div className="form-group">
        <label htmlFor="members">Choose Members:</label>{" "}
        <select
          id="members"
          name="members"
          multiple
          value={selectedMembers}
          onChange={(e) =>
            setSelectedMembers(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          {" "}
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.username}{" "}
            </option>
          ))}{" "}
        </select>{" "}
      </div>{" "}
      <div className="form-group">
        <label htmlFor="description">Description:</label>{" "}
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>{" "}
      </div>{" "}
      <div className="form-group">
        <label htmlFor="deadline">Deadline:</label>{" "}
        <input
          type="date"
          id="deadline"
          name="deadline"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />{" "}
      </div>{" "}
      <button type="submit" className="submit-button">
        Submit
      </button>{" "}
    </form>
  );
};

export default AddProjectForm;
