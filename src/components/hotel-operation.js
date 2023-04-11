import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Hoteloperation = () => {
  return (
    <>
    <div className="hoteloperation-banner">
		<div className="banner-text">
		  {/* <h1>Digital <br/>Marketing</h1> */}
		</div>
	  </div>
    <div className="asset-about">
     <div className="container-fluid">
      <div className="hhh">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Revpar growth</h3> 
        <ul className="diamond">
        <li><p className="wrapper-text-sales">Strong performance to start the year</p></li>
          <li><p className="wrapper-text-sales">Sharp growth projected in 2023</p></li>
          <li><p className="wrapper-text-sales">60 % of properties recovered RevPar vs 2019</p></li>
        </ul> 
        <h3 className="content-text">Trends</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">Phase out travel restrictions</p></li>
          <li><p className="wrapper-text-sales">Travel is no longer bound to traditional ‘peak and off-peak’ seasons</p></li>
          <li><p className="wrapper-text-sales">Price remains a primary concern</p></li>
          <li><p className="wrapper-text-sales">Travelers add leisure time to business travel</p></li>
          <li><p className="wrapper-text-sales">More and more digitization to select destination and hotel</p></li>
          <li><p className="wrapper-text-sales">Smart hotel technology that excites guest</p></li>
          <li><p className="wrapper-text-sales">Growing preference for eco friendly and sustainable hotel</p></li>
          <li><p className="wrapper-text-sales">Travelers want to have authentic experience that reflects local culture</p></li>
        </ul> 
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">

      <div className="boxer">
        <img src={require('./../assets/dept_sihom.jpg')} alt=""/>
        </div>  

       
      </div>
       </div> 
       </div>
     </div>
    </div>
    <div className="example-header">
      <h1 className="text-center">Let's Work Together</h1>
      <p>We are here to give you profit</p>
    </div>
    <div className="why_work-withus">
    <div className="container-fluid">
    <div className="works">
      <h1 className="work-with-us-heading">What Owners Want?</h1><br/>
    </div>
    <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Profit</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">Smart pricing to fatten up profit</p></li>
          <li><p className="wrapper-text-sales">Reduce cost of sales</p></li>
          <li><p className="wrapper-text-sales">Effective utilization of available human resource,restrict increase of payroll cost</p></li>
          <li><p className="wrapper-text-sales">Optimize energy cost</p></li>
          <li><p className="wrapper-text-sales">Smart procurement</p></li>
          <li><p className="wrapper-text-sales">Replenish eroded profit happened during Pandemic time</p></li>
        </ul>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <div className="left-asset">
        <h3 className="content-text">Growth</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">Reset hotel’s positioning</p></li>
          <li><p className="wrapper-text-sales">Quarter wise growth, beat off-season slack</p></li>
          <li><p className="wrapper-text-sales">Opportunity pricing during exceptional high demand dates</p></li>
          <li><p className="wrapper-text-sales">Fare market share and RGI rank</p></li>
          <li><p className="wrapper-text-sales">Strong F&B performance</p></li>
          <li><p className="wrapper-text-sales">Robust Business Plan backed by forecast accuracy</p></li>
          <li><p className="wrapper-text-sales">Enhanced visibility of the hotel</p></li>
          <li><p className="wrapper-text-sales">Stronger community connect</p></li>
        </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
    
   </>
  );
}; 
export default Hoteloperation;