import React from "react";
import './style.css';
import'./responsive.css';
import {FaHandPointRight} from 'react-icons/fa';
const Digitalmarketing = () => {
  return (
    <>
    <div className="digital-banner">
		<div className="banner-text">
		</div>
	  </div>
    <div className="digitize-section">
    <div className="container">
    <h1>Services</h1>
    <div className="row">
        <div className="col-md-4 col-sm-8 ">
            <div className="service-box">
                <div className="service-icon yellow">
                    <div className="front-content">
                    <img src={require('./../assets/seo.png')} alt=""/>
                        <h3>SEO Optimization</h3>
                    </div>
                </div>
                <div className="service-content">
                <img src={require('./../assets/seo.png')} alt=""/>
                    <h3>SEO Optimization</h3>
                    <p>
                    SEO, or Search Engine Optimization, is a set of practices designed to improve the accessibility and positioning of a website in organic search.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-8 ">
            <div className="service-box">
                <div className="service-icon orange">
                    <div className="front-content">
                        <img src={require('./../assets/social-mediam.png')} alt=""/>
                        <h3>Social media Marketing</h3>
                    </div>
                </div>
                <div className="service-content">
                <img src={require('./../assets/social-mediam.png')} alt=""/>
                    <h3>Social media Marketing</h3>
                    <p>It's true that social media is great way to promote your hospitality and grow audience.</p>
                </div>
            </div>
        </div>
        <div className="col-md-4 col-sm-8">
            <div className="service-box">
                <div className="service-icon grey">
                    <div className="front-content">
                    <img src={require('./../assets/bullhorn.png')} alt=""/>
                        <h3>Digital Marketing</h3>
                    </div>
                </div>
                <div className="service-content">
                <img src={require('./../assets/bullhorn.png')} alt=""/>
                    <h3>Digital Marketing</h3>
                    <p>Digital marketing, also called online marketing, refers to all marketing efforts that occur on the internet.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    <div className="asset-about">
     <div className="container">
     <div className="image-left">
     <img id="dg-image1"src={require('./../assets/Digital_marketing.png')} alt=""/>
	<div>
  <div className="left-asset">
        <h3 className="content-text">World of digitisation</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">The earth’s population is now 8.01 billion people</p></li>
          <li><p className="wrapper-text-sales">68% of the population are mobile phone users (5.44 billion)</p></li>
          <li><p className="wrapper-text-sales">59.4% of the population are social media users (4.76 billion)</p></li>
          <li><p className="wrapper-text-sales">64.4% of the population is online every day (5.16 billion)</p></li>
        </ul>
        </div>
	</div>
</div>

<div className="image-right">
<img id="dg-image1"src={require('./../assets/optimization.png')} alt=""/>
	<div>
  <div className="left-asset">
      <h3 className="content-text">Benefit</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">Reach out to global customers</p></li>
          <li><p className="wrapper-text-sales">Freedom to express and connect customers</p></li>
          <li><p className="wrapper-text-sales">Influence guests decision to book hotel</p></li>
          <li><p className="wrapper-text-sales">Advantage of global distribution systems and enhance booking</p></li>
          <li><p className="wrapper-text-sales">Hotels presence and visibility in channels leads to attract traffic & increase conversion</p></li>
          <li><p className="wrapper-text-sales">Interactive and result is measurable</p></li>
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
    <div className="about-section-6">
    <div className="container">
    {/* <div className="works">
      <h1 className="work-with-us-heading">Why Work With Us?</h1><br/>
    </div> */}
    <div className="row">
    <div className="col-sm-12 col-xs-12 col-md-12  col-lg-6 order_2 bg1">
      <img id="dg-image" src={require('./../assets/Social_media.png')} alt="" className="asset-image"/>
      </div>
      <div className="col-sm-12 col-xs-12 col-md-12 col-lg-6 order_2 bg1">
        <div className="left-asset">
        <h3 className="content-text">Performance Booster</h3>
        <ul className="diamond">
          <li><p className="wrapper-text-sales">Direct booking through Search&#10095;Media &#10095;Meta</p></li>
          <li><p className="wrapper-text-sales">Improve search advertising</p></li>
          <li><p className="wrapper-text-sales">Balanced & cost effective approach to paid advertising</p></li>
          <li><p className="wrapper-text-sales">Third party affiliate</p></li>
          <li><p className="wrapper-text-sales">Run activities and explore activities</p></li>
          <li><p className="wrapper-text-sales">Email marketing </p></li>
          <li><p className="wrapper-text-sales">Partner with influencers</p></li>
        </ul>
        </div>
      </div>
    </div>
    </div>
    </div>
   </>
  );
}; 
export default Digitalmarketing;