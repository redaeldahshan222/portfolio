import "./About.css"
import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <>
      <div className="about py-5 home-bg-color ">
        <div className="caption text-center vh-100 text-white d-flex align-items-center justify-content-center">
          <div className="container">
          <h2 className="fw-bold">ABOUT COMPONENT</h2>
        <div className="stars">
        <i className="fa-solid fa-star icon"></i>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="p1">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p2">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
          </div>
        </div>
      </div>
      </>
      )
  }
}
