import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Asset = () => {
  return (
    <>
    <div className="asset-banner1">
      <div className="container">
      <div className="centered">Asset Management</div>
      </div>
    </div>
     <div className="asset-about">
     <div className="container-fluid">
      <div className="hhh">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Asset Management</h3>
        <p className="wrapper-text">Cloud10 Asset Management is a team of hotel experts that is focused on optimizing the returns from operating hotel business. We unlock the true potential of a hotel asset by assisting the unit operations team to challenge the status quo. By using market intelligence, logical assessment and industry best practices, we offer a perspective of balancing hotel operations with the financial objectives of the owner/ investors.</p>
        <p  className="wrapper-text">In branded hotels, our inputs are geared towards reducing an environment of ‘trust deficit’ and in making the owner and the operator acknowledge each other’s point of view. In unbranded or independently run hotels; we fill up the ‘knowledge deficit’ by detailed operational involvement.</p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
      <img src={require('./../assets/asset.png')} alt=""/>
      </div>
       </div> 
       </div>
     </div>
   </div>
   <div className="role">
    <div className="container">
      <p>We incepted with a vision to provide unsurpassed management advisory to stand-alone, branded and unbranded hotels, resorts and restaurants to maximize their return on investment.</p>
    </div>
  </div>
  <div className="why_work-withus">
    <div className="container-fluid">
    <div className="works">
      <h1 className="work-with-us-heading">Why Work With Us?</h1><br/>
    </div>
    <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Asset Management</h3>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Asset Management can lead to short and long-term gains for hotel investors.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>In the short run, improved revenues or reduced costs can vastly improve business cashflows.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>In the longer term, improvement in EBITDA typically leads to a 10x – 12x increase in the valuation of the asset.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>The Cloud10 Asset Management team comprises of experts with high quality domain expertise and relevant industry experience.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Our interests are aligned with that of the ownership of the hotel.</p>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Cloud10 also partners with subject matters experts in the field of engineering, procurement, human resource and internal controls which allows for providing only the highest quality advice to its clients.</p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <img src={require('./../assets/food.jpg')} alt="" className="asset-image"/>
      </div>
    </div>
    </div>
  </div>
   </>
  );
}; 
export default Asset;