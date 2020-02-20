import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import Home from "./Home"
import User from "./User"
import data from "./data.json"

export default function() {
  return (
    <Router>
      <div>
        <ul></ul>
        <Route exact path="/" component={Home} />
        <Route path="/User/:id" component={User} />
        {/* <Route path="/User" component={User} /> */}
      </div>
    </Router>
  )
}
