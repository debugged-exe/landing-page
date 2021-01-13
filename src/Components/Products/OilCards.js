import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardDeck, Container} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 }, 
		items: 1
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 1
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 1
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1
	}
};

const OilCards = () => {
    return ( 
      <Container style={{paddingTop:100,paddingBottom:200}}>
        <h1 className='bl bw2 pl2'>Oils and Lubricants</h1>    
      <Carousel responsive={responsive}>
              
<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
          </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
    </Card.Body>
    
  </Card>
</CardDeck>



<CardDeck>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
          </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
          </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="https://www.valvoline.com/~/media/ValvolineUS/Images/product-category-landing/motor-oil-hero" />
    <Card.Body>
      <Card.Title>ABC</Card.Title>
          </Card.Body>
    
  </Card>
</CardDeck>


</Carousel>
</Container>
);
}
 
export default OilCards;