import React,{useEffect, useState } from 'react'
//import SignUpForm from '../components/SignUpForm'

function SignUp() {
  var boolUser = false, data = ({userName: "", email: ""})//Fetch all user

  const [details, setUser] = useState({userName: "", firstName: "", lastName: "", telephone: "", email: "", password: ""})//Content signup form
  const [error, setError] = useState("");

  const submitHandler = e => {
    e.preventDefault()
    SendUserData(details)
  }

  const SendUserData = details =>
  {
    //Need to send userName && email to database to check if contains user
    for (let i = 0; i < data.length; i++) {//Iterates through user
      if(data.userName[i] === details.userName || data[i].email === details.email){

        console.log(data.userName+" "+details.userName)//Log in console to check  / delete later
        console.log(data[i].email+" "+ details.emai)

        boolUser = false//Identifies if username already matches 
        break//Exits out of the loop
      }
      else{
        boolUser = true
      }
    }
    
    if(boolUser){//check if userName is unique
      //Send info of user  
      console.log(details)
    }
    else{//Contains symbolls in text
      setError("Error: UserName already taken!")
    }
  }

  return (
    <form onSubmit={submitHandler}>
        <div className="form-inner">
            <h2>SignUp</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="userName"> UserName:</label>
                <input type="text" name="userName" id="userName" onChange={e => setUser({...details, userName: e.target.value})} value={details.userName}/>
            </div>
            <div className="form-group">
                <label htmlFor="firstName"> Forename:</label>
                <input type="text" name="firstName" id="firstName "onChange={e => setUser({...details, firstName: e.target.value})} value={details.firstName}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName"> Surname:</label>
                <input type="text" name="lastName" id="lastName"onChange={e => setUser({...details, lastName: e.target.value})} value={details.lastName}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"onChange={e => setUser({...details, telephone: e.target.value})} value={details.telephone}/>
            </div>
            <div className="form-group">
                <label htmlFor="telephone">telephone:</label>
                <input type="text" name="telephone" id="telephone"onChange={e => setUser({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"onChange={e => setUser({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="SignUp" />
        </div>
    </form>
  )
}

export default SignUp