import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import'./responsive.css';
export default class Home extends Component {
    render() {
      const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };

      return (
        <>
        <div className="top-banner">
          <div className="container">
          <div className="top-banner--text">
            <h1>We Increase Overal performace of the hotel, growth</h1>
            {/* <h1>Take Your Hospitality Business To The Next Level</h1> */}
              <p>Cloud10 Hospitality Services takes your hotel’s performance to a new height with the use of advanced technology, knowledge , contemporary process for commercial performance & competitive strategies.</p>	
            </div>  
            <div className="scrolldown" onClick={handleClickScroll}>  
              <div className="chevrons"onClick={handleClickScroll}>
                <div className='chevrondown'onClick={handleClickScroll}></div>
                <div className='chevrondown'onClick={handleClickScroll}></div>
              </div>
            </div>
        </div>
        </div>
        <div className="about-section-6">
        <div className="container">
          <div className="about-wrap">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-left">
                  <div className="section-title">
                    <h3 className="sub-title">Who we are</h3>
                    <h2 className="title">We specialise in Serving profit by giving best services.</h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">         
              <div className="about-right">
                <div className="about-experience-award">
                  <div className="single-item">
                    <h2 className="number">01</h2>
                    <span>Years of <br/> experience</span>
                  </div>
                  <div className="single-item">
                    <h2 className="number">10+</h2>
                    <span>Satisfied <br/>Clients </span>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="section counter-section">
            <div className="container">
                <div className="counter-wrap">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">                      
                            <div className="counter-item text-center">
                                <div className="counter-icon">
                                  <img src="assets/images/counter/counter-1.png" alt=""/>
                                </div>
                                <div className="counter-text">
                                    <span>
                                    <span className="counter">15</span>+
                                    </span>
                                    <p>Completed Projects</p>
                                </div>
                            </div>           
                        </div>
                        <div className="col-lg-3 col-sm-6">                         
                            <div className="counter-item text-center">
                              <div className="counter-icon">
                                <img src="assets/images/counter/counter-2.png" alt=""/>
                              </div>
                              <div className="counter-text">
                                <span>
                                <span className="counter">15</span>+
                                </span>
                                <p>Satisfied Clients</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">            
                            <div className="counter-item text-center">
                                <div className="counter-icon">
                                  <img src="assets/images/counter/counter-3.png" alt=""/>
                                </div>
                                <div className="counter-text">
                                  <span>
                                  <span className="counter">99</span>%
                                  </span>
                                  <p>Web Site Analyse</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-item text-center">
                                <div className="counter-icon">
                                  <img src="assets/images/counter/counter-4.png" alt=""/>
                                </div>
                                <div className="counter-text">
                                  <span>
                                  <span className="counter">99</span>%
                                  </span>
                                  <p>Clients Supoort Done</p>
                                </div>
                            </div>          
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="home-about" id="section-3">
          <div className="container">
            <div className="row">
            <div className="col-1">
              <img src={require('./../assets/man.png')} alt=""/>  
              <img src={require('./../assets/elements.png')} alt="" className="elements"/>              
            </div> 
                <div className="col-2">
                <div className="wrapper">
                <h1 className="wrapper-heading">About<span className="content-text"> Us</span></h1>
                <p className="wrapper-text">Cloud 10 Hospitality Service takes your hotel’s performance to a new height with the use of
                  advanced technology, knowledge , contemporary process for commercial performance &
                  competitive strategies.</p>
                <p className="wrapper-text">How we add value to your business - Clouds 10 s team of experts create and gives you
                end-to-end functional solution that includes most important elements of hotel management -
                business development and revenue maximisation, guest love and loyalty, data capture and
                synergize to produce stronger performance, profit engineering to enhance financial benefits.</p>   
                </div> 
                </div> 
            </div>
          </div>
        </div>
        <div className="get-intouch">
          <div className="container">
          <div className="row">
          <div className="col-md-4">
            <div className="get-intouch-text">
              <h2 className="intouchleft-text">Are You Looking for The Best Hotel Management Services?</h2>
            </div>
          </div>
          <div className="col-md-4">
          <div className="get-intouch-text">
              <p className="intouchcenter-text">If you’re looking for a unique management style with a hands on approach for your next resort project then we’d love to speak to you. </p>
            </div>
          </div>
          <div className="col-md-4">
          <div className="get-intouch-text">
              <Link to={"/contact/#contact-detail"}><button className="intouchright-text">Get In Touch Now</button></Link>
            </div>
          </div>
        </div>
          </div>
        </div>
    <div id="service"> 
      <div className="container">
        <div className="row">
        <div className="section_title text-center">
        <h2>Our <span className="content-text">Services</span></h2>
        <p>Our entrepreneurial approach to hotel operations focuses on building authentic relationships, identifying opportunities, and achieving common goals.</p>
        </div>
        <div className="col-sm-5">
          <div className="sec">
          <p className="demo-content-p"> Hotel Management Services </p>      
          <p className="wrapper-text">Cloud10 hospitality team of experts create and gives you end-to-end functional solution that includes most important elements of hotel management.</p>
          <button className="read_button"><Link to="/hoteloperation" className="read_link">Read More &rarr;</Link></button>
          </div>
        </div>
        <div className="col-sm-7">
        <div className="right-image">
            <img src={require('./../assets/download.png')} alt="hero1"/>
          </div>
        </div>
        <div className="col-sm-5">
        <div className="right-image">
            <img src={require('./../assets/Business-Consultant.png')} alt="hero1"/>
          </div>
        </div>
        <div className="col-sm-7">
        <div className="sec">
        <p className="demo-content-p"> Hotel Consultancy Services </p>
        <p className="wrapper-text">We know how to enhance your business we’ve been there.Manage Revenue,manage Guest,manage Profit etc.</p>
        <button className="read_button"><Link to="/hotel-management" className="read_link">Read More &rarr;</Link></button>
        </div>
        </div>
        <div className="col-sm-5">
        <div className="sec">
        <p className="demo-content-p">Hotel Development Services</p>      
        <p className="wrapper-text">Development, operations, asset management,food & beverage, marketing, & accounting services we're here to help you.</p>
        <button className="read_button"><Link to="/revenue" className="read_link">Read More &rarr;</Link></button>
        </div>
        </div>
        <div className="col-sm-7">
          <div className="right-image">
            <img src={require('./../assets/k.png')} alt="hero1"/>
          </div>
        </div>
        </div>
        </div>   
      </div>
      <div className="example-header">
            <h1 className="text-center">Let's Work Together</h1>
            <p>We are here to give you profit</p>
      </div>
      <div id="clients" className="wow fadeInUp">
      <div className="container">
        <h3>Our<span className="content-text"> Partners</span></h3>
        <Slider {...settings}>
          <div className="ourclients">
          <img src={require('./../assets/aws_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/tesla_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/google_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/booking_client.png')} alt="hero1"/>
          </div>         
          <div className="ourclients">
          <img src={require('./../assets/expedia_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/aws_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/expedia_client.png')} alt="hero1"/>
          </div>
          <div className="ourclients">
          <img src={require('./../assets/tesla_client.png')} alt="hero1"/>
          </div>
        </Slider>
        </div>
      </div>
      </>
      );
    }
}
  
