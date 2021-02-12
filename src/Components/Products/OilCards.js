import React,{useState} from 'react';
import 'tachyons';
import './Oilcard.css';
import 'react-multi-carousel/lib/styles.css';
import { Card, CardDeck, Container, Row,Col} from 'react-bootstrap';
import {Carousel as Car} from 'react-bootstrap';
import Carousel from 'react-elastic-carousel'
import {gearPic}  from './oilnames';
import {tataEngineOil}  from './oilnames';
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

import grease1 from '../../Container/Images/grease/grease1.jpeg'
import grease2 from '../../Container/Images/grease/grease2.jpeg'
import grease3 from '../../Container/Images/grease/grease4.jpeg'
import grease5 from '../../Container/Images/grease/grease9.jpeg'
import grease6 from '../../Container/Images/grease/grease10.jpeg'


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

	const [gear,setGear]=useState(gearPic);

  var tataEngineOil=[
		{image:img1,name:'CH-4'},
		{image:img2,name:'CF-4'},
		{image:img3,name:'CI-4+'},
		{image:img5,name:'Tata4'},
		{image:img6,name:'Tata5'}
	]

	var luberoxEngineOil = [
		{image:img10,name:'CH-4'},
		{image:img8,name:'CF-4'},
		{image:img6,name:'CI-4+'}
	]
	var castrolEngineOil = [
		{image:img1,name:'CH-4'},
		{image:img4,name:'CF-4'},
		{image:img8,name:'CI-4+'}
	]

	var pro4TEngineOil = [
		{image:img5,name:'20w40'}
	]

var gulfEngineOil =
[
		{image:img10,name:'Gulf1'},
		{image:img8,name:'Gulf2'},
		{image:img6,name:'Gulf3'},
		{image:img7,name:'Gulf4'},
		{image:img2,name:'Gulf5'}
]


var valvolineEngineOil=[
		{image:img1,name:'valvoline1'},
		{image:img4,name:'valvoline2'},
		{image:img6,name:'valvoline3'},
		{image:img8,name:'valvoline4'},
		{image:img2,name:'valvoline5'}
]
  var tataGrease = [
		{image:grease1,name:'tataGrease1'},
		{image:grease3,name:'tataGrease2'},
		{image:grease6,name:'tataGrease3'},
		{image:grease5,name:'tataGrease4'},
		{image:grease2,name:'tataGrease5'}
	]

