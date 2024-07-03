import React from 'react'
import HeaderHome from '../../components/Header/HeaderHome'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/User Components/User Sidebar/Sidebar'

const User_layout = () => {
  return (
    <>
    <HeaderHome/>
    <div className='flex flex-row'>
      <Sidebar />
      <Outlet/>
    </div>
    {/* <Footer/> */}
    </> 
  )
}

export default User_layout