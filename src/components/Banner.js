import React from 'react';
import banner from "../images/994pr3.jpg"

export default function Banner() {
  return (
    <section className="banner">
        <div className="wrapper">
            <div className="bannerTop">
                <h1>FALAH ALKHAIR TECHNICAL SERVICE CO.</h1>
                <a href="#contact" className="bannerBtn"><img src="./assets/img/whatsapp-sm.png" alt="" /> Enquiries / Appointments</a>
            </div>
            <img src={banner} className="mBanner" alt="" />
        </div>
    </section>
  );
}
