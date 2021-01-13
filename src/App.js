import React from 'react';
import { ROUTES } from './routes';
import { Switch, Route, HashRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/nav.js'
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends React.Component {
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
				<Switch>{this.getRoutes(ROUTES)}</Switch>
        <Footer/>
			</Router>
		);
	}
}

export default App;
