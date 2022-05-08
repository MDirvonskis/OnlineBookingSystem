import React from 'react'
import { useNavigate } from "react-router-dom";

function Home() {
  //let history = useHistory()
  let navigate = useNavigate();
  return (
    <div>
      <button onClick={()=> {navigate('/LogIn')}}>LogIn</button>
      <button onClick={()=> {navigate('/SignUp')}}>SignUp</button>
    </div>
  )
}

export default Home