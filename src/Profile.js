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


// export default function Profile(props) {
//     return (<div>
//             <h1 >{props.text.name}</h1>
//             <h1 >{props.data}</h1>
//         </div>)
    
// }


export default class Profile extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.text.name}</h1>
                <h1>{this.props.data}</h1>
            </div>
        )
    }
}
