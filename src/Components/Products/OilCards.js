import React,{useState} from 'react';
import 'tachyons';
import './Oilcard.css';
import {ProdutsContent} from './oilnames.js';
// import { Link } from 'react-router-dom';
// import { FiArrowRightCircle } from "react-icons/fi";

const OilCards = ({showProducts}) => {
  const[items,setItems]=useState(ProdutsContent);

    return (
      <>
      <div style={{paddingTop:70}}>
        <div className="backgroundimg">
           <h1 className="white tc pt4 pointer" style={{fontWeight:'bold'}}> Categories </h1>
          <p className="f3 white tc fw5 pointer"  > <span style={{color:'#fa741b'}}> Categories</span></p>
				</div>
				  <h1 className="tc fw5"> Products </h1>
					<p className="tc f4 line" style={{color:'#585a59'}}> We deal in Castrol, Valvoline, Tata Motors, TVS and other best quality lubricants available in Indian Market.</p>

				<div className="flex flex-wrap">
          {
            items.map((data)=>{
              return(
                <div className="flex pl2 bw3 bl mt5 ml5 shadow-2 prod" style={{borderLeftColor:'#fa741b'}}>
                  <img src={data.img} alt={data.name} height="270 "width="270"/>
                  <div>
                     <p className="f3 fw5 tc mt4">{data.title}</p>
                     <p className="ma3 mb5">{data.description}</p>
                     <div className="mb4 ml4">
                     {/* <Link to='/Productdets' onClick={()=>showProducts(`${data.name}`)} className="f5 fw4 pa2 br4 white check grow" style={{textDecoration: 'none',backgroundColor:'#fa741b',color:'white'}} >Check out
                    <FiArrowRightCircle size="1.5rem" color="white" className="pl1"/>
                    </Link> */}
                    </div>
                  </div>
                </div>
              )
            })
          }
				</div>
		  </div>
</>
);
}

export default OilCards;
