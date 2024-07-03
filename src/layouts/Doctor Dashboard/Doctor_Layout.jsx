import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderHome from '../../components/Header/HeaderHome'
import Footer from '../../components/Footer/Footer'

const Doctor_Layout = () => {
  return (
    <>
   <HeaderHome/>
   <Outlet/>
   {/* <Footer/>    */}
   </>
  )
}

export default Doctor_Layout