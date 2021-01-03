import React from 'react';
import 'tachyons';
import { ImWhatsapp } from 'react-icons/im';
import { SiGmail } from 'react-icons/si';

const Footer = ({showPolicy}) => {
    return (
        <footer style={{backgroundColor:'#15102c'}} className="b white-80 pv2">
            <p className="f5 flex flex-wrap justify-around mt3">
                <span className="dib">©1999 BORA AUTOMOBILES, Inc.</span>
                <a style={{textDecoration:'none',outline:'none'}} className="link white-80 hover-gray" onClick={showPolicy}> Privacy Policy</a>
                <p><a href='https://wa.me/919325521117'><ImWhatsapp className='mr4' color = 'white' size = '1.5rem'/></a><a href='mailto:boraautomobiles99@gmail.com'><SiGmail  color = 'white' size = '1.5rem'/></a></p>
            </p>
        </footer>
    );
}

export default Footer;