var gulfGrease=[
	{image:grease3,name:'GulfGrease1'},
	{image:grease6,name:'GulfGrease2'},
	{image:grease2,name:'GulfGrease3'},
	{image:grease5,name:'GulfGrease4'},
	{image:grease1,name:'GulfGrease5'}

]

    let n = 4;

		let result = new Array(Math.ceil(tataEngineOil.length / n)).fill().map((_) => tataEngineOil.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
		}
		tataEngineOil = result;

		n = 4;
		result = new Array(Math.ceil(luberoxEngineOil.length / n)).fill().map((_) => luberoxEngineOil.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
		}
		luberoxEngineOil = result;
		n = 4;
		result = new Array(Math.ceil(castrolEngineOil.length / n)).fill().map((_) =>castrolEngineOil.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
		}
		castrolEngineOil = result;

		n = 4;
		result = new Array(Math.ceil(pro4TEngineOil.length / n)).fill().map((_) => pro4TEngineOil.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
		}
		pro4TEngineOil = result;


		n = 4;
 	 result = new Array(Math.ceil(gulfEngineOil.length / n)).fill().map((_) => gulfEngineOil.splice(0, n));
 	 if (result[result.length - 1] !== undefined) {
 		 while (result[result.length - 1].length < n) {
 			 result[result.length - 1].push('N');
 		 }
 	 }
 	 gulfEngineOil = result;

		 result = new Array(Math.ceil(valvolineEngineOil.length / n)).fill().map((_) =>valvolineEngineOil.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    valvolineEngineOil = result;

    n = 4;
		result = new Array(Math.ceil(tataGrease.length / n)).fill().map((_) => tataGrease.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    tataGrease = result;

    n = 4;
		result = new Array(Math.ceil(gulfGrease.length / n)).fill().map((_) => gulfGrease.splice(0, n));
		if (result[result.length - 1] !== undefined) {
			while (result[result.length - 1].length < n) {
				result[result.length - 1].push('N');
			}
    }
    gulfGrease = result;

    return (
      <>
      <Container style={{paddingTop:100}}>
        <h1 className='bl bw2 pl2' style={{borderLeftColor:'#fa741b',fontWeight:'bold'}}>ENGINE OIL</h1>


				<h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Tata</h1>
					<Carousel responsive={responsive}>
					{ tataEngineOil.map((urls, i) => (
						<CardDeck key={i}>
							{urls.map((url,index)=>
								url === 'N' ? (
									<Card key={index} style={{ opacity: 0 }} />
															) :
							(
								<Card key={index}>
								<Card.Img variant="top" src={url.image} height='300'/>
								<Card.Body>
								<Container>
									<Row><h4>{url.name}</h4></Row>
								</Container>
								</Card.Body>
							</Card>

							))}
						</CardDeck>
						))}
						</Carousel>

    <h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Luberox</h1>
      <Carousel responsive={responsive}>
      { luberoxEngineOil.map((urls, i) => (
				<CardDeck key={i}>
				  {urls.map((url,index)=>
				    url === 'N' ? (
							<Card key={index} style={{ opacity: 0 }} />
													) :
				  (
				    <Card key={index}>
				    <Card.Img variant="top" src={url.image} height='300'/>
						<Card.Body>
				    <Container>
				      <Row><h4>{url.name}</h4></Row>
				    </Container>
				    </Card.Body>
				  </Card>

				  ))}
				</CardDeck>
				))}
				</Carousel>


				<h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Castrol</h1>
		      <Carousel responsive={responsive}>
		      { castrolEngineOil.map((urls, i) => (
						<CardDeck key={i}>
						  {urls.map((url,index)=>
						    url === 'N' ? (
									<Card key={index} style={{ opacity: 0 }} />
															) :
						  (
						    <Card key={index}>
						    <Card.Img variant="top" src={url.image} height='300'/>
								<Card.Body>
						    <Container>
						      <Row><h4>{url.name}</h4></Row>
						    </Container>
						    </Card.Body>
						  </Card>

						  ))}
						</CardDeck>
						))}
						</Carousel>

<h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Gulf</h1>
<Carousel responsive={responsive}>
      { gulfEngineOil.map((urls, i) => (
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
    <Card key={index}>
    <Card.Img variant="top" src={url.image} height='300'/>
		<Card.Body>
		<Container>
			<Row><h4>{url.name}</h4></Row>
		</Container>
		</Card.Body>
  </Card>

  ))}
</CardDeck>
))}
</Carousel>


      <h1 className='bl bw2 pl2 mt-5' style={{borderLeftColor:'#fa741b'}}>Valvoline</h1>

      <Carousel responsive={responsive}>
      { valvolineEngineOil.map((urls, i) => (
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
    <Card key={index}>
    <Card.Img variant="top" src={url.image} height='300'/>
    <Card.Body>
    <Container>
      <Row><h4>{url.name}</h4></Row>
    </Container>
    </Card.Body>
  </Card>

  ))}
</CardDeck>
))}
</Carousel>

<h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Pro 4T</h1>
	<Carousel responsive={responsive}>
	{ pro4TEngineOil.map((urls, i) => (
		<CardDeck key={i}>
			{urls.map((url,index)=>
				url === 'N' ? (
					<Card key={index} style={{ opacity: 0 }} />
											) :
			(
				<Card key={index}>
				<Card.Img variant="top" src={url.image} height='300'/>
				<Card.Body>
				<Container>
					<Row><h4>{url.name}</h4></Row>
				</Container>
				</Card.Body>
			</Card>

			))}
		</CardDeck>
		))}
		</Carousel>
</Container>

<Container style={{paddingTop:50}}>
<h1 className='bl bw2 pl2' style={{borderLeftColor:'#fa741b',fontWeight:'bold'}}>GEAR, BRAKE AND STEERING OILS</h1>
      <Carousel >{
                gear.map((data)=>
                  (
                   <div className="main">
											    <img src={data.img} className="imgsize" alt="oil pic"  height='400px ' width='400px' style={{marginLeft:'10%'}}/>
													<div className="flex flex-column items-center mainin" >
			                        <h3 className="tc f2"> {data.title.toUpperCase()}</h3>
			                        <p className="fw5 tc des">{data.description}</p>
			                    </div>
									 </div>
                  )
                )
              }
        </Carousel>
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
    <Card.Img variant="top" src={url.image} height='300'/>
		<Card.Body>
 	 <Container>
 		 <Row><h4>{url.name}</h4></Row>
 	 </Container>
 	 </Card.Body>
  </Card>

  ))}
</CardDeck>
))}
</Carousel>

<h1 className='bl bw2 pl2  mt-5' style={{borderLeftColor:'#fa741b'}}>Gulf</h1>
      <Carousel responsive={responsive}>
      { gulfGrease.map((urls, i) => (
<CardDeck key={i}>
  {urls.map((url,index)=>
    url === 'N' ? (
			<Card key={index} style={{ opacity: 0 }} />
									) :
  (
  <Card key={index}>
    <Card.Img variant="top" src={url.image} height='300'/>
    <Card.Body>
    <Container>
      <Row><h4>{url.name}</h4></Row>
    </Container>
    </Card.Body>
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
