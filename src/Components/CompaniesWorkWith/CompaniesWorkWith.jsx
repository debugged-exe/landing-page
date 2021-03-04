import React from 'react';
import  Carousel from 'react-elastic-carousel'; 
import CompaniesList from './CompaniesList';
import './CompaniesWorkWith.css';

const breakPoints = [
    { width : 1, itemsToShow : 1, itemsToScroll:1,showArrows:false},
    { width : 550, itemsToShow : 2, itemsToScroll:1,showArrows:false},
    { width : 760, itemsToShow : 3, itemsToScroll:3,showArrows:false},
    { width : 1200, itemsToShow : 4, itemsToScroll:4,showArrows:false},
]

const CompaniesListing = CompaniesList;

const CompaniesWorkWith = () => {
    return(
        <div className='flex items-center justify-center back-ground'>
        <Carousel style={{paddingTop:'40px',paddingBottom:'40px'}} autoPlaySpeed='2000' enableAutoPlay='true' breakPoints={breakPoints}>
            {
                CompaniesListing.map(
                    company => 
                    <p key={company.id} className='f2 white'>{company.alt}</p>
                )
            }
        </Carousel>
        </div>
    );
};

export default CompaniesWorkWith;