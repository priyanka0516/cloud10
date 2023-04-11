import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const About = () => {
  return (
    <>
    <div className="asset-banner">
      <div className="container">
      <div className="centered">About Us</div>
      </div>
    </div>
    <div className="center-vertical">
<div className="about-section-page">
<div className="container">
  <div className="row">
    <div className="col-12 col-lg-6 mb-4 mb-lg-0">
      <h2 className="text-head">Why Us?</h2>
      <p className="wrapper-about-text ">Cloud10 hospitality team of experts create and gives you end-to-end functional solution that includes most important elements of hotel management  - business development and revenue maximisation, guest love and loyalty, data capture and synergize to produce stronger performance, profit engineering to enhance financial benefits.</p>
    <div className="row">
    <div className="col-12 col-lg-4 mb-2 mb-md-0">
      <div className="about-box">
        <h4 className="mb-0">Total Clients</h4>
        <p className="mb-0">15</p>
      </div> 
      </div>
      <div className="col-12 col-lg-4 mb-2 mb-md-0">
      <div className="about-box">
        <h4 className="mb-0">Projects Done</h4>
        <p className="mb-0">10</p>
      </div>    
      </div>
      <div className="col-12 col-lg-4 mb-2 mb-md-0">
      <div className="about-box">
        <h4 className="mb-0">Work Experience</h4>
        <p className="mb-0">1+</p>
      </div>    
      </div>
    </div>
    </div>
    <div className="col-12 col-lg-6">
      <div className="image-head">
      <img src={require('./../assets/job-portal.png')} alt=""/>
      </div>
    </div>
  </div>
</div>
</div>
    </div>
    <div className="role">
      <div className="about-section-mission">
      <div className="container">
        <div className="row">
        <div className="col-md-3">
          <div className="left-mission">
        <img src={require('./../assets/mission.png')} alt=""/>    
        </div>
          </div>
          <div className="col-md-3">
          <h2>Our<br/>Mission <br/>& Vision</h2>
          </div>
        <div className="col-md-6">
        <p>Our mission is to be recognized as the best hospitality management company in India and cultivating long-term relationships with  our clients to build a bond and integrity and achieve maximum Profit from their operations.</p>
      </div>
      </div>
      </div>
      </div>
    </div>
    <div className="why_work-withus">
      <div className="container">
      {/* <div className="works">
        <h1 className="work-with-us-heading">Why Work With Us?</h1><br/>
      </div> */}
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-8 order_2 bg1">
          <div className="left-asset">
          <h3 className="content-text">OUR STRENGTHS</h3>
          <ul className="diamond">
            <li><p className="wrapper-text-sales">We understand the business of managing hotels.</p></li>
            <li><p className="wrapper-text-sales">Great understanding of sales and marketing efforts required to position a hotel in the competitive marketplace.</p></li>
            <li><p className="wrapper-text-sales">We collaborate and not just command.</p></li>
            <li><p className="wrapper-text-sales">We promised to give you profit.</p></li>            
            <li><p className="wrapper-text-sales">Cloud10 also partners with subject matters experts in the field of engineering, procurement, human resource and internal controls which allows for providing only the highest quality advice to its clients.</p></li>  
            <li><p className="wrapper-text-sales">Our interests are aligned with that of the ownership of the hotel.</p></li>
          </ul>
          </div>
        </div>
        <div className="col-sm-12 col-xs-12 col-md-12  col-lg-4 order_2 bg1">
        <div className="image-head1">
        <img src={require('./../assets/k.png')} alt="" />
        </div>
        </div>
      </div>
      </div>
    </div>  
   </>
  );
}; 
export default About;