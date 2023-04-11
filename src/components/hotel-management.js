import React from "react";
import './style.css';
import'./responsive.css';
import { Link } from "react-router-dom";
import {FaHandPointRight} from 'react-icons/fa';
const Hotelmanagement = () => {
  return (
    <>
    <div className="hotel-banner">
		<div className="banner-text">
		  {/* <h1>Hotel<br/>Management Services</h1> */}
		</div>
	  </div>
    {/* <div className="asset-about">
     <div className="container-fluid">
      <div className="hhh">
      <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Hotel Management Services</h3>
        <p className="wrapper-text">Cloud10 brings in strategic and operational level of Revenue Management support through a series of activities specially customized for increasing hotel revenue. We assist hotels with a full deck of analytical and intuitive inputs on managing rates, content and digital sales platforms. Additionally, we optimize productivity from all other segments of business like Corporates, Leisure and MICE. When a hotel outsources the Revenue Management activity to cloud10; it essentially is signing up for quality and consistency.</p>
        <p className="wrapper-text">As an institution built on knowledge-leadership, we help your hotel in de-risking itself from an individual’s thought process. The hotel can claim the advantages of yield management at a fraction of what it would cost it to hire full-time resources. Our objective is to achieve a market share which is significantly higher than the fair share. Over time, our hotels have benefited from a higher RevPAR and improved profitability.</p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <img src={require('./../assets/pool.jpg')} alt=""/>
      </div>
       </div>    
       </div>
     </div>
    </div> */}
    <div class="we-offer-area text-center bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="site-heading text-center">
                        <h2>What we <span>Offer</span></h2>
                    </div>
                </div>
            </div>
                <div class="row our-offer-items less-carousel">
                
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <img id="s-1"src={require('./../assets/profit-growth.png')} alt="hero1"/>     
                            <h4 className="text-offer">Revenue Management and Distribution</h4>
                            <p>
                            Revenue management is the process of maximizing revenue by optimizing pricing, inventory, and demand.
                            </p>
                            <button className="read_button"style={{margin:'20px 0px'}}><Link to="/revenue" className="read_link">Read More &rarr;</Link></button>
                        </div>
                    </div>
                
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                           <img id="s-1"src={require('./../assets/social-media.png')} alt="hero1"/>
                            <h4 className="text-offer">Digital Marketing  and Communication</h4>
                            <p>
                            Digital marketing is the practice of promoting products or services through digital channels, such as search engines, social media, email, and websites.
                            </p>
                            <button className="read_button" style={{margin:'20px 0px'}}><Link to="/digitalmarketing" className="read_link">Read More &rarr;</Link></button>
                        </div>
                    </div>
                 
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <img id="s-1" src={require('./../assets/service.png')} alt="hero1"/>
                            <h4 className="text-offer">Guest Satisfaction and Reputation</h4>
                            <p>
                            Guest satisfaction refers to the degree to which clients are happy with a product, service, or overall experience provided by a business.
                            </p>
                            <button className="read_button" style={{margin:'20px 0px'}}><Link to="/guest" className="read_link">Read More &rarr;</Link></button>
                        </div>
                    </div>
                  
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <img id="s-1"src={require('./../assets/profit.png')} alt="hero1"/>
                            <h4 className="text-offer">Finance and Cost Control</h4>
                            <p>
                            Enhancing profit requires a combination of strategic thinking, creativity, and implementation of effective tactics.we are here to help you .
                            </p>
                            <button className="read_button" style={{margin:'20px 0px'}}><Link to="/profit" className="read_link">Read More &rarr;</Link></button> 
                        </div>
                    </div>
                  
                    <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                          <img id="s-1"src={require('./../assets/hotel.png')} alt="hero1"/>
                            <h4 className="text-offer">Hotel Business Development </h4>
                            <p>
                             Hotel Management requires careful planning, monitoring & ongoing evaluation. By managing assets effectively, companies can improve efficiency.
                            </p>
                            <button className="read_button" style={{margin:'20px 0px'}}><Link to="/hoteloperation" className="read_link">Read More &rarr;</Link></button>
                        </div>
                    </div>
                 
                    {/* <div class="col-md-4 col-sm-6 equal-height">
                        <div class="item">
                            <i class="fas fa-headset"></i>
                            <h4 className="text-offer">24/7 Support</h4>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div> */}
                 
                </div>
        </div>
    </div>
    <div className="example-header">
    <h1 className="text-center">Let's Work Together</h1>
    <p>We are here to give you profit</p>
    </div>
    <div className="why_work-withus">
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Marketing & communication Sales process </h3>
        <p className="wrapper-text">Our team has a combined of experienced people  we co-ordinate with the high-quality international and domestic hotel companies that allows our partner hotels to benefit from the best practices and insights from across the industry.</p>
        <p className="wrapper-text">We unlock the true potential of a hotel asset by challenging the status quo. By using market intelligence, logical assessment, and industry best practices, we balance hotel operations with the financial objectives of the owner/investors.</p>
        </div>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <img src={require('./../assets/Marketing_communication.png')} alt="" className="asset-image"/>
      </div>
    </div>
    </div>
    </div>
   </>
  );
}; 
export default Hotelmanagement;