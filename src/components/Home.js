import React from "react"
import { Link } from "react-router-dom"
import data from "./data.json"

export default function() {
  return (
    <div className="container">
      <div className="peeps">My Peeps</div>
      {data.map(home => (
        <Link to={`/User/${home.id}`}>
          <div className="contacts">
            {" "}
            <img className="smallpic" src={home.picture.thumbnail} />
            <div className="fullname">
              <p>{home.name.first} </p>
              <p>&nbsp;</p>
              <p>{home.name.last}</p>
            </div>
          </div>{" "}
        </Link>
      ))}
    </div>
  )
}

// export default function() {
//   return (
//     <div>
//       {data.map(home => (
//         <div>
//           {" "}
//           <img src={home.picture.thumbnail} />
//           <p>{home.name.first} </p>
//           <p>{home.name.last}</p>
//         </div>
//       ))}
//     </div>
//   )
// }

// // export default function() {
// //   return (
// //     <div>
// //       <div className="peeps">
// //         <h1>My Peeps</h1>
// //       </div>
// //     </div>
// //   )
// // }
