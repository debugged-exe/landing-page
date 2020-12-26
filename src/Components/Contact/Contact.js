import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return(
        <div id='contact'>
            <span id="goto" style = {{marginTop: "-300px", paddingBottom: "300px", display: "block"}}> &nbsp; </span>
            <div data-aos='fade-down' style={{color:'#fa741b'}} className='f2 b tc'>Connect Us At</div>
        <div className='flex justify-around ma3 mb5'>
            <div data-aos='fade-up' className='shadow-4 pa4'>
                <div>
                    <p className='f2 b'>Reach Us At</p>
                    <p className='f3 b ma0'>Name :</p>
                    <input type='text' className='pr6 pv1'/>
                    <p className='f3 b ma0 mt3'>Email :</p>
                    <input type='email' className='pr6 pv1'/>
                    <p className='f3 b ma0 mt3'>Message :</p>
                    <textarea type='text' className='w-100'/>
                </div>
            </div>
            <div data-aos='fade-up'>
                <p className='f2 ma0 b'>Address</p>
                <p>NEAR  MRC GODOWN, OPP.</p> 
                <p>SBI BANK, UBALE NAGAR,</p>
                <p className='f2 ma0 b'>Contact Details</p>
                <p><span className='b'>MOB : </span>9822823513, 7620858694</p>
                <p><span className='b'>E-Mail : </span>boraautomobiles99@gmail.com</p>
            </div>
        </div>
        </div>
    );
}

export default Contact;