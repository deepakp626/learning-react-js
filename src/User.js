// import React from "react";

// export default class User extends React.Component {
//     componentWillUnmount(){
//         alert("User has been deleted")
//     }
//     render() {
//         return (
//             <div>
//                 <ul>
//                     <li>Name:deepak</li>
//                     <li>Emial:deepak@gamil.com</li>
//                     <li>contact:12345</li>
//                 </ul>
//             </div>
//         )
//     }
// }


// // Error Boundry
import React, { Component } from 'react'

export default class User extends Component {
  render() {
    if(true){
        throw new Error('Custom error')
      }
    return (
      <div>
        <h1>User Component</h1>
        </div>
    )
  }
}
