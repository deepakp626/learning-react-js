import React from 'react'

// class Profile extends React.Component {
//     constructor(){
//         super()
//     }
//     componentDidMount(){
//         console.log("")
//     }
//     render() {
//         return(
//             <div>
//                 <h1>Profile component</h1>
//             </div>
//         )
//     }
// }


export default function Profile(props) {
    const red =()=>{
        alert("function component here")
    }
    return <div>
            <h1 onClick={red}>{props.text}</h1>
        </div>
    
}
