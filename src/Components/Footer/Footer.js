import React from 'react';
import 'tachyons';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'#15102c'}} className="b white-80 pv2">
            <p className="f5 flex justify-around mt3">
                <span className="dib">©1999 BORA AUTOMOBILES, Inc.</span>
                <a style={{textDecoration:'none',outline:'none'}} className="link white-80 hover-gray" href="/privacy"> Privacy Policy</a>
                <a style={{textDecoration:'none',outline:'none'}} className="link white-80 hover-gray" href="#">boraautomobiles99@gmail.com </a>
            </p>
        </footer>
    );
}

export default Footer;