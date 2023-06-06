import React from "react";


//*******  Event handling with class component
// export default class Profile extends React.Component
// {
//     testFun(){
//         alert("fun called")
//     }
//     render(){
//         return (
//             <div>
//                 <h1>Profile</h1>
//                 <button onClick={()=> this.testFun()}>click</button>
//             </div>
//         )
//     }
// }

////*********  Event with function component
// export default function Profile()
// {
//     const  testFun = ()=>{
//         alert("testfun called")
//     }
//         return(
//             <div>
//                 <h1>Profile</h1>
//                 <button onClick={testFun}>click</button>
//             </div>
//         )
// }


//********* life cycle method
export default class Profile extends React.Component
{
    constructor(){
        super();
        console.log("constructor")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    render(){
        console.log("render")
        return (
            <div>
                {/* <h1>Profile</h1>
                <button>click</button> */}
            </div>
        )
    }
}