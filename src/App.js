 import "./App.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Home from "./Components/Home";
import Display from "./Components/Display";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

function App() {
  const [isUserLogin, setIsUserLogin] = useState(false);

 const navigate = useNavigate();
 
  
 let getIsLogin = localStorage.getItem("isLogin"); 
 useEffect(() => {
    if (getIsLogin) {
      console.log("isLogin::",getIsLogin);
      setTimeout(()=>{
        console.log("islogin2",getIsLogin);
      },10000)
      setIsUserLogin(getIsLogin);
      navigate("/display")
    }
  }, [isUserLogin,getIsLogin])

  
  return (
    <>
      <div className="mainbody">
        <Navbar />
        <Routes>
          {!isUserLogin && (
            <>
              <Route path="/" Component={Home} />
              <Route path="/login" Component={Login} />
              <Route path="/registration" Component={Registration} />
            </>
          )}
          {isUserLogin && <Route path="/display" Component={Display} />}
          <Route
            path="*"
            element={<Navigate to={isUserLogin ? "/display" : "/login"} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
