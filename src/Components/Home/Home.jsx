import "./Home.css";
import avatar from "../img/avatar.svg"
import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    return (
      <>
      <div className="home py-5 home-bg-color d-flex align-items-center justify-content-center">
        <div className="caption text-center text-white">
        {/* <img className="w-15" src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="pic "/> */}
        <img className="w-15" src={avatar} alt="pic "/>
        <h1>START FRAMEWORK</h1>
        <div className="star">
        <i className="fa-solid fa-star icon"></i>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
      </>
    )
  }
}
