import React, {useState } from 'react'

function LogInForm({LogIn, error}) {
  const [details, setDetails] = useState({usernName: "", password: ""})

  const submitHandler = e => {
    e.preventDefault()
    LogIn(details)
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

export default LogInForm