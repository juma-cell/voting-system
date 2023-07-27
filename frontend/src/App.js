
import React from 'react'
import { Route, Routes, Redirect } from "react-router-dom"
import About from "./Pages/About"
import Election from "./Pages/Election"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Signup from "./Pages/Signup"
import Voting from "./Pages/Voting"

function App() {
  return (
    <div className="min-h-screen text-white">
      <div>
        <Routes>
          <Route exact path="/" element={<About />} />
          <Route exact path="/election" element={<Election />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/voting" element={<Voting />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
