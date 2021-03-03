import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'
import './Navbar.css'
import { HashLink as Link } from 'react-router-hash-link';

function nav() {
  return (
      <Navbar fixed="top" variant="dark" className="Navbar-color" expand="lg">
        <Navbar.Brand>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <h3>Bora Automobiles</h3>
          <h6>Since 1999</h6>
        </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto Navbar-text-color">
            <Link to='/' style={{ textDecoration: 'none' }}><span className="NavbarItem ml3">Home</span></Link>
            <Link to='/#about' style={{ textDecoration: 'none' }}><span className="NavbarItem ml3">About Us</span></Link>
            <Link to="/#contact" style={{ textDecoration: 'none' }}><span className="NavbarItem ml3">Contact Us</span></Link>
            <Link to="/#ourservices" style={{ textDecoration: 'none' }}><span className="NavbarItem ml3">Our Services</span></Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default nav;
