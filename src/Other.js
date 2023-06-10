import React, { Component } from 'react'
import reactDom from 'react-dom'
export default class Other extends Component {
  render() {
    return reactDom.createPortal(
        <h1>Portal Component</h1>,
        document.getElementById('other-root')
    )
  }
}
