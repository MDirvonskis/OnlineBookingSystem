import React, {useState } from 'react'

function SignUpForm(SignUp, error) {
    const [details, setDetails] = useState({usernName: "", firstName: "", lastName: "", telephone: "", email: "", password: ""})

  const submitHandler = e => {
    e.preventDefault()
    SignUp(details)
  }
    
  return (
    <form>
        <div className="form-inner">
            <h2>SignUp</h2>
            {(error != "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="userName"> UserName:</label>
                <input type="text" name="userName" id="userName" onChange={e => setDetails({...details, userName: e.target.value})} value={details.userName}/>
            </div>
            <div className="form-group">
                <label htmlFor="firstName"> Forename:</label>
                <input type="text" name="firstName" id="firstName "onChange={e => setDetails({...details, firstName: e.target.value})} value={details.firstName}/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName"> Surname:</label>
                <input type="text" name="lastName" id="lastName"onChange={e => setDetails({...details, lastName: e.target.value})} value={details.lastName}/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"onChange={e => setDetails({...details, telephone: e.target.value})} value={details.telephone}/>
            </div>
            <div className="form-group">
                <label htmlFor="telephone">telephone:</label>
                <input type="text" name="telephone" id="telephone"onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
            </div>
            <input type="submit" value="SignUp" />
        </div>
    </form>
  )
}

export default SignUpForm

