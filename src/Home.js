import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  function myFunction() {
    var x = document.getElementById("table");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  const[user,setUser]=useState('');
  const fetchData = () => {
    return fetch("http://localhost:8080/employees/get")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  return (
    <div>
    <Link to="/add"><button id="addbtn">Add Details</button></Link>
    <button id="viewbtn" onClick={myFunction} >View Details</button>
    <table id="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>ProductName</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
    {user && user.length > 0 && user.map((userObj, index) => (
      <tr>
             <th> {userObj.name}</th>
             <th> {userObj.age}</th>
             <th> {userObj.phone}</th>
             <th> {userObj.position}</th>
             <th> {userObj.salary}</th>
      </tr>
    ))}
              </tbody>
            </table>
        
    </div>
  )
}

export default Home