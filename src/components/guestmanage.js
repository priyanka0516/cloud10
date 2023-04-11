import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Guestmanage = () => {
  return (
    <>
    <div className="guest-banner">
      <div className="container"> 
      </div>
    </div>
    <div className="guest-middle">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 img-col">
          <div class="Box-row">
            <p>“it takes months to find a customer and only seconds to loose one..”
</p>
        </div>
          </div>
        
          <div className="col-md-12 col-lg-8">
                <h1 className="mbr-section-title align-left mbr-bold pb-3 mbr-fonts-style display-2">We can keep <strong>them happy</strong></h1>
                <p className="mbr-text">When it comes to the hotel experience, cloud10 is giving best service to you.elevating guest satisfaction is the ultimate goal. But in reality, this is much more complex than it sounds.</p>    
                    <div className="row">
                    <div className="col-md-12 col-lg-6">
                   <ul>
                    <li>
                     <img src={require('./../assets/checkmark.png')}/>
                      <p>Giving a personal touch to their stay</p>
                    </li> 
                    <li>
                    <img src={require('./../assets/checkmark.png')}/>
                      <p>Quickly Resolve Guest Complaints</p>
                    </li> 
                  </ul>
                    </div>     
                    <div className="col-md-12 col-lg-6">
                    <ul>
                    <li>
                    <img src={require('./../assets/checkmark.png')}/>
                      <p>Keeping Our Staff Happy</p>
                    </li> 
                    <li>
                    <img src={require('./../assets/checkmark.png')}/>
                      <p>Taking Suggestion and Feedback</p>
                    </li>
                  </ul>
                      </div>   
                      </div>      
            </div>
        </div>
      </div>
    </div>
    <div className="asset-about">
     <div className="container">
      <div className="hhh">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-7 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Guest satisfaction & reputation</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">Best practices to make guest happy and loyal to brand</p></li>
          <li><p className="wrapper-text-sales">SOP s for ‘Front of the House’ operations team</p></li>
          <li><p className="wrapper-text-sales">Guest engagement at all touch points</p></li>
          <li><p className="wrapper-text-sales">Tracking system for guest complaint</p></li>
          <li><p className="wrapper-text-sales">Escalation metric & address guest complaint</p></li>
          <li><p className="wrapper-text-sales">SOP s resolve issues without financial compensation</p></li>
          <li><p className="wrapper-text-sales">Training modules for managing guest satisfaction</p></li>
          <li><p className="wrapper-text-sales">Reputation management</p></li>
          <li><p className="wrapper-text-sales">Guest Loyalty programme</p></li>
        </ul>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-5 order_2 bg1">
      <img src={require('./../assets/Guest_satisfaction.png')} alt="" id="pg-y"/> 
      </div>
       </div>  
       </div>
     </div>
    </div>
   </>
  );
}; 
export default Guestmanage;