//// lazy load
// import React from 'react'
// class About extends React.Component{
//   render(
//     ){
//     return( <div>
//         <h1>About Component</h1>
//     </div> )
//     }
// }


//// type checking with propstype
import React, { Component } from 'react'
import PropTypes from 'prop-types'
class About extends Component {
  render() {
    return (
      <div>
          <h1>About Component</h1>
      <h2>{this.props.age} </h2>
      <h2>{this.props.name} </h2>
      </div>
    )
  }
}

About.propTypes={
  age: PropTypes.number,
  name: PropTypes.string,
}
export default About;