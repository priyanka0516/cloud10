import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Energyasset = () => {
  return (
    <>
    <div className="energy-banner">
		<div className="banner-text">
		  <h1>Energy <br/>Asset Management</h1>
		</div>
	  </div>
    <div className="asset-about">
     <div className="container-fluid">
      <div className="hhh">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Energy Asset Management</h3>
        <p className="wrapper-text">Cloud10 brings in strategic and operational level of Revenue Management support through a series of activities specially customized for increasing hotel revenue. We assist hotels with a full deck of analytical and intuitive inputs on managing rates, content and digital sales platforms. Additionally, we optimize productivity from all other segments of business like Corporates, Leisure and MICE. When a hotel outsources the Revenue Management activity to cloud10; it essentially is signing up for quality and consistency.</p>
        <p className="wrapper-text">As an institution built on knowledge-leadership, we help your hotel in de-risking itself from an individual’s thought process. The hotel can claim the advantages of yield management at a fraction of what it would cost it to hire full-time resources. Our objective is to achieve a market share which is significantly higher than the fair share. Over time, our hotels have benefited from a higher RevPAR and improved profitability.</p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <img src={require('./../assets/hotel-energy-management-system.png')} alt=""/>
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
      <h1 className="work-with-us-heading">Why Work With Us?</h1><br/>
    </div>
    <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Revenue Management</h3>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Most hotels inadvertently operate with inefficient and inadequate revenue management processes.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Medium sized and independent hotels often find it challenging to appoint, train and retain high quality revenue management talent.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Our experts bring years of online and off-line revenue management and hotel operations experience across markets.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>We guarantee an improvement in the RevPAR of the hotels.</p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <img src={require('./../assets/revenue2.png')} alt="" className="asset-image"/>
      </div>
    </div>
    </div>
    </div>
   </>
  );
}; 
export default Energyasset;