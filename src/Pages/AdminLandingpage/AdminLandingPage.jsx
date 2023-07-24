import React from "react";
import "./AdminLandingPage.scss";
import { MdOutlineNotifications } from "react-icons/md";
import ProjectListing from "../../Components/ProjectListing/ProjectListing";
import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import MemberListing from "../../Components/MemberListing/MemberListing";

function AdminLandingPage() {
  return (
    <div className="adminlandingpage">
      <div className="topsection">
      
        <div className="search-input">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="Search" />
        </div>
        <MdOutlineNotifications size={25} color="teal" />
      </div>
      <div className="analtyics-cards">
        <div className="card">
          <div className="card-content">
            <BsFillPeopleFill size={50} />
            <div className="card-content1">
              <h2 className="card-title">800</h2>
              <p className="card-description">Total Employees</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <BsFillPeopleFill size={50} />
            <div className="card-content1">
              <h2 className="card-title">800</h2>
              <p className="card-description">Total Employees</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <div className="card-content">
            <AiOutlineProject size={50} />
            <div className="card-content1">
              <h2 className="card-title">25+</h2>
              <p className="card-description">Total Projects</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <BsFillPeopleFill size={50} />
            <div className="card-content1">
              <h2 className="card-title">800</h2>
              <p className="card-description">Total Employees</p>
            </div>
          </div>
        </div>
      </div>
      <div className="projectlisting">
        <ProjectListing />
        <MemberListing />
      </div>
     
    </div>
    
  );
}

export default AdminLandingPage;
