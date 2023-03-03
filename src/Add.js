import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Add() {
  const nav=useNavigate();
  const[name,setname]=useState('');
  const[age,setAge]=useState('');
  const[phone,setphone]=useState('');
  const[position,setposition]=useState('');
  const[salary,setsalary]=useState('');
  const senddb=(e)=>{
    e.preventDefault()
    const details={age,name,phone,position,salary}
    if(age.length==0||salary.length==0||position.length==0||name.length==0||phone.length==0){
      alert("Enter All fields")
    }
    else{
    fetch("http://localhost:8080/employees/",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(details)
    }
    ).then(()=>{
      console.log("New Detail Added");   
      console.log(JSON.stringify(details));
      console.log(e);
      alert("Employee Added Successfully!")
      nav("/home")
    })
  }
}
  return (
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        <h1>Enter Product Details</h1>
        <p>Enter Employee Details</p>
      </div>
      <form>
        <div className="input">
          <input type="text" placeholder="Employee name" onChange={(e)=>setname(e.target.value)}  />
        </div>
        <div className="input">
          <input type="text" placeholder="Employee Phone"  pattern="[0-9]+"
                   maxLength="10"  onChange={(e)=>setphone(e.target.value)} />
        </div>
        <div className="input">
          <input type="number" placeholder="Employee Age"  onChange={(e)=>setAge(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Employee Position" onChange={(e)=>setposition(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Employee Salary" pattern="[0-9]+"   onChange={(e)=>setsalary(e.target.value)} />
        </div>
        
        <input onClick={senddb} className="signup-btn" type="submit" value="Add Employee!" />
       
        </form>
    </div>
  </div>
    </div>
  )
}

export default Add