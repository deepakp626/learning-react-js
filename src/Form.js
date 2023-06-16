import React, { Component, pureComponent } from 'react'

export default class Form extends pureComponent {
    constructor(){
        super();
        this.state ={
             data:10,
        }
    }
  render() {
    console.warn(this.state)
    return (<div>
        <h1>Pure Component {this.state.data}</h1>
        <button onclick={()=>{this.setState({data:10})}}>Update State</button>
    </div>
    )
  }
}
