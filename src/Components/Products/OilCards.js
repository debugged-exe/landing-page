import React from 'react';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardDeck, Container, Row,Col} from 'react-bootstrap';
import {Carousel as Car} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import img1 from '../../Container/Images/engineOil/img1.jpeg'
import img2 from '../../Container/Images/engineOil/img2.jpeg'
import img3 from '../../Container/Images/engineOil/img3.jpeg'
import img4 from '../../Container/Images/engineOil/img4.jpeg'
import img5 from '../../Container/Images/engineOil/img5.jpeg'
import img6 from '../../Container/Images/engineOil/img6.jpeg'
import img7 from '../../Container/Images/engineOil/img7.jpeg'
import img8 from '../../Container/Images/engineOil/img8.jpeg'
import img9 from '../../Container/Images/engineOil/img9.jpeg'
import img10 from '../../Container/Images/engineOil/img10.jpeg'

import oil2 from '../../Container/Images/gearOil/oil2.jpeg'
import oil1 from '../../Container/Images/gearOil/oil1.jpeg'
import oil3 from '../../Container/Images/gearOil/oil3.jpeg'

import grease1 from '../../Container/Images/grease/grease1.jpeg'
import grease2 from '../../Container/Images/grease/grease2.jpeg'
// import grease3 from '../../Container/Images/grease/grease3.jpeg'
import grease3 from '../../Container/Images/grease/grease4.jpeg'
// import grease5 from '../../Container/Images/grease/grease5.jpeg'
// import grease6 from '../../Container/Images/grease/grease6.jpeg'
// import grease7 from '../../Container/Images/grease/grease7.jpeg'
import grease4 from '../../Container/Images/grease/grease8.jpeg'
import grease5 from '../../Container/Images/grease/grease9.jpeg'
import grease6 from '../../Container/Images/grease/grease10.jpeg'
// import grease11 from '../../Container/Images/grease/grease11.jpeg'


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
  var enginePic =[img1,img4,img3,img5,img6]
  var engineDets = [{brand:'Valvoline',price:200,qty:10},{brand:'Valvoline E700',price:200,qty:10},{brand:'Valvoline',price:200,qty:10},{brand:'Valvoline',price:150,qty:10},{brand:'Pro 4T 20W40',price:20,qty:10},{brand:'Tata 15W 40',price:20,qty:10},{brand:'Gulf 15W 40',price:20,qty:10},{brand:'Luberox 15W 40',price:20,qty:10},{brand:'Luberox',price:20,qty:10},{brand:'Luberox',price:20,qty:10}]
  var luberoxEngine = [img10]
  var gulfEngine = [img8]
  var tataEngine = [img7]
  var gearPic = [oil1,oil2,oil3]
  var gearDets = [{brand:'Valvoline',price:20,qty:10},{brand:'Tata',price:20,qty:10},{brand:'Luberox',price:20,qty:10}]
  var greasePic = [grease1,grease3,grease5,grease6]
  var greaseDets = [{brand:'Gulf/Imperial'},{brand:'AdBlue PSF1'},{brand:'Gulf'},{brand:'Gulf'}]
  var tataGrease = [grease2,grease4]

    let n = 4;
		let result = new Array(Math.ceil(enginePic.length / n)).fill().map((_) => enginePic.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    enginePic = result;

    n = 4;
		result = new Array(Math.ceil(gulfEngine.length / n)).fill().map((_) => gulfEngine.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    gulfEngine = result;


    n = 4;
		result = new Array(Math.ceil(tataGrease.length / n)).fill().map((_) => tataGrease.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    tataGrease = result;

    n = 4;
		result = new Array(Math.ceil(tataEngine.length / n)).fill().map((_) => tataEngine.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    tataEngine = result;

    n = 4;
		result = new Array(Math.ceil(gearPic.length / n)).fill().map((_) => gearPic.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    gearPic = result;
    
    n = 4;
		result = new Array(Math.ceil(luberoxEngine.length / n)).fill().map((_) => luberoxEngine.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    luberoxEngine = result;

    n = 4;
		result = new Array(Math.ceil(greasePic.length / n)).fill().map((_) => greasePic.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    greasePic = result;

    let ik = 0;
    let ip = 0;
    return ( 
      <>
      <Container style={{paddingTop:100}}>
        <h1 className='bl bw2 pl2' style={{borderLeftColor:'#fa741b',fontWeight:'bold'}}>ENGINE OIL</h1>    
      
        <h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Tata</h1>    
        <Carousel responsive={responsive}>
      { tataEngine.map((urls, i) => (    
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
    <Card key={index}>
    <Card.Img variant="top" src={url} height='300'/>

  </Card>
  
  ))}
</CardDeck>
))}
</Carousel>
        
        <h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Luberox</h1>    
        <Carousel responsive={responsive}>
      { luberoxEngine.map((urls, i) => (    
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
    <Card key={index}>
    <Card.Img variant="top" src={url} height='300'/>

  </Card>
  
  ))}
</CardDeck>
))}
</Carousel>

<h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Gulf</h1>    
<Carousel responsive={responsive}>
      { gulfEngine.map((urls, i) => (    
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
    <Card key={index}>
    <Card.Img variant="top" src={url} height='300'/>

  </Card>
  
  ))}
</CardDeck>
))}
</Carousel>
      

      <h1 className='bl bw2 pl2 mt-5' style={{borderLeftColor:'#fa741b'}}>Valvoline</h1>    

      <Carousel responsive={responsive}>
      { enginePic.map((urls, i) => (    
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
    <Card key={index}>
    <Card.Img variant="top" src={url} height='300'/>
    <Card.Body>
    <Container>
      <Row><h4>{engineDets[ik++].brand}</h4></Row>
    </Container>
    </Card.Body>
    {/* <Card.Footer>
    <Container fluid>
      <Row className="justify-content-center">
        <Col><i>Cost: ₹{engineDets[index].price}</i></Col>
        <Col>Qty: {engineDets[index].qty}</Col>
      </Row>
    </Container>
  </Card.Footer> */}

  </Card>
  
  ))}
