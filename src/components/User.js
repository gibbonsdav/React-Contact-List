import React from "react"
import { Link } from "react-router-dom"
import data from "./data.json"
import { FaUserAlt } from "react-icons/fa"
import { IoMdMail } from "react-icons/io"
import { AiOutlineMobile } from "react-icons/ai"
import { IoMdArrowBack } from "react-icons/io"
import { FaGlobeAmericas } from "react-icons/fa"

export default function(props) {
  const id = props.match.params.id

  const user = data.find(userid => userid.id == id)
  function back(e) {
    e.preventDefault()
    props.history.goBack()
  }
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
          {" "}
          <AiOutlineMobile />
          {user.cell}
        </p>
        <p>
          <FaGlobeAmericas />
          {user.location.city}, {user.location.state}
        </p>
      </div>
      <button onClick={back} className="backbutton">
        <IoMdArrowBack />
      </button>
    </div>
  )
}
