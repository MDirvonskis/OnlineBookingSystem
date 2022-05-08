import React, {useEffect, useState } from 'react'
import LogInForms from './componets/LogInForm'

function App() {
  const adminUser = {
    userName: "admin",
    password: "admin123"
  }

  const [user, setUser] = userState({userName: "", email: ""})
  const [error, setError] = useState = useState("")

  const LogIn = details =>{
    console.log(details)
  }
  const LogOut = () =>{
    console.log("LogOut")
  }
  return (
    <div className="App">
      {(user.userName != "") ? (
        <div className ="Welcome">
        <h2>Welcome, <span>{user.name}</span></h2>
        <button>LogOut</button>
        </div>
      ) : (
        <LogInForm LogIn={LogIn} error={error} />//Initiate log form
      )}
    </div>    
  )
}

export default App
