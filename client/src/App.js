import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react'
import Home from "./Pages/Home"
import LogIn from "./Pages/LogIn"
import SighUp from "./Pages/SighUp"
import errorPg from "./Pages/errorPg"


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
    </Router>
  )
}

export default App