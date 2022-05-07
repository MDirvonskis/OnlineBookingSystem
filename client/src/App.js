import React, {useEffect, useState } from 'react'

function App() {
  const [backendData, setBackData] = useState([{}])
  useEffect(() => {
    fetch("/users/0").then(
      Response => Response.json()
    ).then(
      data => {
        setBackData(data)
      }
    )
  }, [])
  
  return (
    <div>
      {(typeof backendData.users === 'undefined' ) ? (
        <p>Loading...</p>
      ): (
        backendData.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )
}

export default App