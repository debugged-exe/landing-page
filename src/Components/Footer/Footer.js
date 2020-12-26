import React from 'react';
import 'tachyons';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'#15102c'}} class="b white-80 pv2">
            <p class="f5 flex justify-around mt3">
                <span class="dib">©1999 BORA AUTOMOBILES, Inc.</span>
                <a style={{textDecoration:'none',outline:'none'}} class="link white-80 hover-gray" href="/privacy"> Privacy Policy</a>
                <a style={{textDecoration:'none',outline:'none'}} class="link white-80 hover-gray" href="#">boraautomobiles@gmail.com </a>
            </p>
        </footer>
    );
}

export default Footer;