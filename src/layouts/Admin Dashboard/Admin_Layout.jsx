import React from 'react'
import HeaderHome from '../../components/Header/HeaderHome'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Sidebar from "../../components/Admin Components/Admin Sidebar/Sidebar";

const Admin_Layout = () => {
  return (
   <>
   <HeaderHome/>
   <div className='flex flex-row'>
   <Sidebar/>
   <Outlet/>
   </div>
   <Footer/>   
   </>
  )
}

export default Admin_Layout