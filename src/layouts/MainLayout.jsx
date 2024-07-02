import React from 'react'
import HeaderHome from '../components/Header/HeaderHome'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  return (
    <>
    <HeaderHome/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout