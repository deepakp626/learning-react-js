// import React from 'react'

// export default class Home extends React.Component{
//        render()
//        {
//           return(
//                <div>
//                 <h1>Home Component</h1>
//                 <h3>hii</h3>
//                </div>  
//           )
//        }
// }


// // Memo in react
// import React,{memo} from 'react'
// const Home = (props)=>{
//    console.warn("innre Component",props.data);
//    return(
//       <div>
//          <h1>Home Component</h1>
//       </div>
//    )
// }
// export default memo(Home)




import React from 'react'
class Home extends React.Component{
  render(
    ){
    return( <div>
     Home Component
    </div> )
    }
}
export default Home