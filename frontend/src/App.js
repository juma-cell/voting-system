import React from "react"

// React Router Import
import { Route, Switch, Redirect } from "react-router-dom"

// Pages Import
import About from "./Pages/About"
import Election from "./Pages/Election"
import Header from "./Pages/Header"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Signup from "./Pages/Signup"
import Voting from "./Pages/Voting"

function App() {
  return (
    <div className="min-h-screen text-white">
      {/* <Header /> */}
      <div>
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>

          <Route path="/election" exact>
            <Election />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route>

          <Route path="/profile" exact>
            <Profile />
          </Route>

          <Route path="/signup" exact>
            <Signup />
          </Route>

          <Route path="/voting" exact>
            <Voting />
          </Route>
        </Switch>
      </div>
    </div>
  )
}

export default App
