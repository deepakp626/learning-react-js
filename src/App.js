import React from 'react';
import './App.css';
// import Profile from './Profile-1-to-10';
// import Profile from './Profile'
import User from './User'



// function App() {
//   return (
//     <div className="App">
//         <Profile />
//     </div>
//   );
// }

// export default App;

// // // ******  componenntDidMount() ****************
// export default class App extends React.Component {
//     constructor(){
//       super();
//       this.state={
//           data:null,
//       }
//       console.warn('constructor')
//     }
//     componentDidMount(){
//       this.setState({data:"update"})
//       console.warn('componentDidMount')
//     }
//     render(){
//       console.warn('render')
//       return (
//               <div>
//                 <h1>life cycle method : componentDidMount</h1>
//               </div>
//       )
//     }
// }




// // // ******  componenntDidUpdate() ****************
// export default class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//         active:null,
//         who:null,
//     }
//     console.warn('constructor')
//   }
//   componentDidUpdate(){
//     // this.setState({data:"update"})
//     console.warn('componentDidUpdate')
//     if (this.state.who == null) {
//       this.setState({who:"deepak prajapat"})
//     }
//   }
//   render(){
//     console.warn('render')
//     return (
//             <div>
//               <h1>React componentDidUpdate {this.state.who}</h1>
//               <button onClick={()=>{this.setState({active:"yes"})}}>Click</button>
//             </div>
//     )
//   }
// }



// // ******  componenntDidUpdate() ****************
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
        toggle:true,
    }
    console.warn('constructor')
  }
  render(){
    console.warn('render')
    return (
            <div>
              <h1>React componentWillUnmount</h1>
              {
                this.state.toggle?
                <User /> :null
              }
              <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
            </div>
    )
  }
}
