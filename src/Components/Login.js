import React, { useEffect, useState } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const [Lemail, setLemail] = useState("");
  const [LPassword, setLPassword] = useState("");
  const [Lemailerrors, setLemailerrors] = useState("");
  const [LPassworderror, setPassworderror] = useState("");
  const [Localstoredata, setLocalstoredata] = useState();

  useEffect(() => {
        let registrationdata = JSON.parse(localStorage.getItem("user"));
        setLocalstoredata(registrationdata);
  }, []);
  const navigate = useNavigate();
  const loginbtn = () => {
    
      let ldataE =  Localstoredata?.filter((r)=>(r.Email === Lemail))
      
      let ldataP =  Localstoredata?.filter((s)=>(s.Password === LPassword))
      if(!Lemail&&!LPassword){
       setLemailerrors(" Enter Email")
       setPassworderror("Enter password")
       }
       else if(!Lemail){
        setLemailerrors(" Enter Email")

       }
       else if(!LPassword){
        setPassworderror("Enter password")

       }
      else if(Lemail===!ldataE){
        setLemailerrors("Email not valid")
      }
      else if(LPassword===!ldataP){
       setPassworderror("envalid password")
      }
       else{
          alert("Login Succsesfully")
          navigate("/display")
          localStorage.setItem("token",Lemail)
          localStorage.setItem("isLogin",true)
       }  
      };

  return (
    <>
      <h3 style={{ color: "blue", marginLeft: "250px" }}>Login</h3>
      <table style={{ marginTop: "20px", marginLeft: "60px" }}>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input
              type="email"
              value={Lemail}
              onChange={(e) => {
                setLemail(e.target.value);
                setLemailerrors("");
              }}
            ></input>
            <span style={{ color: "red" }}>{Lemailerrors}</span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Password</label>
          </td>
          <td>
            <input
              type="password"
              value={LPassword}
              onChange={(e) => {
                setLPassword(e.target.value);
                setPassworderror("");
              }}
            ></input><span style={{ color: "red" }}>{LPassworderror}</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button
              onClick={() => loginbtn()}
              style={{
                marginLeft: "100px",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
              }}
            >
              Login
            </button>
          </td>
        </tr>
      
      </table>
    </>
  );
};

export default Login;
