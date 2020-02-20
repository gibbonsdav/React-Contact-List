import React from "react"
// import { Router } from "react-router-dom"
import data from "./data.json"

export default function(props) {
  const id = props.match.params.id

  const user = data.find(userid => userid.id == id)

  return (
    <div className="contactcard">
      <div className="singlegreen">
        <img src={user.picture.large} />
      </div>
      <div className="cardtext">
        <p>
          {user.name.first} {user.name.last}{" "}
        </p>

        <p>{user.email}</p>
        <p>{user.cell}</p>
        <p>
          {user.location.city}, {user.location.state}
        </p>
      </div>
      <button className="backbutton">
        <a href="http://localhost:3000/">Go Back</a>
      </button>
    </div>
  )
}
