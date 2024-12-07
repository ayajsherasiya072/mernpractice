import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            
            <img src='https://darshan.ac.in/Content/media/DU_Logo.svg' style={{height:"50px"}}/>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0  position-absolute top-3 end-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/student/login">Student</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/admin/login">Admin</Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar