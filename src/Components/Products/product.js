import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { } from 'react-bootstrap';
import './product.css'
import { Link } from 'react-router-dom';

function Product() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <section id='ourservices' className='mv3'  style={{overflow:'hidden'}}>
            <span id="goto" style={{ marginTop: "-300px", paddingBottom: "300px", display: "block" }}> &nbsp; </span>
            <div>
                <h2 data-aos='fade-down' className='b'>
                    Our Products
                </h2>
            </div>
            <div className="row ma2">
                    <div data-aos='fade-right' className="col-sm-6 mb4">
                        <div className="center pointer cardX" style={{backgroundColor:'#15102e'}}>
                            <div className="card-body flex justify-center items-center flex-column">
                                <h5 className="card-title">HCV & LCV SPARES</h5>
                                <p className="card-text tc">
                                    We deal in all types of original spares in Tata, Eicher, Leyland, AMW, Bharat Benz, Mahindra Navi-star and other LCV's & HCV's running in India.
                                </p>
                                <Link to="/spares" style={{ textDecoration: 'none',backgroundColor:'#fa741b', color:'white'}} className='br2 b pa2 grow'>
                                View All Products
                                </Link>
                            </div>
                        </div>
                </div>
                <div data-aos='fade-left' className="col-sm-6">
                    <div className="center pointer cardX" style={{backgroundColor:'#15102e'}}>
                        <div className="card-body flex justify-center items-center flex-column">
                            <h5 className="card-title">LUBRICANTS & OIL</h5>
                            <p className="card-text tc">
                                We deal in Castrol, Valvoline, Tata Motors, TVS and other best quality lubricants available in Indian Market.
                            </p>
                            <Link to="/products" style={{ textDecoration: 'none',backgroundColor:'#fa741b', color:'white'}} className='br2 b pa2 grow'>
                                View All Products
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>);
}
export default Product;