import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { url } from '../url'

function Login({type}) {
  const navigate=useNavigate()
  const [error, setError]=useState("")
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if(type==="student")
    {
      fetch(url+"/login",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(res=>{
        if(res.statusCode==200)
        {
          navigate("/student/signup/home")
        }
        else{
          setError(res.message)
        }
      //  try {
      //   if(res){
      //     navigate(`/student/signup/home`)
      //   }
      //  } catch (error) {
      //   console.log("error in log in" , error);
        
      //  }
        
      })
    }
    else{

    }
  }
  return (
    <>
    <table align='center'>
        {error!="" ?  <tr>
          <td className='text-danger'>{error}</td>
          </tr>:null}
        <tr><h3 className='text-primary' style={{textAlign:"center"}}>LogIn</h3></tr>
        <tr><label>{type} Email</label></tr>
        <tr><input type="text" value={data.email} onChange={(e)=>{
            setData({...data,email: e.target.value})
        }} /></tr>
        <tr><label>Password</label></tr>
        <tr><input type="text" value={data.password} onChange={(e)=>{
            setData({...data,password: e.target.value})}} /></tr>
        <tr style={{alignItems:"center"}}><td><button className='btn btn-primary' onClick={handleSubmit}>LogIn</button></td></tr>
        <tr><p>Dont Have an account?<span><Link to={type==="student"?"/student/signup":"/admin/signup"} >SignUp</Link></span></p></tr>
    </table>
    </>
  )
}

export default Login