import React, { useEffect, useState } from "react";
import { json, useLocation, useNavigate } from "react-router-dom";

const Display = ({data}) => {
  const [logindata,setLogindata] =useState();
  let navigate = useNavigate();
  let location = useLocation();
  useEffect(()=>{
    let allData = localStorage.getItem("user")
    let logindata = localStorage.getItem("token")
    allData = JSON.parse(allData)
    let logInUserData = allData?.filter((data)=> data.Email === logindata )
    setLogindata(logInUserData)
  },[])
  
    const lohoutHandler =()=>{
    console.log("click");
    navigate("/login")
    localStorage.removeItem("isLogin");
    
   }

  return (
    <>
      <h3 style={{ color: "blue", marginLeft: "250px" }}>Information</h3>
      <button onClick={()=>lohoutHandler()}>Logout</button>
      {logindata?.map((w) => {
        return (
          <>
          <h1>Display</h1>
            <table style={{ border: "1px solid black" }}>
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Email</td>
                  <td>Address</td>
                  <td>Password</td>
                  <td>ConformPassword</td>
                </tr>
              </thead>
              <tr>
                <td>{w.Name}</td>
                <td>{w.Email}</td>
                <td>{w.Address}</td>
                <td>{w.Password}</td>
                <td>{w.ConformPassword}</td>
              </tr>
            </table>
            
          </>
        );
      })}
    
    </>
  );
};

export default Display;
