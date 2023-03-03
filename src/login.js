import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
function Login() {
  const[username,setUsername]=useState('');
  const[password,setpassword]=useState('');
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/login/get")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        <h1>INFOTECH</h1>
        <p>Enter Details For Login</p>
      </div>
   
      <form>
        <div className="input">
          <i className="fa-solid fa-user"></i>
          <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Username" />
        </div>
        <div className="input">
          <i className="fa-solid fa-lock"></i>
          <input type="password" onChange={(e)=>setpassword(e.target.value)} placeholder="Password" />
        </div>
        <Link to ="/home"><input  className="signup-btn" type="submit" value="LOGIN" /></Link>
      </form>
    <Link to="/register">  <p>No Account? Signup Now!</p></Link>
      
    </div>
  </div>
  </div>
  )
}

export default Login;