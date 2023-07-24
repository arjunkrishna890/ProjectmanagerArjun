import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { Outlet } from 'react-router'
import './RootLayout.scss';

const RootLayout = () => {
  return (
  <div className='RootLayout'>
    <div className='sidebar'>
      <Sidebar />
    </div>
    <div className='admin-components'>
      <Outlet />
    </div>
  </div>
  )
}

export default RootLayout