import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Marketingplan = () => {
  return (
    <>
    <div className="marketingplan-banner">
      <div className="container">
      {/* <div className="centered">Guest Satisfaction</div> */}
      </div>
    </div>
    <div className="asset-about">
     <div className="container-fluid">
      <div className="hhh">
        <div className="row">
        <h2>Our <span className="content-text">Plan</span></h2>
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-8 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Marketing Plan</h3>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Create a marketing plan considering all elements of Marketing initiatives for the whole year.</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Align Marketing plan with hotels Business plan.</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Incoporate a measurement matrix in the plan to capture ROI.</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Incapsulated budgeted expenses of each marketing inititatives in the plan.</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Review marketing plan in accordance with hotels performance.</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Amalgamate marketing plan with hotels marketing strategies. </p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-4 order_2 bg1">
      <div className="left-asset">
        <h3 className="content-text">Elements</h3>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Digital marketing</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Photography</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>PR and Media engagements</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Paid advertisements in all channels</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Influencers and travel writers</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Promotions of Food & Beverages</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Special offers for room , spa</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Sponsorship and listings</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>BTL activities specific to target groups</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Life style events</p>
        </div>
      </div>
      {/* <div className="col-sm-12 col-xs-12 col-md-12  col-lg-4 order_2 bg1">
      <img src={require('./../assets/Marketing_Mix.jpg')} alt="" className="asset-image"/> 
      </div> */}
        </div>   
       </div>
     </div>
    </div>
   </>
  );
}; 
export default Marketingplan;