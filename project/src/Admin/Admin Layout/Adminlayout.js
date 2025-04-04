import React from 'react'
import AdminHeader from '../components/Header/AdminHeader'
import AdminSidebar from '../components/Dashboard/AdminSidedbar'
import { Outlet } from 'react-router-dom'
import AdminFooter from '../components/Footer/AdminFooter'

const Adminlayout = () => {
  return (
    <div className='main-container'>
      <AdminHeader/>
      <AdminSidebar/>
      <main>
        <Outlet/>
      </main>
      <AdminFooter/>
    </div>
  )
}

export default Adminlayout
