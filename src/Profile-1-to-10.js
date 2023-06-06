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

// props example
// export default class Profile extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.text.name}</h1>
//                 <h1>{this.props.data}</h1>
//             </div>
//         )
//     }
// }



// // state example
// export default class Profile extends React.Component(){
//     constructor(){
//          super();
//          this.state = {
//             name:"peter",
//             email:"preter@gmail.com",
//             count:0,
//          }
//     }
//     updateState(){
//         this.setState({
//             name : "brute",
//             count:this.state.count+ 1,
//         })
        
//     }
//      render(){
//         return(
//             <div>
//                 <h1>Count : {this.state.count}</h1>
//                 <h1>Email : {this.state.email}</h1>
//                 <h1 onClick={() => { this.updateState()}}>Hello {this.state.name}</h1>
//             </div>
//         )
//      }
// }




// // Event handling
