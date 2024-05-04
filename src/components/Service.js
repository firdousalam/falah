import React from 'react';
import thumbone from "../images/download.jpg";
import cote from "../images/cote.png";
import introImage from "../images/intro-Img.png";

export default function Service() {
  return (
    <section className="services" id="services">
        <div className="wrapper">
            <h2>Our Services</h2>
            <p className="sm-col"></p>
            <div className="services-wrapper">
                <div className="sItem">
                <div className="sec-Left">
                    <img src={thumbone} alt="" />
                </div>
                   
                    <p><strong>Manpower Supply</strong> Al Qannaatii-BKC Group of Companies provides various categories of skilled and unskilled labor to major establishments focusing on Contracting, Industries, Construction and Refineries across United Arab Emirates. We work with dedication and passion to provide uninterrupted service to our clients to fulfill their goals in a timely manner.

                We provide almost all categories of workers as given below:
                    <ul>
                        <li>Mechanical</li>
                        <li>Electrical & Cabling</li>
                        <li>Civil/Construction</li>
                        <li>Plumbing</li>
                        <li>Painting</li>
                        <li>Fabrication & Erections</li>
                        <li>Operators</li>
                        <li>Drivers</li>
                    </ul>
    
                </p>
 
                </div>
                <div className="sItem">
                <div className="sec-Left">
                    <img src={thumbone} alt="" />
                </div>
                    <p><strong>HSE (Health Safety and Environment)</strong> Al Qannaatii is a leading provider of world class services to our clients in United Arab Emirates. We believe that the HSE is integral and essential part of the way we do our business. We strive to provide our clients best services keeping in mind the safety and health of our workers/employees and work in a way that no harm is done to the environment.

 

To us HSE excellence means working towards an incident free workplace, finding business driven value in HSE, integrating HSE into operations and using our HSE program as a source of competitive advantage. We are continually striving to improve our performance in each of these areas and are committed to integrating HSE into our operations.</p>
                </div>
                                                              
            </div>
            <h2>Conditions We Treat</h2>
            <div className="crow">
                <div className="col-l">
                    <p>Al Qannaatii-BKC Group of Companies was established in the year 2002 with its headquarters in Sharjah and subsidiary offices in Dubai and Ajman .Over the years the company has evolved into one of the leading Manpower Supply & Outsourcing Group in the United Arab Emirates. </p>
                </div>
                <div className="col-r">
                    <p>We believe in taking a whole-person approach to care, which means that we'll work with you to identify the underlying causes of your pain or discomfort.</p>
                </div>
            </div>
        </div>
        <div className="fullWrap">
            <div className="colLeft">
                <img src={introImage} alt="" />
            </div>
            <div className="colRight">
                <img src={cote} alt="" />
                <p>By addressing these root issues, we can help you achieve long-term relief and improved overall wellness.</p>

            </div>
        </div>            
    </section>
  );
}
