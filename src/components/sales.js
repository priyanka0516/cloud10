import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Sales = () => {
  return (
    <>
    <div className="sales-banner">
      <div className="container">
      <div className="centered">Sales process</div>
      </div>
    </div>
    <div className="asset-about">
     <div className="container-fluid">
      <div className="hhh">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Sales process & effective methods</h3>
        <p className="wrapper-text"><span><FaHandPointRight/></span>Identify business segments for the hotels</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Capture guest profile create segment strategies</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Review and enhance strategies for contracted, MICE,
            leisure groups and wedding segments</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>RFP process for Rooms and Banquets</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Create strategies aligned with demand, market dynamics and competitions behaviors</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Sales performance review and identify gaps</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Corrective steps to recover market share</p>
          <p className="wrapper-text"><span><FaHandPointRight/></span>Training and SOPs for Sales team</p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      {/* <img src={require('./../assets/sales.jpg')} alt="" className="asset-image"/>  */}
      </div>
      </div>
      </div>
     </div>
    </div>
   </>
  );
}; 
export default Sales;