import React from "react"
// import { Router } from "react-router-dom"
import data from "./data.json"
import { FaUserAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
// import { AiOutlineMobile } from "react-icons/io"
import { IoMdArrowBack } from "react-icons/fa"

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
          {" "}
          <FaUserAlt />
          {user.name.first} {user.name.last}{" "}
        </p>

        <p>
          <IoMdMail />
          {user.email}
        </p>
        <p>
          {/* {" "} */}
          {/* <AiOutlineMobile /> */}
          {user.cell}
        </p>
        <p>
          {user.location.city}, {user.location.state}
        </p>
      </div>
      <button className="backbutton">
        <a href="http://localhost:3000/">
          <img alt="arrow" src="<IoMdArrowBack />"></img>
        </a>
      </button>
    </div>
  )
}
