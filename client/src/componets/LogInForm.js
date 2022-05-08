import React from 'react'

function LogInForm({Login, error}) {
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
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password"/>
            </div>
            <input type="submit" value="LogIn" />
        </div>
    </form>
  )
}

export default LogInForm