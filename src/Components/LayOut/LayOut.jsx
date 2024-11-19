import React from 'react'
import NavBarUpper from '../NavBar/NavBarUpper'
import NavBarLower from '../NavBar/NavBarLower'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <>
         <NavBarUpper/>
         <NavBarLower/>
         <Outlet/>
    </>
  )
}

export default LayOut
