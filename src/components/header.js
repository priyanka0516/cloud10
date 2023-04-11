import React, { Component} from "react";
import {Container,Nav,Navbar,NavDropdown}from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.css';
import'./responsive.css';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpanded: false,
      open: false,
    };
  }

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  }

  setNavClose = () => {
    this.setState({ navExpanded: false });
  }

handleButtonClick = () => {
  this.setState((state) => {
    return {
      open: !state.open,
    };
  });
};
  render() {
    return (
      <>
        <Navbar bg="white" variant="dark" expand="lg"sticky="top" onToggle={this.setNavExpanded} expanded={this.state.navExpanded}>
          <Container>
            <Navbar.Brand>
              <Link to={"/"} className="navbar-brand"><img src={require('./../assets/logo.png')}alt="" /></Link>
            </Navbar.Brand>          
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto"onClick={this.setNavClose}>
                  <Link to={"/"} id="nav"className="active">Home</Link>
                  <Link to={"/about"}id="nav">About Us</Link>
                  <Link to={"/hotel-management"}id="nav">Services</Link>                                   
                  <Link to={"/contact"}id="nav">Contact Us</Link>
                  <Link to={"/contact/#contact-detail"}><button className="custom-btn btn-3"><span>Get Started</span></button></Link>               
                </Nav>          
              </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}
}
export default Header;