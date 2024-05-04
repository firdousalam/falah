import React from 'react';
import damansarac from '../images/damansara-chiropractic.png';
import damansaracLogo from "../images/damansara-chiropractic-logo.png"

export default function Header() {

  return (
    <header className="header" >
        <div className="wrapper">
            <div className="hLeft">
                <a href="#scrolltop">
                    <span className="logo"><img src={damansaracLogo} alt="" /></span>
                    <img src={damansarac} alt="damansarac" className="logo logiImage"  />
                </a>
            </div>
            <div className="hRight">
                <button class="mob-menu" data-bs-toggle="collapse"  data-bs-target="#navbarSupportedContent"><i class="fa fa-bars" aria-hidden="true"></i></button>
                <ul id="navbarSupportedContent">
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#team">Meet Our Team</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
    </header>
  );
}
