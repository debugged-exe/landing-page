import React from 'react';
import 'tachyons';
import './Footer.css';
import { ImWhatsapp } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <span className='flex widgets justify-center items-center'>
                <p className='flex flex-column justiy-between items-end bg-white shadow-2 br4 pa2'>
                    <a className='mb2' href='https://wa.me/919325521117'><ImWhatsapp color = 'green' size = '2.2rem'/></a>
                    <a href='mailto:boraautomobiles99@gmail.com'><SiGmail  color = 'tomato' size = '2.2rem'/></a>
                </p>
            </span>
        <footer style={{backgroundColor:'#15102c'}} className="b white-80 pv2 mt4">
            <p className="f5 flex flex-wrap justify-around mt3">
                <span className="dib">©1999 BORA AUTOMOBILES, Inc.</span>
                <Link to='/privacy' style={{textDecoration:'none',outline:'none'}} className="link white-80 hover-gray"> Privacy Policy</Link>
            </p>
        </footer>
        </div>
    );
}

export default Footer;