import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const [User, setUser] = useState();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [ConformPassword, setConformPassword] = useState("");
  const [Address, setAddress] = useState("");
  const [Nameerror, setENameerror] = useState("");
  const [Emailerror, setEmailerror] = useState("");
  const [Passworderror, setPassworderror] = useState("");
  const [ConformPassworderror, setConformpassworderror] = useState("");
  const [Addresserror, setAddresserror] = useState("");
  const Navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("user")
    console.log("data",data);
      let UserData = JSON.parse(data);
      setUser(UserData)
      
  }, [])
  

  const Adddata = () => {
    if (!Name && !Email && !Password && !ConformPassword && !Address) {
      setENameerror("plzentername");
      setEmailerror(" enter mail id");
      setAddresserror("enteraddress");
      setConformpassworderror("entercpassword");
      setPassworderror(" enter password");
    } else if (!Name) {
      setENameerror("plzentername");
    } else if (!Email) {
      setEmailerror(" enter mail id");
    } else if (!Password) {
      setPassworderror(" enter password");
    } else if (!ConformPassword) {                    
      setConformpassworderror("entercpassword");
    } else if (!Address) {
      setAddresserror("enteraddress");
    } else if (Password !== ConformPassword) {
      setConformpassworderror("password!match");
    } else if (Email.match(/^[a-zA-Z]+$/)) {
      setEmailerror("envalidemail");
    } else {
      let alldata = { Name, Email, Password, ConformPassword, Address };
      
      let userindex = User?.filter((rs) => rs.Email === Email)
      console.log("userindex",userindex)
      if (!userindex?.length) {    
            if(!User?.length){
              localStorage.setItem("user",JSON.stringify([alldata]))
            }  else{
              
              localStorage.setItem("user",JSON.stringify([...User,alldata]))
            };
         
               
              alert("data added succesfully")
              setName("")
              setAddress("")
              setEmail("")
              setPassword("")
              setConformPassword("")
              Navigate("/login")
      } else {
        alert("you have already login")
        Navigate("/login")
           
      }
    }
  }
  console.log("USER",User);
  

  return (
    <>
      <h3 style={{ color: "blue", marginLeft: "200px" }}>Registration</h3>
      <table style={{ marginTop: "20px", marginLeft: "30px" }}>
        <tr>
          <td>
            <label>Name</label>
          </td>
          <td>
            <input
              type="text"
              value={Name}
              onChange={(e) => {
                setName(e.target.value);
                setENameerror("");
              }}
            ></input>
            <span style={{ color: "red" }}>{Nameerror}</span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Email</label>
          </td>
          <td>
            <input
              type="email"
              value={Email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailerror("");
              }}
            ></input>
            <span style={{ color: "red" }}>{Emailerror}</span>
          </td>
        </tr>
        <tr>
          <td>
            <label> Password</label>
          </td>
          <td>
            <input
              type="password"
              value={Password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPassworderror("");
              }}
            ></input>
            <span style={{ color: "red" }}>{Passworderror}</span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Conform Password</label>
          </td>
          <td>
            <input
              type="password"
              value={ConformPassword}
              onChange={(e) => {
                setConformPassword(e.target.value);
                setConformpassworderror("");
              }}
            ></input>
            <span style={{ color: "red" }}>{ConformPassworderror}</span>
          </td>
        </tr>
        <tr>
          <td>
            <label>Address</label>
          </td>
          <td>
            <input
              type="Textarea"
              value={Address}
              onChange={(e) => {
                setAddress(e.target.value);
                setAddresserror("");
              }}
            ></input>
            <span style={{ color: "red" }}>{Addresserror}</span>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <button
              onClick={() => Adddata()}
              style={{
                marginLeft: "75px",
                backgroundColor: "blue",
                color: "white",
                borderRadius: "5px",
              }}
            >
              SignIn
            </button>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Registration;
