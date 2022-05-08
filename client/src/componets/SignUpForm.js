import React from 'react'

function SignUpForm() {
  return (
    <form>
        <div className="form-inner">
            <h2>LogIn</h2>
            {/* Error! */}
            <div className="form-group">
                <label htmlFor="userName"> UserName:</label>
                <input type="text" usernName="userName" id="userName"/>
            </div>
            <div className="form-group">
                <label htmlFor="firstName"> Forename:</label>
                <input type="text" firstName="firstName" id="firstName"/>
            </div>
            <div className="form-group">
                <label htmlFor="lastName"> Surname:</label>
                <input type="text" lastName="lastName" id="lastName"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"/>
            </div>
        </div>
    </form>
  )
}

export default SignUpForm