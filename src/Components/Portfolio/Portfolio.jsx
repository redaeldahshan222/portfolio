import "./portfolio.css"
import React, { Component } from 'react'
import img1 from "../img/port1.png"
import img2 from "../img/port2.png"
import img3 from "../img/port3.png"
import $ from 'jquery';


export default class Portfolio extends Component {
  componentDidMount = ()=> {
    $('.item').on('click',(e)=>{
      let currentImg = $(e.currentTarget).find("img").attr("src");
      $(".portfolio-info").removeClass("d-none")
      $('.portfolio-info img').attr("src",currentImg)
      this.forceUpdate(); 
    })
    $(document).on("click", function (e) {
    if (e.target === document.getElementById('lightBox')) {
    $(".portfolio-info").addClass("d-none")
    }
  });
    $(document).on('keydown',function(e){
      if(e.key==='Escape'){
      $(".portfolio-info").addClass("d-none")
      }
    });
  }
  componentDidUpdate = () => {
    document.getElementById("close").addEventListener('click',function(){
      $(".portfolio-info").addClass("d-none")
    })
  }
  render() {
    return (
      <>
      <div className="portfolio py-5">
          <div className="inner min-vh-100 py-5">
            <div className="container py-5 ">
              <h2 className=" text-center fw-bold">PORTFOLIO COMPONENT</h2>
              <div className="stars-icon text-center">
                <i className="fa-solid fa-star icon"></i>
              </div>
                <div className="row g-5">
                  <div className="col-lg-4">
                    <div className="item ">
                      <img className="w-100" src={img1} alt="img1" />
                      <div className="layer">
                      <i className="plus fa-solid fa-plus fa-5x text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item ">
                      <img className="w-100" src={img2} alt="img1" />
                      <div className="layer">
                      <i className="plus fa-solid fa-plus fa-5x text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item ">
                      <img className="w-100" src={img3} alt="img1" />
                      <div className="layer">
                      <i className="plus fa-solid fa-plus fa-5x text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item ">
                      <img className="w-100" src={img1} alt="img1" />
                      <div className="layer">
                      <i className="plus fa-solid fa-plus fa-5x text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item ">
                      <img className="w-100" src={img2} alt="img1" />
                      <div className="layer">
                      <i className="plus fa-solid fa-plus fa-5x text-white"></i>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="item ">
                      <img className="w-100" src={img3} alt="img1" />
                      <div className="layer">
                      <i className="plus fa-solid fa-plus fa-5x text-white"></i>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      <div id="lightBox" className="portfolio-info d-none">
            <div className="img">
              <img id="info-img" src={img1} alt="img-info" />
              <i id="close" className="close text-white fa-solid fa-circle-xmark fa-2x"></i>
          </div>
      </div>
      </>
    )
  }
}
