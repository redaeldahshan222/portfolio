import "./Contact.css";
import React, { Component } from "react";
import $ from 'jquery'

export default class Contact extends Component {
  componentDidMount(){
    $('.form input').on('input',function(){    
      $('.form .userNameInput').val().length === 0 ? $('.form .userNameLabel').slideUp(200): $('.form .userNameLabel').slideDown(200);
      $('.form .userAgeInput').val().length === 0 ? $('.form .userAgeLabel').slideUp(200): $('.form .userAgeLabel').slideDown(200);
      $('.form .userEmailInput').val().length === 0 ? $('.form .userEmailLabel').slideUp(200): $('.form .userEmailLabel').slideDown(200);
      $('.form .userPasswordInput').val().length === 0 ? $('.form .userPasswordLabel').slideUp(200): $('.form .userPasswordLabel').slideDown(200);
    })
  }
  render() {
    return (
      <>
        <div className="contact py-5">
          <div className="inner min-vh-100 py-5">
            <div className="py-5 ">
              <h2 className=" text-center">CONTACT SECTION</h2>
              <div className="star-icon text-center">
                <i className="fa-solid fa-star icon"></i>
              </div>
              <div className="form d-flex justify-content-center align-items-center flex-column gap-3 py-5">
                <div className="data">
                <label className="userNameLabel text-success"  htmlFor="userName">userName</label>
                <input className="userNameInput form-control w-50" type="search" placeholder="userName" id="userName"/>
                </div>
                <div className="data">
                <label className="userAgeLabel text-success" htmlFor="userAge" >userAge</label>
                <input className="userAgeInput form-control w-50" type="number" placeholder="userAge" id="userAge"/>
                </div>
                <div className="data">
                <label className="userEmailLabel text-success" htmlFor="userEmail" >userEmail</label>
                <input className="userEmailInput form-control w-50" type="email" placeholder="userEmail" id="userEmail"/>
                </div>
                <div className="data">
                <label className="userPasswordLabel text-success" htmlFor="userPassword" >userPassword</label>
                <input className="userPasswordInput form-control w-50" type="password" placeholder="userPassword" id="userPassword"/>
                </div>
                <input className="btn btn-success" type="button" value="send Message"  id="user"/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
