import { useState } from "react";
import React from "react";

import "./KanbanBoard.scss";
import {FcHighPriority,FcLowPriority,FcMediumPriority} from 'react-icons/fc'
import { MdOutlineNotifications } from "react-icons/md";
import { useSelector } from "react-redux";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1,heading:"headingone" ,title: "Task1", status: "pending" ,priority:"High" },
    { id: 2,heading:"Footer", title: "The footer of the IKEA project", status: "pending",priority:"Medium" },
    { id: 3,heading:"Header ", title: "The header of the Lulu project", status: "pending",priority:"Low" },
    { id: 4,heading:"Footer", title: "The footer of the IKEA project", status: "completed",priority:"Medium" },
    { id: 5,heading:"Header ", title: "The header of the Lulu project", status: "pending",priority:"Low" },
  ]);
  const [itemId,setItemId] =useState();

  const handleDrop = (e, status) => {
    e.preventDefault();
    console.log(status,itemId );
    const taskId = e.dataTransfer.getData("text");
    const updatedTasks = tasks.map((task) =>
      task.id.toString() === taskId ? { ...task, status } : task
    );
    setTasks(updatedTasks);
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text", id);
    setItemId(id);
  };
  const users = useSelector((state) => state.users.currentUser);
  console.log(users)
  return (
    <div className="kambanboardmain">
      <div className="topsection">
        <></>
    </div>
    <div className="kanban-board-container">
      <div className="kanban-board ">
        <div
          className="column column1"
          onDrop={(e) => handleDrop(e, "pending")}
          onDragOver={(e) => e.preventDefault()}>

            <div className="heading-pending">
              <h3>Pending</h3>
            </div>

          {tasks
            .filter((task) => task.status === "pending")
            .map((task) => (
              <div
                key={task.id}
                className="task"
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                <div className="pendingtaskheading">
                  {task.heading}
                </div>
                {task.title}
                {task.priority == "Low" ? ( <div className="low-priority">
                 <FcLowPriority size={20}/> {task.priority} Priority
                </div>):("")}
                {task.priority == "High" ? ( <div className="high-priority">
                <FcHighPriority size={20}/> {task.priority}  Priority
                </div>):("")}
                {task.priority == "Medium" ? ( <div className="medium-priority">
                 <FcMediumPriority/> {task.priority} Priority
                </div>):("")}
              </div>
            ))}
        </div>
        <div
          className="column column2"
          onDrop={(e) => handleDrop(e, "In-progress")}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="heading-progress">
            <h3>In Progress</h3>
          </div>
          {tasks
            .filter((task) => task.status === "In-progress")
            .map((task) => (
              <div
                key={task.id}
                className="task"
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                <div className="inprogresstaskheading">
                  {task.heading}
                </div>
                {task.title}
                {task.priority == "Low" ? ( <div className="low-priority">
                 <FcLowPriority size={20}/> {task.priority} Priority
                </div>):("")}
                {task.priority == "High" ? ( <div className="high-priority">
                <FcHighPriority size={20}/> {task.priority}  Priority
                </div>):("")}
                {task.priority == "Medium" ? ( <div className="medium-priority">
                 <FcMediumPriority/> {task.priority} Priority
                </div>):("")}
              </div>
            ))}
        </div>
        <div
          className="column column3"
          onDrop={(e) => handleDrop(e, "completed")}
          onDragOver={(e) => e.preventDefault()}
        >
          <div className="heading-completed">
          <h3>Completed</h3>
          </div>
          
          {tasks
            .filter((task) => task.status === "completed")
            .map((task) => (
              <div
                key={task.id}
                className="task"
                draggable
                onDragStart={(e) => handleDragStart(e, task.id)}
              >
                <div className="completedtaskheading">
                 {task.heading}
                </div>
                {task.title}
                {task.priority == "Low" ? ( <div className="low-priority">
                 <FcLowPriority size={20}/> {task.priority} Priority
                </div>):("")}
                {task.priority == "High" ? ( <div className="high-priority">
                <FcHighPriority size={20}/> {task.priority}  Priority
                </div>):("")}
                {task.priority == "Medium" ? ( <div className="medium-priority">
                 <FcMediumPriority/> {task.priority} Priority
                </div>):("")}
               
              </div>
            ))}
        </div>
      </div>
    </div>
      </div>
 
  );
};

export default KanbanBoard;
