import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../url'
function Signup({type}) {
    const navigate=useNavigate()
    const [data,setData]=useState({
        email:"",
        password:""
      })
    const handleSubmit = (e) => {
        e.preventDefault()
        if(type==="student")
        {
            fetch(url+"/register",
                {
                    method:"POST",
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(data)
                }
                
            )
            .then(res=>res.json())
            .then(res=>{
                navigate("/student/signup/home")
                
            })
        }
        else{
          
        }
    }
  return (
   <>
    <table align='center'>
        <tr><h3 className='text-primary' style={{textAlign:"center"}}>SignUp</h3></tr>
        <tr><label>{type} Email</label></tr>
        <tr><input type="text" value={data.email} onChange={(e)=>{
            setData({...data,email: e.target.value})
        }} /></tr>
        <tr><label>Password</label></tr>
        <tr><input type="text" value={data.password} onChange={(e)=>{
            setData({...data,password: e.target.value})}} /></tr>
        <tr style={{alignItems:"center"}}><td><button className='btn btn-primary' onClick={handleSubmit}>SignUp</button></td></tr>
        <tr><p>Already Have an account?<span><Link to={type==="student"?"/student/login":"/admin/login"} >LogIn</Link></span></p></tr>
    </table>
   </>
  )
}

export default Signup