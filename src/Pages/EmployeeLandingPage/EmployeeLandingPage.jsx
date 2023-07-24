import React from 'react'
import "./EmployeeLandingPage.scss"
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router'


const EmployeeLandingPage = () => {
  return (
    <div className='employee-landing-main'>
      <div className='employee-sidebar'>
        <Sidebar/>
      </div>
      <div className='employee-content'>
        <Outlet/>
      </div>
    </div>
    
  )
}

export default EmployeeLandingPage