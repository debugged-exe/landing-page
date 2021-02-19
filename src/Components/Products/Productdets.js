import React from 'react';
import Displayprods from './Displayprods.js';
import engineoil from '../Databases/Engineoil.js';
import grease from '../Databases/Grease.js';
import brakes from '../Databases/Brakes.js';

const Productdets = ({product}) => {

        switch(product){
            case 'Engineoil':
                return(
                    <Displayprods products = {engineoil} />
                );

            case 'Grease':
                return(
                    <Displayprods products = {grease} />
                );
						case 'Brakes':
		            return(
		                <Displayprods products = {brakes} />
		             );

            default :
                return(
                    <h1>Loading....</h1>
                )
        }


}

export default Productdets;
