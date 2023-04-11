import React, {useState} from 'react';
import { Link } from "react-router-dom";
import { FiMail} from 'react-icons/fi';
import { Button } from 'react-bootstrap';
import { FaFacebookF,FaTwitter ,FaInstagram,FaYoutube,FaLinkedinIn,FaMapMarkerAlt,FaPhoneAlt,FaArrowCircleUp} from 'react-icons/fa';
const Footer = () => {
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
  <>
    <div className="pt-5 pb-5 footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-xs-12 about-company">
          <h2 id="footer-heading">Contact Us On</h2>
          <div className="media-icons">
            <Link to=""><span className="icon"><FaFacebookF/></span></Link>
            <Link to="https://twitter.com/cloud10_service"><span className="icon"><FaTwitter/></span></Link>
            <Link to="https://www.instagram.com/cloud10_hospitality/"><span className="icon"><FaInstagram/></span></Link>
            {/*<Link to=""><span className="icon"><FaYoutube/></span></Link> */}
            <Link to="https://www.linkedin.com/"><span className="icon"><a href="https://www.linkedin.com/" target="_blank"></a><FaLinkedinIn/></span></Link>
          </div>
        </div>
        <div className="col-lg-3 col-xs-12 links">
          <h4 id="footer-heading" className="mt-lg-0 mt-sm-3">Links</h4>
            <ul className="m-0 p-0">      
              <li id="homepage-links"><Link to="/" onClick={scrollToTop}>Home</Link></li>   
              <li id="homepage-links"><Link to="/about"onClick={scrollToTop}>About</Link></li>
              <li id="homepage-links"><Link to="/hotel-management"onClick={scrollToTop}>Services</Link></li>
              <li id="homepage-links"><Link to="/contact"onClick={scrollToTop}>Contact Us</Link></li>
            </ul>
        </div>
        <div className="col-lg-4 col-xs-12 location">
          <h4 id="footer-heading"className="mt-lg-0 mt-sm-4">Address</h4>
          <div className="media-icons">
          <p><span id="social-icon"><FaMapMarkerAlt/></span>Unique Aura Apartment 11/2,
              Sahakar Marg,Jyoti Nagar<br/> Housing Board Flats, Lalkothi,
              Jaipur, Rajasthan 302007</p>
          <p className="mb-0"><span id="social-icon"><FaPhoneAlt/></span><a href="tel:PHONE_NUM">6371499414</a></p>
          <p><span id="social-icon"><FiMail/></span><a href="mailto:info@cloud10hospitality.com">info@cloud10hospitality.com</a></p>
          </div>
        </div>
      </div>
    </div>
    <Button id="top-bottom"onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}><FaArrowCircleUp/></Button>
    </div>
    <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">© Copyright All Rights Reserved</span>
          {/* <span className="policy_terms">    
            <Link to=""><img src={require('./../assets/quotus.png')}alt="" /></Link>
          </span> */}
        </div>
    </div>
  </>
  );
}; 
export default Footer;