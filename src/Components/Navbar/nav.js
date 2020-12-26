import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'
import './Navbar.css'
function nav() {
  return (
    <div >
      <Navbar fixed="top" variant="dark" className="Navbar-color">
        <Navbar.Brand href="#home">
          <h3>Bora Automobiles</h3>
          <h6>Since 1999</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto Navbar-text-color">
            <Nav.Link href="#home"><span className="NavbarItem">Home</span></Nav.Link>
            <Nav.Link href="/#about"><span className="NavbarItem">About Us</span></Nav.Link>
            <Nav.Link href="/#contact"><span className="NavbarItem">Contact Us</span></Nav.Link>
            <Nav.Link href="/#ourservices"><span className="NavbarItem">Our Services</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>);
}

export default nav;
