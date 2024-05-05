import React from 'react';
import introImage from "../images/download (3).jpg";
import oneicon from "../images/1.jpg";

export default function Intro() {
  return (
    <section className="intro">
        <div className="wrapper">
            <p className="text-center smCol">FALAH ALKHAIR TECHNICAL SERVICES CO®.</p>
            <div className="sec-wrapper">
                <div className="sec-Left">
                    <img src={introImage} alt="" />
                </div>
                <div className="sec-Right">
                    {/* <figure><img src={oneicon} alt="" /></figure> */}
                    <p>FALAH ALKHAIR TECHNICAL SERVICES CO Group of Companies was established in the year 2002 with its headquarters in Sharjah and subsidiary offices in Dubai and Ajman .Over the years the company has evolved into one of the leading Manpower Supply & Outsourcing Group in the United Arab Emirates. We have been actively involved in various services and were able to meet the man power demands of major construction & contracting companies, industries and refineries.

</p>
                    <p>With over 6000 personnel of well-trained skilled and unskilled labors on our payroll, we are able to provide multi-skilled solutions to suit our client’s requirements and pride ourselves in being able to service client projects across the United Arab Emirates.</p>
                </div>
            </div>
        </div>
    </section>
  );
}
