import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import "./Layout.css"
import React, { Component } from 'react'
import { Outlet } from "react-router-dom"
import $ from 'jquery'

export default class Layout extends Component {
  componentDidMount=()=>{
    $(window).on('scroll',()=>{
      let windowScroll=$(window).scrollTop();
      windowScroll > 0 ? $("nav").css({height:'50px'}):$("nav").css({height:'100px'});
    });
    $('nav ul li').on('click',function(e){
      $(e.target).addClass('active');
      $(e.target).parents().find('.nav-link').not(e.target).removeClass('active');
    });
    $(".navbar-brand").on('click',function(e){
      $(e.target).parents().find('.nav-link').not(e.target).removeClass('active');
    });
  }
  render() {

    return <>
    <Navbar/>
    <Outlet/>
    <Footer />
    </>
  }
}
