import React, {useEffect, useState } from 'react'
import LogInForm from './componets/LogInForm'

function App() {
  const adminUser = {
    userName: "admin",
    password: "admin123"
  }

  const [user, setUser] = useState({userName: "", password: ""})
  const [error, setError] = useState("")

  const LogIn = details =>
  {
    //console.log(details.userName)
    //console.log(details.password)
    //console.log(adminUser.userName)
    //console.log(adminUser.password)
    if(details.userName === adminUser.userName && details.password === adminUser.password) {
      console.log("Logged In")
    }
    else{
      console.log("Details do not match")
    }
  }
  const LogOut = () =>{
    console.log("LogOut")
  }
  return (
    <div className="App">
      {(user.userName !== "") ? (
        <div className ="Welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>LogOut</button>
        </div>
      ) : (
        <LogInForm LogIn={LogIn} error={error} />//Initiate login form
      )}
    </div>    
  )
}

export default App
