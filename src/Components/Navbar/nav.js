import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';

function nav() {
  return (
      <Navbar fixed="top" variant="dark" className="Navbar-color" expand="lg">
        <Navbar.Brand to="/">
          <h3>Bora Automobiles</h3>
          <h6>Since 1999</h6>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto Navbar-text-color">
            <Link to='/#home'><span className="NavbarItem">Home</span></Link>
            <Link to='/#about'><span className="NavbarItem">About Us</span></Link>
            <Link to="/#contact"><span className="NavbarItem">Contact Us</span></Link>
            <Link to="/#ourservices"><span className="NavbarItem">Our Services</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default nav;
