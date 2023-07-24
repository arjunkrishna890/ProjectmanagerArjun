import React from 'react'
import { BsPlusCircleDotted ,BsTrash} from "react-icons/bs";
import './projectCard.scss'

const ProjectCard = () => {
  return (
     
    <div className='projectcontainer'>
      <div className='topsection'>
        <div className='projectdetails'>
            <h2>Lulu International</h2>
            <p>Deadline: 25/10/2023</p>
            <div className='percentage'>
            <h1>54%</h1>
            </div>
       
          </div>

          <div className='teamdetail'>
            <h4>Team Members <BsPlusCircleDotted/></h4>
            <ul>
              <li><span>Angel</span> <BsTrash/></li>
              <li><span>Arjun </span><BsTrash/></li>
              <li><span>Hrithik</span> <BsTrash/></li>
              <li><span>Febin</span><BsTrash/></li>
            </ul>
            <h3>Task Instruction</h3>
            <textarea name="instructions" id=""></textarea>
          </div>
      </div>
       
      <div className='bottomsection'>
        <div className='Description'>
            <h3>Description</h3>
            <textarea name="" id="" ></textarea>
        </div>
      </div>
        
  </div>
 
  )
}

export default ProjectCard