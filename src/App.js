
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/LoginAndRegistration/LoginPage/LoginPage';
import AdminLandingPage from "./Pages/AdminLandingpage/AdminLandingPage";
import RegistrationPage from './Pages/LoginAndRegistration/RegistrationPage/RegistrationPage';
import EmployeeLandingPage from "./Pages/EmployeeLandingPage/EmployeeLandingPage";
import TeamInstructionAndDiscussions from "./Components/TeamInstructionAndDiscussion/TeamInstructionAndDiscussions";
import RootLayout from "./Pages/RootLayout/RootLayout";
import ProjectCard from './Components/ProjectCard/ProjectCard';
import KanbanBoard from './Components/KanbanBoard/KanbanBoard';
import EmployeeProjectList from "./Components/EmployeeProjectList/EmployeeProjectList";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage/>}/>
        <Route exact path='/register' element={<RegistrationPage/>}/>
        <Route exact path='/admin' element={<RootLayout/>} >
          <Route index element={<AdminLandingPage />} />
          <Route path="projectdetail" element={<ProjectCard/>}/>
          <Route  path='teamchat' element={<TeamInstructionAndDiscussions/>} />
        </Route>
        <Route exact path='/EmployeeDashboard' element={<EmployeeLandingPage/>} >
          <Route index element={<EmployeeProjectList/>}></Route>
          <Route path="task-detail" element={<KanbanBoard />} />
          <Route  path='teamchat' element={<TeamInstructionAndDiscussions/>} />
        </Route>
        
      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
