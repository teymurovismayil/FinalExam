import React from 'react'
import NavBarSection from './NavBarSection'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'


function Layout() {
  return (
    <>
    
        <NavBarSection/>
        <Outlet/>
        <Footer />
    </>
  )
}

export default Layout