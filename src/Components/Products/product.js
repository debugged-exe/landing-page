import React from 'react';
import {} from 'react-bootstrap';
import './product.css'
function Product(){
    return(<section>
            <h2>
                OUR PRODUCTS
            </h2>
    <div className="row">
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">HCV & LCV SPARES</h5>
                    <p className="card-text">
                        We deal in all types of original spares in Tata, Eicher, Leyland, AMW, Bharat Benz, Mahindra Navi-star and other LCV's & HCV's running in India.
                    </p>
                </div>
            </div>
        </div>
        <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">LUBRICANTS & OIL</h5>
                    <p className="card-text">
                        We deal in Castrol, Valvoline, Tata Motors, TVS and other best quality lubricants available in Indian Market.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </section>);
}
export default Product;