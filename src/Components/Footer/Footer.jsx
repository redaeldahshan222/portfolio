import { Link } from "react-router-dom"
import "./Footer.css"
import React, { Component } from 'react'

export default class Footer extends Component {
render() {
    return (<>
    <div className="footer">
        <div className="info text-white footer-bg-color">
    <div className="container py-5">
            <div className="row">
                <div className="col-lg-4">
                    <div className="location">
                        <h4>LOCATION</h4>
                        <p>2215 John Daniel Drive</p>
                        <h6>Clark, MO 65243</h6>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="social text-center">
                        <h4 className="fs-2">AROUND THE WEB</h4>
                        <ul className="list-unstyled d-flex justify-content-center fs-3 gap-3 ">
                            <li>
                                <Link target="_blank" className="text-white link" to="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></Link>
                            </li>
                            <li>
                            <Link target="_blank" className="text-white link " to="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></Link>
                            </li>
                            <li>
                            <Link target="_blank" className="text-white link" to="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></Link>
                            </li>
                            <li>
                            <Link target="_blank" className="text-white link" to="https://www.google.com"><i className="fa-solid fa-globe"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="about text-center">
                        <h4 className="">ABOUT FREELANCER</h4>
                        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyRight text-center copyRight-bg-color py-3 fixed-bottoms ">
            <p>Copyright © Your Website 2021</p>
        </div>
    </div>
    </div>
    </>
    )
}
}
