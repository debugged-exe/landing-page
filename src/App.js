import React from 'react';
import 'tachyons';
import { ROUTES } from './routes';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/nav.js'
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import OilCards from './Components/Products/OilCards';
import Productdets from './Components/Products/Productdets';

class App extends React.Component {
	constructor(){
			 super();
			 this.state = {
					 product:'',
			 }
	 }

	 showProducts=(product)=>{
			 this.setState({product:product});
	 }

	getRoutes(routes) {
		return routes.map(
			(prop, key) =>
				prop.path === '/' ? (
					<Route exact path={prop.path} key={key}>
						{prop.component}
					</Route>
				) : (
					<Route path={prop.path} key={key}>
						{prop.component}
					</Route>
				)
		);
	}

	render() {
		return (
			<Router basename="/">
				<Navbar />
				<Switch>{this.getRoutes(ROUTES)}
				 <Route exact path='/products' component={()=><OilCards showProducts={this.showProducts}/>}/>
				 <Route exact path='/productdets' component={()=><Productdets product={this.state.product} />}/>
				 </Switch>
        <Footer/>
			</Router>
		);
	}
}

export default App;
