import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./Pages/Home"
import LogIn from "./Pages/LogIn"
import SighUp from "./Pages/SignUp"
import errorPg from "./Pages/errorPg"

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/LogIn" element={<LogIn />}/>
          <Route path="/SignUp" element={<SighUp />}/>
          
          <Route path="/AdminPanel" element={<LogIn />}/>
          <Route path="/ClientBooking" element={<LogIn />}/>
          <Route path="/AdminPanel/DatabaseManagement" element={<LogIn />}/>
          <Route path="*" element={<errorPg />}/>
        </Routes>
    </Router>
  )
}

export default App