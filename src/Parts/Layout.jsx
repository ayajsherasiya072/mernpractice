import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <div className='container-fluid vw-100 '>
        <div className='row'>
            <div className='col'>
                <Navbar/>
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <Outlet/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Layout