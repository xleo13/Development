import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ApartmentIndex from './components/ApartmentIndex';
import ApartmentDetail from './components/ApartmentDetail';
import Apartments from './store/Apartments';
import './css/App.css';

class App extends Component {
  render() {
    return (
    	<Router>
		  	<div>
			  	<div>
					<Header />
					<Route exact path='/' component={ApartmentIndex} />
					<Route path='/apartments/:id' component={ApartmentDetail} />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</Router>
    );
  }
}

export default App;
