// import React from "react";
// import React,{useState} from 'react';
import "./App.css";
// import Profile from './Profile-1-to-10';
// import Profile from './Profile'
// import User from './User'
// import Forms from "./Forms";
// import Style from "./Style";
// import Home from "./cmp/Home";
// import About from "./cmp/About";
// import Forms from "./cmp/Forms";
// import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


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

// // // ******  componenntWillUnmount() ****************
// export default class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//         toggle:true,
//     }
//     console.warn('constructor')
//   }
//   render(){
//     console.warn('render')
//     return (
//             <div>
//               <h1>React componentWillUnmount</h1>
//               {
//                 this.state.toggle?
//                 <User /> :null
//               }
//               <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>Delete User</button>
//             </div>
//     )
//   }
// }

// // react Hooks
// function App()
// {
//     const [count,setCount] = useState(0)
//     console.warn("hii")
//     return (
//         <div>
//             <h1>Hooks in function cmp {count}</h1>
//             <button onClick={setCount(count+1)}>Increment</button>
//         </div>
//     )
// }
// export default App;

// react Hooks
// function App()
// {
//     return (
//         <div>
//             <Forms />
//         </div>
//     )
// }


//// form validation
// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       password: "",
//       nameError: "",
//       passwordError: "",
//     };
//   }
//   valid() {
//     if (!this.state.name.includes("@") && this.state.password.length < 5) {
//       this.setState({ nameError: "invalid Name",passwordError: "invalid Password"});
//     } else if (!this.state.name.includes("@")) {
//       this.setState({ nameError: "invalid Name" });
//     } else if (!this.state.password.length < 5) {
//       this.setState({ passwordError: "invalid password" });
//     }else{
//         return true;
//     }
//   }
//   submit() {
//     this.setState({ nameError: "",passwordError: ""})
//     if (this.valid()) {
//       alert("Form has been submit");
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>Form validation</h1>
//         <input
//           type="text"
//           onChange={(event) => {
//             this.setState({ name: event.target.value });
//           }}
//         ></input>
//         <p>{this.state.nameError}</p>
//         <input
//           type="password"
//           onChange={(event) => {
//             this.setState({ password: event.target.value });
//           }}
//         ></input>
//         <p>{this.state.passwordError}</p>
//         <button
//           onClick={() => {
//             this.submit();
//           }}
//         >
//           Submit
//         </button>
//       </div>
//     );
//   }
// }



//// listing with map function
// class App extends React.Component {
//     constructor() {
//       super();
//       this.state = {
//           list:[
//             {name:'name-1',phone:'111',email:'1@email.com'},
//             {name:'name-2',phone:'222',email:'2@email.com'},
//             {name:'name-3',phone:'333',email:'3@email.com'},
//           ]
//          }
       
//     }

//     render() {
//       return (
//         <div>
//             <h1>Listing</h1>
//             {
//                 this.state.list.map((item)=>{
//                     console.warn(item)
//                     // <h2>Name:{item.name}</h2>
//                     // <h2>phone:{item.phone}</h2>
//                     // <h2>Email:{item.email}</h2>

//                 })
//             }
//         </div>
//       );
//     }
//   }

/////// react style
// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <Style data="applay"/>
//          </div>
//       )
//    }
// }


/////// Routing

// class App extends React.Component {
//    render() {
//       return ( <div>
//          <Router>
//             <Link to="/">Home </Link>
//             <Link to="/about">About</Link>
//             <Link to="/forms">Forms</Link>

//           <Route extact path="/" component={Home}></Route>
//             <Route  />
//             <Route path="/about" component={About} />
//             <Route path="/forms" component={Forms} />
//          {/* <Home />
//          <About />
//          <Forms /> */}
//          </Router>
//       </div>
//       )
//    }
// }


/////  calling API
// class App extends React.Component {
//    constructor() {
//          super();
//          this.state = {
//             users: null,
//          }
//    }
//    componentDidMount(){
//        fetch("https://reqres.in/api/users").then((resq)=>{
//            resq.json().then((result)=>{
//             console.warn(result.data);
//               this.setState({user: result.data})
//            })
//        })
//    }
//    render() {
//       return (<div>
//             <h1>Fetch API data</h1>
//             {
//                this.state.users?
//                this.state.users.map((item,i)=>{
//                   <div><p>{i}--- 
//                   {item.first_name} 
//                   {item.last_name}---
//                   {item.email}</p></div>
//                }):
//                null
//             }
//       </div>)
//    }
// }




/////  Portal Component
// import Other from "./Other";
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//          <h1>React Portal</h1>
//          <Other />
//       </div>
//     )
//   }
// }




import React from "react";
class App extends React.Component {
  constructor(){
    super();
    this.useRef = React.createRef()
  }
  editVal(){
    // console.warn(this.useRef)
    // this.useRef.current.focus()
    this.useRef.current.value = "123"
  }
  render() {
    return (
      <div>
         <h1>What is Ref in React</h1>
         <input ref={this.useRef} type="text" name="user"></input>
         <button onClick={()=>{this.editVal()}}>Click</button>
      </div>
    )
  }
}

export default App;
