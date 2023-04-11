import React from 'react';
import Iframe from "react-iframe";
const Contact = () => {
  return (
	<>
    <div className="contact-banner">
		<div className="banner-text">
		  <h1>Contact Us</h1>
		</div>
	</div>
	<div className='role-contact' id="contact-detail">
		<div className='container'>
			<div className='row'>
			<div className="one">
				<h1 className='contact-heading'>Quickly Contact us</h1>
			</div>
				<div className='col-md-4'>
					<div className='contactsome'>
					<img className="floating"src={require('./../assets/phone-call.png')} alt="phone"/>
					<h2 className="contact-text-1">Call Us</h2>
        			<p className="contact-text"><a href="tel:PHONE_NUM">6371499414</a></p>
					</div>
				</div>
				<div className='col-md-4'>
				<div className='contactsome'>
					<img className="floating"src={require('./../assets/mail.png')} alt="phone"/>
					<h2 className="contact-text-1">Mail Us</h2>
        			<p className="contact-text"><a href="mailto:info@cloud10hospitality.com">info@cloud10hospitality.com</a></p>
				</div>
				</div>
				<div className='col-md-4'>
				<div className='contactsome'>
					<img className="floating"src={require('./../assets/placeholder.png')} alt="phone"/>
				    <h2 className="contact-text-1">Visit Us</h2>
        			<p className="contact-text">Unique Aura Apartment
            		11/2,<br/> Sahakar Marg,Jyoti Nagar <br/>Housing Board Flats, Lalkothi, <br/>Jaipur, Rajasthan 302007</p>
				</div>
				</div>
			</div>
		</div>
	</div>
	  <div className="section" id="contact-us">
        <div className="container">
            <div className="row">
             <h1 className="map-heading">Get in Touch with us.</h1>
             <p className="contact-headline">We are here to help you so , visit us here.</p>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div id="map">
                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2726372701854!2d75.79169726436544!3d26.89484121733527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db43d27873b63%3A0xdfea79f3211a2539!2sUnique%20Aura%20Apartment!5e0!3m2!1sen!2sin!4v1672894035190!5m2!1sen!2sin"      
                      width="100%"
                      id="myId"
                      height="500px"
                      className="myClassname"
                    />
                    </div>
                </div>         
            </div>
        </div>
    </div>
	</>
  );
}; 
export default Contact;