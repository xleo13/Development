import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect, Link} from 'react-router-dom';
import {
	Button,
	NavDropdown,
	Navbar,
	Nav,
	NavItem,
	MenuItem,
	Col,
	Row,
	Grid,
	PageHeader,
	Carousel
} from 'react-bootstrap';
import './App.css';
import Cats from './pages/Cats';
import NewCat from './pages/NewCat';

var backApi;
if(process.env.NODE_ENV === 'production') {
    backApi = "https://cat-tinder-fun.herokuapp.com";
} else {
    backApi =  "http://localhost:3000";
}

class App extends Component {
	constructor(props) {
		super(props)
		this.state ={
			cats: [],
			newCatSuccess: false,
			errors: null
		}
	}

	componentWillMount() {
		fetch(`${backApi}/cats`)
		.then((rawResponse) => {
			return rawResponse.json();
		})
		.then((parsedResponse) => {
			this.setState({cats: parsedResponse.cats});
		})
	}

	handleNewcat(params) {
		fetch(`${backApi}/cats`,
		{
			body: JSON.stringify(params),
			headers: {
				"Content-Type": "application/json",
					  "Accept": "application/json"
			},
			method: "POST"
		})
		.then((rawResponse) => {
			return rawResponse.json();
		})
		.then((parsedResponse) => {
			if(parsedResponse.errors) {
				this.setState({errors: parsedResponse.errors})
				console.log(this.state.errors)
			} else{
				const cats = Object.assign([], this.state.cats);
				cats.push(parsedResponse.cat)
				this.setState({
					cats: cats,
					errors: null,
					newCatSuccess: true
				})
				console.log(this.state.cats)
			}
		}).catch(function() {
                console.log('could not save new user')
            })
	}

	render() {
		return (
			<Router>
				<div>
					<Nav />

<div>
<Carousel>
<Carousel.Item>
	<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1489084917528-a57e68a79a1e?auto=format&fit=crop&w=1050&q=80" height="900px" width="500px"/>
	<Carousel.Caption>
		<h3>First slide label</h3>
		<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
	</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
	<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?auto=format&fit=crop&w=1050&q=80" height="900px" width="500px" />
	<Carousel.Caption>
		<h3>Second slide label</h3>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
	</Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
	<img width={900} height={500} alt="900x500" src="https://images.unsplash.com/photo-1472491235688-bdc81a63246e?auto=format&fit=crop&w=1050&q=80"   />
	<Carousel.Caption>
		<h3>Third slide label</h3>
		<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
	</Carousel.Caption>
</Carousel.Item>
</Carousel>
</div>


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
