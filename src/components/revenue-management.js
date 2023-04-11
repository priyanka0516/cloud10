import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Revenue = () => {
  return (
    <>
    <div className="revenue-banner">
		<div className="banner-text">
		  {/* <h1>Revenue Management</h1> */}
		</div>
	  </div>
    <div className="why_work-withus">
    <div className="container">
    <div className="works">
    </div>
    <div className="row"> 
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <div className="left-asset">
        <h3 className="content-text">Pricing</h3>
        <ul className="diamond">
        <li ><p className="wrapper-text-sales">Set up pricing strategy</p></li>
        <li ><p className="wrapper-text-sales">Deploy market appropriate price</p></li>
        <li><p className="wrapper-text-sales">Monitor competition hotels pricing</p></li>
        <li><p className="wrapper-text-sales">Right distribution in channels</p></li>
        <li ><p className="wrapper-text-sales">Restriction management to opt for high yield business</p></li>
        <li ><p className="wrapper-text-sales">Managing inventory and price optimization</p></li>
        <li ><p className="wrapper-text-sales">Adopt best pricing tactics</p></li>
        <li ><p className="wrapper-text-sales">Right /effective segmentation</p></li>
        </ul>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Demand</h3>
        <ul className="diamond">
        <li ><p className="wrapper-text-sales">Mapping market demand : Use of technology to map demand</p></li>
        <li ><p className="wrapper-text-sales">Analyse 12 months demand drivers in a specific market</p></li>
        <li ><p className="wrapper-text-sales">Eagles eye on competition hotels behaviour to capture demand</p></li>
        <li ><p className="wrapper-text-sales">Conduct market research</p></li>
        <li><p className="wrapper-text-sales">Spot demand gaps</p></li>
        <li ><p className="wrapper-text-sales">Identify shift in guest preference and booking patterns, that might influence demand</p></li>
        </ul>   
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
    <div className="container">
    <div className="row"> 
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <div className="left-asset">
        <h3 className="content-text">Segments</h3>
    <ul className="diamond">
        <li><p className="wrapper-text-sales">Identify business segments and suggest right mix</p></li>
        <li><p className="wrapper-text-sales">Spot high potential business segments, contributing higher revenue</p></li>
        <li><p className="wrapper-text-sales">Segment wise occupancy and ADR forecast</p></li>
        <li><p className="wrapper-text-sales">Identify key source markets for each business segment</p></li>
        <li><p className="wrapper-text-sales">Create a segment wise pricing strategy and align the same with demand curve</p></li>
        </ul>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
      <img src={require('./../assets/Managing_revenue.png')} alt="" className=" "/> 
      </div>
    </div>
    <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
      <img src={require('./../assets/Revenue_Management.png')} alt="" className="asset-image1"/> 
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Channels</h3>
        <ul className="diamond">
        <li ><p className="wrapper-text-sales">Visibility in all channels</p></li>
        <li><p className="wrapper-text-sales">Analyze competitors channel strategy and align hotels action plans to win over competition</p></li>
        <li ><p className="wrapper-text-sales">Review channel productions</p></li>
        <li><p className="wrapper-text-sales">Content management</p></li>
        <li><p className="wrapper-text-sales">Reach out to right audience and measure response.</p></li>
        <li ><p className="wrapper-text-sales">Use system recommendation for optimized pricing</p></li>
        </ul>
        </div>
      </div>  
    </div>
    </div>
    </div>
   </>
  );
}; 
export default Revenue;