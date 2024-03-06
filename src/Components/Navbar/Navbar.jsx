import { Link } from "react-router-dom"
import "./Navbar.css"
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg fs-5 nav-bg-color fixed-top">
    <div className="container">
    <Link className="navbar-brand text-uppercase fs-1 text-white" to="/">start framework</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-uppercase gap-4">
        <li className="nav-item">
          <Link className="nav-link text-white" aria-current="page" to="/about">about</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/portfolio">portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
  }
}