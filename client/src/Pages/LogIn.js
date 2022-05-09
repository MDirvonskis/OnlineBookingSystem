import React, {useEffect, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom"

function LogIn() {
  let navigate = useNavigate()
  const [details, setDetails] = useState({usernName: "", password: ""})
  const submitHandler = e => {
    e.preventDefault()
    LogInDetails(details)
  }
  const adminUser = {
    userName: "admin",
    password: "admin123"
  }
  
  const [user, setUser] = useState({userName: "", password: ""})
  const [error, setError] = useState("")

  const LogInDetails = details =>//check if user match in database
  {
    if(details.userName === adminUser.userName && details.password === adminUser.password) {
      console.log("Logged In")
      //setUser({userName: details.userName})
      navigate("/AdminPanel")
    }
    else{
      setError("Details do not match")
    }
  }
  const LogOut = () =>{
    setUser({userName: "", password: ""})
    console.log("LogOut")
  }
  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>LogIn</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="userName"> UserName:</label>
                <input type="text" name="userName" id="userName" onChange={e => setDetails({...details, userName: e.target.value})} value={details.userName}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="LogIn" />
        </div>
    </form>
  )
}

export default LogIn