</CardDeck>
))}
</Carousel>
</Container>

<Container style={{paddingTop:50}}>
<h1 className='bl bw2 pl2' style={{borderLeftColor:'#fa741b',fontWeight:'bold'}}>GEAR, BRAKE AND STEERING OILS</h1>    
        <Car>
  <Car.Item>
    <img
      className="d-block w-100"
      src={oil1}
      alt="First slide"
      height='600'
      width='auto'
    />
    {/* <Car.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Car.Caption> */}
  </Car.Item>
  <Car.Item>
    <img
      className="d-block w-100"
      src={oil2}
      alt="Third slide"
      height='600'
      width='300'
    />

    {/* <Car.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Car.Caption> */}
  </Car.Item>
  <Car.Item>
    <img
      className="d-block w-100"
      src={oil3}
      alt="Third slide"
      height='600'
      width='300'
    />

    {/* <Car.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Car.Caption> */}
  </Car.Item>
</Car>
</Container>

<Container style={{paddingTop:50}}>
<h1 className='bl bw2 pl2' style={{borderLeftColor:'#fa741b',fontWeight:'bold'}}>GREASE, LUBRICANTS AND COOLANTS</h1>   

        <h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Tata</h1>    
<Carousel responsive={responsive}>
      { tataGrease.map((urls, i) => (    
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
    <Card key={index}>
    <Card.Img variant="top" src={url} height='300'/>

  </Card>
  
  ))}
</CardDeck>
))}
</Carousel>

<h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Gulf</h1>    
      <Carousel responsive={responsive}>
      { greasePic.map((urls, i) => (    
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
  <Card key={index}>
    <Card.Img variant="top" src={url} height='300'/>
    <Card.Body>
    <Container>
      <Row><h4>{greaseDets[ip++].brand}</h4></Row>
    </Container>
    </Card.Body>
    {/* <Card.Footer>
    <Container fluid>
      <Row className="justify-content-center">
        something
      </Row>
    </Container>
  </Card.Footer> */}

  </Card>
  
  ))}
</CardDeck>
))}
</Carousel>
</Container>
</>


);
}
 
export default OilCards;