import React from 'react';

import whatsapp from "../images/Whatsapp.png";
import map from "../images/googlemap.png";

export default function Contact() {
  return (
    <section className="contact" id="contact">
        <div className="wrapper">
            <p>If you're ready to take the first step towards a healthier, more vibrant life, contact us today to schedule an appointment.</p>
            <p>We'll be happy to answer any questions you may have about our services and help you get started on your journey towards optimal health and wellness.</p>
            <div className="contacwrap">
                <a
                    href="https://wa.me/+971523969664"
                    target="_blank"
                    rel="noreferrer"
                >  
                    <figure><img src={whatsapp} alt="" /></figure> 
                </a>
                <h2>Enquiries . Appointments
                    <span>
                        <a
                            href="https://wa.me/+971523969664"
                            target="_blank"
                            rel="noreferrer"
                        >  017-632 6079 </a>
                    </span>
                </h2>
                    
                <p > Operating Hours<br/>MON - SAT : 10am - 5pm<br/>FRIDAY/PUBLIC HOLIDAYS : CLOSED</p>
            </div>
        </div>
        <div className="map">
            <img src={map} alt="" />
        </div>
    </section>
  );
}
