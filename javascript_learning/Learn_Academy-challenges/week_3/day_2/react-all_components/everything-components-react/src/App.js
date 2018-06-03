// React needs ./ to read components from other files
import React, { Component } from 'react';
import './App.css';
import Header from './components/header.js'
import Footer from './components/footer.js'
import Recipes from './components/recipes.js'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			recipes: [
				{name: 'Meatballs'},
				{name: 'Mac & Cheese'}
			]
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Header name="Matt"/>
				</header>
				<Recipes recipes={this.state.recipes}/>

				<Footer />
			</div>
			);
		}
	}

export default App;
