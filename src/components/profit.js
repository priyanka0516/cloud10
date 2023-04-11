import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Profitmanage = () => {
  return (
    <>
    <div className="profit-banner">
      <div className="container">
      {/* <div className="centered">Guest Satisfaction</div> */}
      </div>
    </div>
    <div className="asset-about">
     <div className="container">
      <div className="hhh">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Profit engineering</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">Protect & enhance profit (GOP)</p></li>
          <li><p className="wrapper-text-sales">P&L management , review and suggest corrective actions of
          the main cost centers, departments</p></li>
          <li><p className="wrapper-text-sales">F&B cost - Restaurants, MICE and group business & wedding</p></li>
          <li><p className="wrapper-text-sales">Room cost & room profitability</p></li>
          <li><p className="wrapper-text-sales">Manpower cost and effectiveness - review payroll and outsource cost</p></li>
          <li><p className="wrapper-text-sales">Energy cost - review energy (HLP) cost</p></li>
          <li><p className="wrapper-text-sales">Information Tech, Admins, Cost of doing business – Sales &Marketing cost</p></li>
          <li><p className="wrapper-text-sales">Forecast of GOP in line with Business Forecast.</p></li>
        </ul>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <img src={require('./../assets/money.jpg')} alt="" className="asset-image"/> 
      </div>
      </div>
      </div>
     </div>
    </div>    
   </>
  );
}; 
export default Profitmanage;