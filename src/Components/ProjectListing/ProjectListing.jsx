import React from "react";
import "./ProjectListing.scss";
import { useState,useEffect } from "react";
import AddProjectForm from "../AddProjectForm/AddProjectForm";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects,deleteProject } from '../../Store/projectsSlice';
import { RiDeleteBinLine } from 'react-icons/ri';


function ProjectListing() {
  const [showPopup, setShowPopup] = useState(false);

  const handleCreateProjectClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const dispatch = useDispatch();
  const { projects, status, error } = useSelector((state) => state.projects);

  const handleDeleteProject = (projectId) => {
    // Dispatch the deleteProject action with the projectId as the payload
    dispatch(deleteProject(projectId));
  };

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading projects...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }




  return (
    <div className="table-container">
      <div className="first">
        <h3 className="title">
          <b>Project List</b>
        </h3>
        <button className="custom-button" onClick={handleCreateProjectClick}>
          Create project
        </button>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th className="left">Project Name</th>
            <th className="left">Status</th>
            <th className="right">Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project)=>(
             <tr key={project.id}>
             <td className="left">{project.project_name}</td>
             <button onClick={() => handleDeleteProject(project.id)} className="status-red"> <RiDeleteBinLine /></button>
             
             <td className="right"><Link to='/admin/projectdetail' className="Link">Viewmore</Link></td>
           </tr>
          ))}
         
        </tbody>
      </table>

      {showPopup && (
        <div className="popup-container">
          <div className="popup-overlay" onClick={handlePopupClose} />
          <div className="popup-content">
            <AddProjectForm />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectListing;
