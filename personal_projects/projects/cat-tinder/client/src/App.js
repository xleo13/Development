import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import {
	Grid,
	PageHeader,
	Row,
	Col
} from 'react-bootstrap';
import './App.css';
import Cats from './pages/Cats';
import NewCat from './pages/NewCat';

class App extends Component {
	constructor(props) {
		super(props)
		this.state ={
			apiUrl: "http://localhost:3001",
			cats: [],
			newCatSuccedd: false,
			errors: null
		}
	}

	componentWillMount() {
		fetch(`${this.state.apiUrl}/cats`)
		.then((rawResponse) => {
			return rawResponse.json();
		})
		.then((parsedResponse) => {
			this.setState({cats: parsedResponse.cats});
		})
	}

	handleNewcat(params) {
		fetch(`${this.state.apiUrl}/cats`,
		{
			body:JSON.stringify(params), // <- we need to stringify the json for fetch
			headers: {  // <- We specify that we're sending JSON, and expect JSON back
				'Content-Type': 'application/json'
			},
			method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
		})
		.then((rawResponse) => {
			return rawResponse.json();
		})
		.then((parsedResponse) => {
			if(parsedResponse.errors) { //check for any side server errors
				this.setState({errors: parsedResponse.errors})
			} else{
				const cats = Object.assign([], this.state.cats);
				cats.push(parsedResponse.cat) //add the new cat to our list of Cats
				this.setState({
					cats: cats, // update cats in state
					errors: null, //clear out any errors if the exist
					newCatSuccess: true //this is the new flag in state
				})
			}
		})
	}

	render() {
		return (
			<Router>
				<div>
					<Route exact path="/" render={props => (
						<Grid>
							<PageHeader>
								<Row id="first-row">
									<Col xs={8}>
										Cat Tinder
									</Col>
									<Col xs={4}>
										<small>
										<Link
											to='/cats'
											id='cats-link'
											onClick={() =>{this.setState({newCatSuccess: true})}}>
											Cats Profiles</Link>
										</small>
									</Col>
								</Row>
							</PageHeader>
							<NewCat
							onSubmit={this.handleNewcat.bind(this)}
							errors={this.state.errors && this.state.errors.validations}
							/>
							{this.state.newCatSuccess &&
							<Redirect to="/cats" />
							}
						</Grid>
					)} />

					<Route exact path="/cats" render={props => (
						<Grid>
							<PageHeader>
								<Row>
									<Col xs={8}>
										Cat Tinder
										<small className='subtitle'>All the Cats</small>
									</Col>
									<Col xs={4}>
										<small>
										<Link
											to='/'
											id='home-link'
											onClick={() =>{this.setState({newCatSuccess: false})}}>
											Home</Link>
										</small>
									</Col>
								</Row>
							</PageHeader>
							<Cats cats={this.state.cats} />

							{!this.state.newCatSuccess &&
							<Redirect to='/' />
							}
						</Grid>
					)} />
				</div>
			</Router>
		);
	}
}

export default App;
