import React, {useEffect, useState } from 'react'
import LogInForm from '../components/LogInForm'

function LogIn() {
  const adminUser = {
    userName: "admin",
    password: "admin123"
  }
  
  const [user, setUser] = useState({userName: "", password: ""})
  const [error, setError] = useState("")

  const LogIn = details =>
  {
    if(details.userName === adminUser.userName && details.password === adminUser.password) {
      console.log("Logged In")
      setUser({userName: details.userName})
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
    <div className="App">
      {(user.userName !== "") ? (
        <div className ="Welcome">
        <h2>Welcome <span>{user.userName}</span></h2>
        <button onClick ={LogOut}>LogOut</button>
        </div>
      ) : (
        //<button onClick={}>
        <LogInForm LogIn={LogIn} error={error} />//Initiate login form
      )}
    </div>    
  )
}

export default LogIn
