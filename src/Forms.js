// import { upload } from '@testing-library/user-event/dist/upload';
// import React from 'react'
// import React,{useEffect,useState} from 'react'
 
// const Forms = ()=> {
//   const [count,setCount]= useState(1)
//   useEffect(()=>{
//     console.warn(count)
//   },[count])
//   return (
//     <div>
//         <h1>Use Effect Hooks in React js ... {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Update state</button>
//     </div>
//   );
// };


//// submit form
// class Forms extends React.Component {
//   constructor(){
//     super();
//     this.setState ={
//       user:null,
//       password:null
//     }
//   }
//   submit(){
//     console.log(this.state)
//   }
//   render(){
//     return (
//       <div>
//         <h1>Form Hanling</h1>
//         <input 
//         type="text" 
//         name="user"
//         onChange={(e)=>{this.setState({password:e.target.value})}}
//         ></input>
//         <br></br>
//         <br></br>
//         <input 
//         type="password" 
//         name="password"
//         onChange={(e)=>{this.setState({password:e.target.value})}}
//         ></input>
//         <br></br>
//         <br></br>
//         <button onClick={()=>this.submit()}>submit</button>
//       </div>
//     )
//   }
// }





// export default Forms;