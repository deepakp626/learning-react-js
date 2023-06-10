import React from 'react'
import './custom.css'
export default function Style(props) {

    const h2 ={
        color:"green",
        fontSize:"4rem"
    }
    const h3={
        color:'red',
        fontSize:'5rem'
    }
    return <div>
          {/* <h1 className="header">React Global Style</h1> */}
          <h1 className={props.data == "applay"?"header":''}>React condition Style</h1>
          {/* <h2 style={h2}>React Inline Style</h2> */}
          <h2 style={props.data == 'remove'?h2:h3}>React condition Style</h2>
    </div>
}